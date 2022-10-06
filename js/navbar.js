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
String.prototype.shiftToFW = function(){
	var originTxt = this;
	var resultTxt = "";
	for(var i=0;i<originTxt.length;i++) {
		var charCode = originTxt.charCodeAt(i);

		var isNumber   = (charCode>=48 && charCode<=57);
		var isAlphabet = ((charCode>=97 && charCode<=122) || (charCode>=65 && charCode<=90));
		var isOther    = (charCode==43 || charCode==45)

		if(isNumber || isAlphabet || isOther){
			resultTxt += String.fromCharCode(charCode+65248);
		}
		else{
			resultTxt += String.fromCharCode(charCode);
		}
	}
	return resultTxt;
}