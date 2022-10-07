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
    this.beforeSearchFunc = null;
    this.afterSearchFunc = null;
  }

  //=====================
  Register(itemList, config){
    this.itemList = itemList;
    if(config){
      if(config.placeholderText != null) this.config.placeholderText = config.placeholderText;
      if(config.simple != null)   this.config.simple   = config.simple;
      if(config.advanced != null) this.config.advanced = config.advanced;
      if(config.compareFunc != null) this.compareFunc = config.compareFunc;
    }
  }
  SetAfterSearchFunc(func){ this.afterSearchFunc = func; }
  SetBeforeSearchFunc(func){ this.beforeSearchFunc = func; }
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
    // :: before
    if(this.beforeSearchFunc != null){
      this.beforeSearchFunc();
    }
    var filter = {};
    filter.simple = this.panelElem.find(".SearchInput").val();
    filter.advanced = this.getActiveAdvanceSearchOption();

    // Search
    this.resultList = this.itemList.filter( item => this.isMatch(item, filter) );
    if(this.compareFunc!=null){
      this.resultList.sort(this.compareFunc);
    }

    // :: after
    this.printResultCount();
    if(this.afterSearchFunc != null){
      this.afterSearchFunc(this.resultList);
    }
  }
  GetResult(){
    return this.resultList;
  }

  printResultCount(){
    var count = this.resultList.length;
    this.panelElem.find(".SearchResult").text(LangUtil.Searcher["resultDefaultText"].replace("{0}", count));
  }

  //=====================
  isMatch(itemObj, filter){
    // Simple Search
    if(filter.simple){
      var text = filter.simple.toLowerCase();
      var result = this.config.simple.fields
        .map( field => itemObj[field]!=null && itemObj[field].includes(text) )
        .reduce( (a,b) => a || b );

      if(!result) return false;
    }

    // Advanced Search
    if(filter.advanced.length>0){
      var result = filter.advanced
        .map( f => {
          var itemVal = getValue(itemObj, f.field);

          if(f.type == "selection"){
            var hasPos = f.posItems.length==0 || isIncludes(f.posItems, itemVal);
            var notNeg = f.negItems.length==0 || !isIncludes(f.negItems, itemVal);
            return hasPos && notNeg;
          }
          else if(f.type == "dual-range"){
            return (f.min <= itemVal && itemVal <= f.max);
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
        if(item.length==0) return false;
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
      var type  = entry.attr('data-search-type');

      var filterObj = {};
      filterObj.field = advOpt.field;
      filterObj.type  = type;
      filterObj.isValid = false;

      switch(type){
        case "selection":  this.setFilterObj_selection(filterObj, entry); break;
        case "dual-range": this.setFilterObj_dualRange(filterObj, entry); break;
      }

      if(filterObj.isValid)
        ret.push(filterObj);
    });
    return ret;
  }

  //=====================
  // Selection Options
  onclickAdvSelectItem(evt){
    const elem = evt.target;
    var isPositive = $(elem).hasClass("yes");
    var isNegative = $(elem).hasClass("no");

    if( !isPositive && !isNegative ){
      $(elem).addClass("yes");
    }
    else if( isPositive ){
      $(elem).removeClass("yes");
      $(elem).addClass("no");
    }
    else if( isNegative ){
      $(elem).removeClass("no");
    }
    this.Search();
  }
  setFilterObj_selection(filterObj, entryElem){
    var positiveItem = entryElem.find('.yes');
    var negativeItem = entryElem.find('.no');

    if(positiveItem.length>0 || negativeItem.length>0){
      filterObj.posItems = positiveItem.map((i, el) => $(el).attr("data-search-value")).toArray();
      filterObj.negItems = negativeItem.map((i, el) => $(el).attr("data-search-value")).toArray();
      filterObj.isValid = true;
    }
  }

  //=====================
  // Dual-Range Options
  onchangeAdvRange(evt){
    const elem = evt.target;

    var rangeVal = this.getDualRangeVal($(elem).parent())
    $(elem).parent().parent().children('.range-number.min').html(rangeVal.min);
    $(elem).parent().parent().children('.range-number.max').html(rangeVal.max);
    this.fillDualRangeColor($(elem).parent());

    this.Search();
  }
  getDualRangeVal(rangeItem){
    var rangeVal = $(rangeItem)
      .children()
      .map( (idx, el) => parseInt($(el).val()) )
      .toArray()
      .sort((a,b)=>{ return (a-b); });
    var rangeLength = parseInt($(rangeItem).children().attr('max')) - parseInt($(rangeItem).children().attr('min')) + 1;

    return { min: rangeVal[0], max: rangeVal[1], length: rangeLength };
  }
  fillDualRangeColor(rangeItem){
    var rangeVal = this.getDualRangeVal(rangeItem);

    var fromPos = (rangeVal.min/rangeVal.length)*100;
    var toPos   = (rangeVal.max/rangeVal.length)*100;

    var defaultColor = "#C6C6C6";
    var activeColor = "#2a75ff";

    var linearPath = "";
    linearPath += `${defaultColor}, ${defaultColor} ${fromPos}%, `;
    linearPath += `${activeColor} ${fromPos}%, ${activeColor} ${toPos}%, `;
    linearPath += `${defaultColor} ${toPos}%, ${defaultColor} 100%`;

    $(rangeItem).children(":first-child").css('background', `linear-gradient(to right, ${linearPath})`)
  }
  setFilterObj_dualRange(filterObj, entryElem){
    filterObj.max = parseInt(entryElem.find(".range-number.max").html());
    filterObj.min = parseInt(entryElem.find(".range-number.min").html());
    filterObj.isValid = true;
  }




  //=====================
  // Basic Components
  toggleAdvanceSearch(){
    this.panelElem.find(".AdvancedOptionsPanel").toggle(200);
  }
  //-------
  buildBasicPanel(){
    this.panelElem.append(`
      <div class="SearchBar">
        <button class="AdvancedSearchBtn">▼ ${LangUtil.Searcher['advanceSearch']}</button>
        <form class="SearchBox" onsubmit="event.preventDefault();" role="search">
          <input class="SearchInput" type="search" placeholder="${this.config.placeholderText}" autofocus />
          <button class="SearchBtn">${LangUtil.Searcher['search']}</button>
        </form>
        <div class="SearchResult"></div>
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
    advPanelElem.find(".dual-range-item input[type=range]").on('change', this.onchangeAdvRange.bind(this));
  }
  buildAdvancedOption(optionObj){
    var optionContent = '';

    switch(optionObj.type){
      case 'selection':
        optionContent = optionObj.options.map( opt => `<div class="select-item" data-search-value="${opt.value}">${opt.text}</div>` ).join("");
        break;
      case "dual-range":
        optionContent = `
          <div class="dual-range-item">
            <div class="range-number min">${optionObj.config.min}</div>
            <div class="range-input">
              <input type="range" step=${optionObj.config.step} min=${optionObj.config.min} max=${optionObj.config.max} value=${optionObj.config.min}>
              <input type="range" step=${optionObj.config.step} min=${optionObj.config.min} max=${optionObj.config.max} value=${optionObj.config.max}>
            </div>
            <div class="range-number max">${optionObj.config.max}</div>
          </div>`.fmt();
        break;
      default:
        optionContent = '-';
        break;
    }

    return `
      <div class="AdvancedOptionEntry" data-search-field="${optionObj.field}">
        <div class="title">${optionObj.title}</div>
        <div class="innerEntry" data-search-type="${optionObj.type}">${optionContent}</div>
      </div>`.fmt();
  }
}



var LangUtil;
if(!LangUtil) LangUtil = {};
LangUtil.Searcher = {
  search: "搜尋",
  advanceSearch: "進階搜尋",
  placeholderDefaultText: "請輸入關鍵字",
  resultDefaultText: "總共{0}筆資料",
};

String.prototype.fmt = function(){
  return this.replace(/[\t]/g, '')
}