/***********
 *  Version: 1.0
 * *********/

 class MyPageTabBuilder{
  constructor(){
    this.tabElemId = null;
    this.pageElemId = null;
    this.objList = [];
    this.currentObj = null;

    this.GetTitleFunc = function(obj){ return obj.title; };
    this.BuildPageFunc = function(obj){ return `<div>${obj.value}</div>`; }
    this.AfterRenderPageFunc = null;
  }

  GetCurrentObj = function(){ return this.currentObj; }
  SetPageList = function(list){ this.objList = list; }
  SetTabTitleFetcher = function(func){ this.GetTitleFunc = func; }
  SetPageParser = function(func){ this.BuildPageFunc = func; }
  SetPageParseAfterFunc = function(func){ this.AfterRenderPageFunc = func; }

  Build = function(tabElemId, pageElemId){
    this.tabElemId = tabElemId;
    this.pageElemId = pageElemId;

    // tab Btn
    var elemArr = this.objList.map( (obj, idx) => `<div class="PageTab pseudoBtn" tab-data="${idx}">${this.GetTitleFunc(obj)}</div>` );
    $(`#${this.tabElemId}`).append(elemArr);
    $(`#${this.tabElemId} .PageTab`).on('click', this.GoToPage.bind(this));

    // Goto Default
    var defaultIdx = this.getCurrentPageIdx();
    if(defaultIdx >= this.objList.length) defaultIdx = this.objList.length-1;
    $(`#${this.tabElemId} .PageTab`).get(defaultIdx).click();
  }

  GoToPage = function(evt){
    var selfElem = evt.target;

    // Render Tabs
    $(`#${this.tabElemId} .PageTab`).removeClass("active");
    $(selfElem).addClass("active");

    // Render Page
    var idx = $(selfElem).attr("tab-data");
    var pageElem = this.BuildPageFunc(this.objList[idx]);
    $(`#${this.pageElemId}`).empty();
    $(`#${this.pageElemId}`).append(pageElem);
    this.currentObj = this.objList[idx];

    // Update URL
    this.updatePageIdx(idx);

    // After Render Page
    if(this.AfterRenderPageFunc) this.AfterRenderPageFunc();
  }

  getCurrentPageIdx = function(){
    const urlParams = new URLSearchParams(window.location.search);
    const currentPageIdx = parseInt(urlParams.get('p'));
    if(currentPageIdx==null || isNaN(currentPageIdx)) return 0;
    return currentPageIdx;
  }
  updatePageIdx = function(idx){
    const urlParams = new URLSearchParams(window.location.search);
    const path = window.location.pathname;
    urlParams.set('p', idx);
    window.history.pushState({}, '', path+`?${urlParams.toString()}`);
  }
}