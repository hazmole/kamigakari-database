/***********
 *  Version: 1.1
 * *********/

 class MySearcher{
  constructor(){
    this.panelElem = null;

    this.config = {};
    this.config.placeholderText = LangUtil.Searcher['placeholderDefaultText'];
    this.config.simple = { fields: [] };
    this.config.advanced = [];

    this.itemList = null;
    this.resultList = null;

    this.compareFunc = null;
    this.afterSearchFunc = null;
  }

  //=====================
  Register(itemList, config, afterSearchFunc){
    this.itemList = itemList;
    if(config){
      if(config.placeholderText != null) this.config.placeholderText = config.placeholderText;
      if(config.simple != null)   this.config.simple   = config.simple;
      if(config.advanced != null) this.config.advanced = config.advanced;
    }
    this.afterSearchFunc = afterSearchFunc;
  }
  Build(elemId){
    this.panelElem = $(`#${elemId}`);
    if(this.panelElem.length==0){
      console.error("cannot find element: "+this.elementId);
      return ;
    }

    this.buildBasicPanel();
    this.buildAdvancedOptions();
  }
  Search(){
    // :: before: Get Filters
    var filter = {};
    filter.simple = this.panelElem.find(".SearchInput").val();
    filter.advanced = this.getActiveAdvanceSearchOption();

    // Search
    this.resultList = this.itemList.filter( item => this.isMatch(item, filter) );

    // :: after
    if(this.afterSearchFunc != null){
      this.afterSearchFunc(this.resultList);
    }
  }
  GetResult(){
    return this.resultList;
  }


  //=====================
  isMatch(itemObj, filter){
    // Simple Search
    if(filter.simple){
      var text = filter.simple;
      var result = this.config.simple.fields
        .map( field => itemObj[field].includes(text) )
        .reduce( (a,b) => a || b );

      if(!result) return false;
    }

    // Advanced Search
    if(filter.advanced.length>0){
      var result = filter.advanced
        .map( f => {
          var itemVal = getValue(itemObj, f.field);
          console.log(itemVal)
          

          if(f.type == "selection"){
            var hasPos = f.posItems.length==0 || isIncludes(f.posItems, itemVal);
            var notNeg = f.negItems.length==0 || !isIncludes(f.negItems, itemVal);
            return hasPos && notNeg;
          }
          return true;
        })
        .reduce( (a,b) => a && b );

      if(!result) return false;
    }
    return true;

    //-------
    function getValue(item, fieldPath){
      var pathArr = fieldPath.split(".");
      var value = item;
      for(var i=0; i<pathArr.length; i++){
        value = value[pathArr[i]];
      }
      return value;
    }
    function isIncludes(arr, item){
      if(Array.isArray(item)){
        return item.map( it => arr.includes(it) ).reduce( (a,b) => a||b );
      } else {
        return arr.includes(item);
      }
    }
  }  
  getActiveAdvanceSearchOption(){
    var ret = [];

    this.config.advanced.forEach( advOpt => {
      var entry = this.panelElem.find(`.AdvancedOptionEntry[data-search-field="${advOpt.field}"] .innerEntry`);
      if(entry.hasClass("selection")) {
        var positiveItem = entry.find('.yes');
        var negativeItem = entry.find('.no');

        if(positiveItem.length>0 || negativeItem.length>0){
          var args = {};
          args.field = advOpt.field;
          args.type = 'selection';
          args.posItems = positiveItem.map((i, el) => $(el).attr("data-search-value")).toArray();
          args.negItems = negativeItem.map((i, el) => $(el).attr("data-search-value")).toArray();
          ret.push(args);
        }
      }
    });
    return ret;
  }

  //=====================
  toggleAdvanceSearch(){
    this.panelElem.find(".AdvancedOptionsPanel").toggle(200);
  }
  onclickAdvSelectItem(evt){
    const elem = evt.target;
    if( $(elem).hasClass("yes") ){
      $(elem).removeClass("yes");
      $(elem).addClass("no");
    }
    else if( $(elem).hasClass("no") ){
      $(elem).removeClass("no");
    }
    else {
      $(elem).addClass("yes");
    }
    this.Search();
  }

  //=====================
  buildBasicPanel(){
    this.panelElem.append(`
      <div class="SearchBar">
        <button class="AdvancedSearchBtn">▼ ${LangUtil.Searcher['advanceSearch']}</button>
        <form class="SearchBox" onsubmit="event.preventDefault();" role="search">
          <input class="SearchInput" type="search" placeholder="${this.config.placeholderText}" autofocus />
          <button class="SearchBtn">${LangUtil.Searcher['search']}</button>
        </form>
      </div>
      <div class="AdvancedOptionsPanel"></div>`.fmt());
    this.panelElem.find(".AdvancedSearchBtn").on('click', this.toggleAdvanceSearch.bind(this));
    this.panelElem.find(".SearchInput").on('search', this.Search.bind(this));
    this.panelElem.find(".SearchBtn").on('click', this.Search.bind(this));
  }
  buildAdvancedOptions(){
    const advPanelElem = this.panelElem.find(".AdvancedOptionsPanel");
    this.config.advanced.forEach( advOpt => {
      advPanelElem.append(this.buildAdvancedOption(advOpt));
    });
    // attach Event
    advPanelElem.find(".select-item").on('click', this.onclickAdvSelectItem.bind(this));
  }
  buildAdvancedOption(optionObj){
    var optionContent = '';

    switch(optionObj.type){
      case 'selection':
        optionContent = optionObj.options.map( opt => `<div class="select-item" data-search-value="${opt.value}">${opt.text}</div>` ).join("");
        break;
      default:
        optionContent = '-';
        break;
    }

    return `
      <div class="AdvancedOptionEntry" data-search-field="${optionObj.field}">
        <div class="title">${optionObj.title}</div>
        <div class="innerEntry selection">${optionContent}</div>
      </div>`.fmt();
  }
}



var LangUtil;
if(!LangUtil) LangUtil = {};
LangUtil.Searcher = {
  search: "搜尋",
  advanceSearch: "進階搜尋",
  placeholderDefaultText: "請輸入關鍵字",
};

String.prototype.fmt = function(){
  return this.replace(/[\t]/g, '')
}