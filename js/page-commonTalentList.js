var TALENTS; // from "data/talents-common.js"

function init(){
	var pageArr = [
		{ title: "共通天賦", sheets: [{ name: "共通天賦", type: "common-normal" }] },
		{ title: "高等天賦", sheets: [
			{ name: "高等天賦(Lv.5)", type: "common-advanced5" },
			{ name: "高等天賦(Lv.10)", type: "common-advanced10" },
			{ name: "高等天賦(Lv.15)", type: "common-advanced15" },
			{ name: "高等天賦(Lv.20)", type: "common-advanced20" },
		] },
	];

	var tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(pageArr);
	tabBuilder.SetPageParser(BuildCommonTalentPage);
	tabBuilder.Build("FrameContentHeader", "ItemContainer");
}

function BuildCommonTalentPage(pageObj){
	return `<div class="Page">${pageObj.sheets.map( sheet => parseSheet(sheet) ).join('')}</div>`;
	//-------------
	function parseSheet(sheetObj){
		return `
		<div class="SheetFrame">
			<h2>${sheetObj.name}</h2>
			${TALENTS.filter( t => t.type == `${sheetObj.type}`).sort(Util.sort.cmpTalent).map( t => parseTalent(t)).join('') }
		</div>`.fmt();
	}
}


window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}