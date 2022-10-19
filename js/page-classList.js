var Util; // from "js/util.js"
var TALENTS; // from "data/talents-race.js"
var CLASS_LIST; // from "data/classes.js"

var tabBuilder;
function init(){
	tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(CLASS_LIST);
	tabBuilder.SetTabTitleFetcher((obj) => { return obj.name; });
	tabBuilder.SetPageParser(BuildClassPage);
	tabBuilder.SetPageParseAfterFunc(function(){
		$(".subtab-btn").on('click', GoToSubPage);
		$(".subtab-btn:first-child").click();
	});
	tabBuilder.Build("FrameContentHeader", "ItemContainer");
}

function BuildClassPage(classObj){
	return `
	<div class="Page">
		<h2>【${classObj.category}系】 ${classObj.name} ${classObj.alias[0]}</h2>
		<div class="paragraph class-info">${classObj.desc.join('<br>')}</div>

		<h4>戰鬥修正</h4>
		<table class="class-state">
			<tr><th>命中</th><th>迴避</th><th>發動</th><th>抵抗</th><th>看破</th><th>物Ｄ</th><th>魔Ｄ</th><th>行動值</th><th>生命力</th></tr>
			<tr>${Object.values(classObj.states).map(val => `<td>+${val}</td>`).join('')}</tr>
		</table>

		<h4>稱號效果</h4>
		<div class="class-effect">
			${classObj.effect.join("<br>")}
		</div>

		<h4>稱號天賦：</h4>
		<div class="Subtab" style="margin:5px;">
			<div class="subtab-bar">
				<div class="subtab-btn pseudoBtn" data-key="A">類型A</div>
				<div class="subtab-btn pseudoBtn" data-key="B">類型B</div>
			</div>
			<hr class="subtab-baseline">
		</div>
		<div id="Subtab-Container"></div>
	</div>`.fmt();
}
function GoToSubPage(evt){
	$(".subtab-btn.active").removeClass("active");
	$(evt.target).addClass("active");

	var classObj = tabBuilder.GetCurrentObj();
	var type = $(evt.target).attr('data-key');
	var content = `
		<div class="class-type">
			${classObj['type'+type].join("<br>")}
		</div>
		${TALENTS.filter( t => t.type == `class-${classObj.name}-${type}`).sort(Util.sort.cmpTalent).map( t => parseTalent(t)).join('') }
	`.fmt();

	$("#Subtab-Container").empty();
	$("#Subtab-Container").append(content);
}

window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}