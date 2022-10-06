var Util;
if(!Util) Util = {};

Util.CreatureType = {
	"humanoid": "人型",
	"beast": "魔獸",
	"insect": "怪蟲",
	"machine": "機械",
	"plant": "植物",
	"undead": "不死",
	"eudemon": "幻獸",
	"demon": "混沌",
};
Util.EnemyIntelligent = {
	"low": "低",
	"normal": "普通",
	"high": "高",
	"cunning": "狡猾",
};
Util.EnemySense = {
	"normal": "普通",
	"heat": "熱",
	"magic": "魔力",
	"field": "領域",
};
Util.EnemyComm = {
	"yes": "可能",
	"no": "不可",
};
Util.EnemyReaction = {
	"hostile": "敵對",
	"neutral": "中立",
	"friendly": "友善",
	"any": "各種",
};
Util.EnemyMovement = {
	"walk": "步行",
	"swim": "水中",
	"fly": "飛行",
};
Util.Elemental = {
	"fire": "火炎",
	"cold": "寒氣",
	"electric": "電擊",
	"magnetic": "磁力",
	"wind": "風壓",
	"flash": "閃光",
	"poison": "魔毒",
	"illusion": "幻覺",
};

function parseEnemy(obj){

	function getName(){
		return obj.name.replace(/x/, "×");
	}	
	function getReputation(){
		return obj.info?.repu!=null? obj.info.repu: "-";
	}
	function getSize(){
		return obj.info?.size!=null? obj.info.size: "-";
	}
	function getIntelligent(){
		return obj.info?.int? Util.EnemyIntelligent[obj.info.int]: "";
	}
	function getSense(){
		return obj.info?.sense? Util.EnemySense[obj.info.sense]: "";
	}
	function getCanCommunicate(){
		return obj.info?.comm? Util.EnemyComm[obj.info.comm]: "";
	}
	function getReaction(){
		return obj.info?.react? Util.EnemyReaction[obj.info.react]: "";
	}
	function getMovements(){
		return obj.info?.movement? obj.info.movement.map( m => Util.EnemyMovement[m] ).join(", "): "";
	}
	function getWeakness(){
		if(!obj.info?.weakness || obj.info.weakness.length==0) return "無";
		return obj.info.weakness.map( w => `［${Util.Elemental[w]}］` ).join("");
	}
	function getState(key){
		if(!obj.states || obj.states[key]==null) return "-";
		return obj.states[key];
	}
	function getStateWithFixed(key){
		if(!obj.states || obj.states[key]==null) return "- (-)";
		return `${obj.states[key]} (${obj.states[key]+7})`;
	}
	function getMoveSpeed(){
		if(!obj.states || obj.states["speed"]==null) return "-";
		if(obj.states["move_speed"]) return obj.states["move_speed"];
		return Math.ceil((parseInt(obj.states["speed"])+5)/3);
	}
	function getActions(){
		if(!obj.actions) return "";
		return obj.actions.map( act => getActionEntry(act) ).join("");
	}
	function getRewards(){
		if(!obj.material) return "無";
		return obj.material.map( m => getRewardEntry(m)).join("");
	}
	//===================
	function getActionEntry( actionObj ){
		return `
<div class="rowField talent">
	<div class="title">${actionObj.name}</div>
	<div class="tags">${actionObj.tag.map( t => `<div class="tag">${t.shiftToFW()}</div>` ).join("")}</div>
	<div class="value">${Array.isArray(actionObj.effect)? actionObj.effect.join("<br>"): actionObj.effect}</div>
</div>`.fmt();
	}
	function getRewardEntry( rewardObj ){
		var lowerRange = rewardObj.range[0];
		var upperRange = rewardObj.range[1]? rewardObj.range[1]: "";
		var rewardRange = `${lowerRange} ~ ${upperRange}`;
		if(lowerRange=='auto'){
			rewardRange = '自動'
		}
		var rewardContent = "無";
		if(rewardObj.content!=""){
			var cost = rewardObj.cost? rewardObj.cost: (rewardObj.value*500);
			rewardContent = `${rewardObj.content} ／ ${rewardObj.effect}：${cost}G （效果值:${rewardObj.value}）`;
		}
		return `<div class="rewardEntry">
				<div class="range">${rewardRange}</div>
				<div class="content">${rewardContent}</div>
			</div>`.fmt();
	}
	//===================

	return `
<div class="Enemy-Item Item">
	<div class="ItemHeader">
		<div class="Enemy-Type ${obj.type}" title="種別：${Util.CreatureType[obj.type]}"></div>
		<div class="Enemy-Level">Lv.${obj.level}</div>
		<div class="Enemy-Name">${getName()}</div>
	</div>
	<div class="row">
		<div class="Enemy-Infos">
			<div class="row">
				<div class="rowField">
					<div class="title">知名度</div>
					<div class="value Short">${getReputation()}</div>
				</div>
				<div class="rowField">
					<div class="title">體型</div>
					<div class="value Short">${getSize()}</div>
				</div>
				<div class="rowField">
					<div class="title">智能</div>
					<div class="value Short">${getIntelligent()}</div>
				</div>
				<div class="rowField">
					<div class="title">感官</div>
					<div class="value Short">${getSense()}</div>
				</div>
				<div class="rowField">
					<div class="title">對話</div>
					<div class="value Short">${getCanCommunicate()}</div>
				</div>
				<div class="rowField">
					<div class="title">反應</div>
					<div class="value Short">${getReaction()}</div>
				</div>
				<div class="rowField">
					<div class="title">移動</div>
					<div class="value Long">${getMovements()}</div>
				</div>
				<div class="rowField">
					<div class="title">弱點</div>
					<div class="value Long">${getWeakness()}</div>
				</div>
			</div>
		</div>
		<div class="Enemy-States">
			<div class="rowField">
				<div class="title green">命中</div>
				<div class="value Short">${getStateWithFixed("phy_hit")}</div>
			</div>
			<div class="rowField">
				<div class="title green">迴避</div>
				<div class="value Short">${getStateWithFixed("phy_evd")}</div>
			</div>
			<div class="rowField">
				<div class="title green">發動</div>
				<div class="value Short">${getStateWithFixed("mgc_hit")}</div>
			</div>
			<div class="rowField">
				<div class="title green">抵抗</div>
				<div class="value Short">${getStateWithFixed("mgc_evd")}</div>
			</div>
			<div class="rowField">
				<div class="title green">看破</div>
				<div class="value Short">${getStateWithFixed("spc_evd")}</div>
			</div>
		</div>
		<div class="Enemy-States">
			<div class="rowField">
				<div class="title purple">行動值</div>
				<div class="value Short">${getState("speed")}</div>
			</div>
			<div class="rowField">
				<div class="title purple">戰鬥移動</div>
				<div class="value Short">${getMoveSpeed()}</div>
			</div>
			<div class="rowField">
				<div class="title red">生命力</div>
				<div class="value Short">${getState("hp")}</div>
			</div>
			<div class="rowField">
				<div class="title blue">裝甲</div>
				<div class="value Short">${getState("phy_armor")}</div>
			</div>
			<div class="rowField">
				<div class="title blue">結界</div>
				<div class="value Short">${getState("mgc_armor")}</div>
			</div>
		</div>
		<div class="Enemy-Actions">
			${getActions()}
		</div>
	</div>
	<div class="row">
		
		<div class="Enemy-Rewards">
			<div class="rowField" style="align-items:stretch;">
				<div class="rowTitle">素材</div>
				${getRewards()}
			</div>
		</div>
		
	</div>
</div>`.fmt();
}