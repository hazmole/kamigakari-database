$(document).ready(buildNavBar);

const NAVBAR = [
	{ text: "首頁", url: "index.html" },
	{ text: "敵人列表", url: "enemy-list.html" },
]; 

function buildNavBar(){
	var navbarObj = $("#FrameNavbar");
	if(!navbarObj) return;

	var navObjList = NAVBAR.map( obj => `<a href="${obj.url}"><div class="navitem ${obj.style}">${obj.text}</div></a>`);
	
	navbarObj.empty();
	navbarObj.append(`<div id="FrameNavbarInner">${navObjList.join('')}</div>`);
}

String.prototype.fmt = function(){
	return this.replace(/[\t]/g, '')
}