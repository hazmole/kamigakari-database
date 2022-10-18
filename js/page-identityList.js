var IDENTITY_LIST; // from "data/"

function init(){
	var pageArr = [
		{ title: "表職業1",   sheets: [IDENTITY_LIST[0]] },
		{ title: "表職業2~7", sheets: IDENTITY_LIST.slice(1) }
	];

	var tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(pageArr);
	tabBuilder.SetPageParser(BuildIdentityPage);
	tabBuilder.Build("FrameContentHeader", "SheetContainer");
}

function BuildIdentityPage(obj){
	return obj.sheets.map( sheet => parseSheet(sheet) ).join('');
	//-------------
	function parseSheet(sheetObj){
		return `
		<div class="SheetFrame">
			<h2>${sheetObj.name}</h2>
			<div class="Sheet">${sheetObj.sheet.map( item => parseItem(item) ).join('') }</div>
		</div>`.fmt();
	}
	function parseItem(item){
		var iconTxt = item.icon? item.icon: "　";
		return `<div class="IdentityItem">
					<div class="title"><b class="icon">${iconTxt}</b> ${item.name}</div>
					<div class="content">
						<div><div class="labelTxt">特徵</div><div>${item.feat}</div></div>
						<div><div class="labelTxt">起始道具</div><div>${item.items}</div></div>
						<div class="desc">${item.desc}</div>
					</div>
				</div>`.fmt();
	}
}


window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}