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
		<div class="paragraph" style="background:white;">${raceObj.desc.join('<br>')}</div>
		<div class="paragraph" style="background:#ddd;">
			<div><b>種族特典：${raceObj.feat.name}</b></div>
			<div>${raceObj.feat.effect.join('<br>')}</div>
		</div>
		<div class="paragraph"><b>能力值</b><br>
			<table>
				<tr><th>類型</th><th>體力</th><th>敏捷</th><th>知性</th><th>精神</th><th>幸運</th></tr>
				<tr><td>戰士</td>${Object.values(raceObj.states.phy).map(val => `<td>${val}</td>`).join('')}</tr>
				<tr><td>泛用</td>${Object.values(raceObj.states.gen).map(val => `<td>${val}</td>`).join('')}</tr>
				<tr><td>魔法</td>${Object.values(raceObj.states.mgc).map(val => `<td>${val}</td>`).join('')}</tr>
			</table>
		</div>
		<div class="paragraph"><b>種族天賦一覽</b><br>
			${TALENTS.filter( t => t.type == `race-${raceObj.name}`).map( t => `<div>${(t.isLimit? "●": "　") + t.name}</div>`).join('') }
		</div>
	</div>`.fmt();
}














window.onload = function(){ init(); }