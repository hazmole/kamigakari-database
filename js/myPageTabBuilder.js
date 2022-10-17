/***********
 *  Version: 1.0
 * *********/

 class MyPageTabBuilder{
  constructor(){
    this.tabElemId = null;
    this.pageElemId = null;
    this.objList = [];

    this.GetTitleFunc = function(obj){ obj.title; };
    this.BuildPageFunc = function(obj){ return `<div>${obj.value}</div>`; }
  }

  SetPageList = function(list){ this.objList = list; }
  SetTabTitleFetcher = function(func){ this.GetTitleFunc = func; }
  SetPageParser = function(func){ this.BuildPageFunc = func; }

  Build = function(tabElemId, pageElemId){
    this.tabElemId = tabElemId;
    this.pageElemId = pageElemId;

    // tab Btn
    var elemArr = this.objList.map( (obj, idx) => `<div class="PageTab pseudoBtn" tab-data="${idx}">${this.GetTitleFunc(obj)}</div>` );
    $(`#${this.tabElemId}`).append(elemArr);
    $(`#${this.tabElemId} .PageTab`).on('click', this.GoToPage.bind(this));

    // Goto Default
    $(`#${this.tabElemId} .PageTab`).get(0).click();
  }

  GoToPage = function(evt){
    var selfElem = evt.target;

    $(`#${this.tabElemId} .PageTab`).removeClass("active");
    $(selfElem).addClass("active");

    var idx = $(selfElem).attr("tab-data");
    var pageElem = this.BuildPageFunc(this.objList[idx]);

    $(`#${this.pageElemId}`).empty();
    $(`#${this.pageElemId}`).append(pageElem);
  }

 }