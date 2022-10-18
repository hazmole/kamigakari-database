var Util; // from "js/util.js"
var TALENTS; // from "data/talents-race.js"
var CLASS_LIST; // from "data/classes.js"

function init(){
	var tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(CLASS_LIST);
	tabBuilder.SetTabTitleFetcher((obj) => { return obj.name; });
	tabBuilder.SetPageParser(BuildClassPage);
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

		<h4>稱號天賦：類型A</h4>
		<div class="class-type">
			${classObj.typeA.join("<br>")}
		</div>
		${TALENTS.filter( t => t.type == `class-${classObj.name}-A`).sort(Util.sort.cmpTalent).map( t => parseTalent(t)).join('') }

		<h4>稱號天賦：類型B</h4>
		<div class="class-type">
			${classObj.typeB.join("<br>")}
		</div>
		${TALENTS.filter( t => t.type == `class-${classObj.name}-B`).sort(Util.sort.cmpTalent).map( t => parseTalent(t)).join('') }
	</div>`.fmt();
}














window.onload = function(){ init(); }