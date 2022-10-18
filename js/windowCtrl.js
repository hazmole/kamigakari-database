var WindowCtrl = {};

WindowCtrl.BlockUI = function(){
	$('body').append(`<div id="BlackLayout"></div>`);
	$('body').append(`<div id="Loading"><div class="lds-dual-ring"></div></div>`);
}
WindowCtrl.UnblockUI = function(){
	$("#BlackLayout").remove();
	$("#Loading").remove();
}

// size: Large | Normal
WindowCtrl.popupWindow = function(content, size){
	var frame = `
	<div id="WindowFrameHead"><span class="cross-stand-alone" onClick="WindowCtrl.cancel()">&nbsp;</span></div>
	<div id="WindowFrameContent">${content}</div>`;

	$('body').append(`<div id="BlackLayout" onClick="WindowCtrl.cancel()"></div>`);
	$('body').append(`<div id="WindowFrame" class="${size}">${frame}</div>`);
}
WindowCtrl.cancel = function(){
	$("#BlackLayout").remove();
	$("#WindowFrame").remove();
}