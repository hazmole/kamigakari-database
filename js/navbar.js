$(document).ready(buildNavBar);

const NAVBAR = [
	{ text: "首頁", url: "index.html", style: "background:var(--color-titleBack);" },
	{ text: "種族一覽", url: "race-list.html" },
	{ text: "稱號一覽", url: "class-list.html" },
	{ text: "表職業一覽", url: "identity-list.html" },
	{ text: "共通天賦一覽", url: "common-talent-list.html" },
	{ text: "道具一覽", url: "item-list.html" },
	{ text: "敵人列表", url: "enemy-list.html" },
]; 

function buildNavBar(){
	var navbarObj = $("#FrameNavbar");
	if(!navbarObj) return;

	var navObjList = NAVBAR.map( obj => `<a href="${obj.url}"><div class="navitem pseudoBtn" style="${obj.style? obj.style: ""}">${obj.text}</div></a>`);
	
	navbarObj.empty();
	navbarObj.append(`<div id="FrameNavbarInner">${navObjList.join('')}</div>`);

	$("#FrameContentHeader").prepend('<div id="NavbarToggleBtn"></div>');
	var navbarBtnObj = $("#NavbarToggleBtn");
	navbarBtnObj.on('click', function(){
		$("#FrameNavbar").toggleClass("show");
	});
}