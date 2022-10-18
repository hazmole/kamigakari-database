var TALENTS; // from "data/talents-race.js"
var RACE_LIST; // from "data/races.js"

function init(){
	var tabBuilder = new MyPageTabBuilder();
	tabBuilder.SetPageList(RACE_LIST);
	tabBuilder.SetTabTitleFetcher((obj) => { return obj.name; });
	tabBuilder.SetPageParser(BuildRacePage);
	tabBuilder.Build("FrameContentHeader", "ItemContainer");
}

function BuildRacePage(raceObj){
	return `
	<div class="Page">
		<h2>${raceObj.name}</h2>
		<div class="paragraph race-info">${raceObj.desc.join('<br>')}</div>
		
		<h4>種族特典</h4>
		<div class="race-feat">
			<div><b>【${raceObj.feat.name}】</b></div>
			<div>${raceObj.feat.effect.join('<br>')}</div>
		</div>
		
		<h4>能力值</h4>
		<table class="race-state">
			<tr><th>類型</th><th>體力</th><th>敏捷</th><th>知性</th><th>精神</th><th>幸運</th></tr>
			<tr><td class="title">戰士</td>${Object.values(raceObj.states.phy).map(val => `<td>${val}</td>`).join('')}</tr>
			<tr><td class="title">泛用</td>${Object.values(raceObj.states.gen).map(val => `<td>${val}</td>`).join('')}</tr>
			<tr><td class="title">魔法</td>${Object.values(raceObj.states.mgc).map(val => `<td>${val}</td>`).join('')}</tr>
		</table>
		
		<h4>種族天賦一覽</h4>
		${TALENTS.filter( t => t.type == `race-${raceObj.name}`).map( t => parseTalent(t)).join('') }
		
	</div>`.fmt();
}


window.onload = function(){ 
	init();
	WindowCtrl.UnblockUI();
}