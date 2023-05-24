$(document).ready(buildNavBar);

const NAVBAR = [
	{ type:"link", text: "首頁", url: "index.html", style: "background:var(--color-titleBack);" },
	{ type:"folder", text: "世界觀", folderKey: "world-setting", list: [
			{ type:"link", text: "基本世界觀", url: "world-basic.html" },
		]
	},
	{ type:"folder", text: "玩家資料", folderKey: "player-data", list: [
			{ type:"link", text: "種族", url: "race-list.html" },
			{ type:"link", text: "稱號", url: "class-list.html" },
			{ type:"link", text: "表職業", url: "identity-list.html" },
			{ type:"link", text: "共通天賦", url: "common-talent-list.html" },
			{ type:"link", text: "道具", url: "item-list.html" },
		]
	},
	{ type:"folder", text: "搜尋器", folderKey: "searcher", list: [
			{ type:"link", text: "天賦搜尋器", url: "search-for-talent.html" },
			{ type:"link", text: "敵人搜尋器", url: "search-for-enemy.html" },
		]
	},
]; 

function buildNavBar(){
	var navbarObj = $("#FrameNavbar");
	if(!navbarObj) return;

	// generate Nav Button
	var navObjList = [];
	NAVBAR.map( obj => {
		if(obj.type == "folder"){
			navObjList.push(obj);
			for(var subObj of obj.list) {
				subObj.toggleDepend = obj.folderKey;
				navObjList.push(subObj);
			}
		}
		if(obj.type == "link"){
			navObjList.push(obj);
		}
	});
	var navElemList = navObjList.map( obj => {
		if(obj.type == "folder") return buildFolderBtn(obj);
		if(obj.type == "link") return buildLinkBtn(obj);
	});
	navbarObj.empty();
	navbarObj.append(`<div id="FrameNavbarInner">${navElemList.join('')}</div>`);

	// Handle Folder actions
	$(".navfolder").on('click', function(){
		var key = $(this).attr("data-folderkey")
		$(`.navitem[data-dependkey=${key}]`).toggle(200);
	});
	var url = window.location.pathname
	var currentPageUrl = url.substring(url.lastIndexOf('/')+1);
	var currentPageObj = navObjList.find( obj => obj.url == currentPageUrl );
	$(".navitem[data-dependkey]").hide();
	if(currentPageObj!=null && currentPageObj.toggleDepend!=null){
		console.log(currentPageObj.toggleDepend)
		$(`.navitem[data-dependkey=${currentPageObj.toggleDepend}]`).show();
	}	

	// Handle Shrink-Screen
	$("#FrameContentHeader").prepend('<div id="NavbarToggleBtn"></div>');
	var navbarBtnObj = $("#NavbarToggleBtn");
	navbarBtnObj.on('click', function(){
		$("#FrameNavbar").toggleClass("show");
	});
	

	//====================
	function buildLinkBtn(obj){
		return `<a href="${obj.url}"><div class="navitem pseudoBtn"
				style="${obj.style? obj.style: ""}"
				${ obj.toggleDepend!=null? (`data-dependkey="${obj.toggleDepend}"`): "" }>
		 	${obj.text}
	 	</div></a>`.fmt();
	}
	function buildFolderBtn(obj){
		return `<div class="navitem navfolder pseudoBtn" data-folderkey="${obj.folderKey}">${obj.text}<i class="arrow right"></i></div>`;
	}
}