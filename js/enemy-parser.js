var Util; // from "js/util.js"

function parseEnemy(obj){

	function getName(){
		return obj.name.replace(/x/, "×");
	}
	function getSize(){
		return obj.info?.size!=null? (""+obj.info.size): "-";
	}
	function getReputation(){
		return obj.info?.repu!=null? (""+obj.info.repu): "-";
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
		return obj.info?.movement? obj.info.movement.map( m => Util.EnemyMovement[m] ).join("、"): "";
	}
	function getWeakness(){
		if(!obj.info?.weakness || obj.info.weakness.length==0) return "無";
		return obj.info.weakness.map( w => `［${Util.Elemental[w]}］` ).join("");
	}
	function getState(key){
		if(!obj.states || obj.states[key]==null) return "-";
		return (""+obj.states[key]);
	}
	function getStateWithFixed(key){
		var state = (!obj.states || obj.states[key]==null)? '-': (""+obj.states[key]);
		var fixed = (!obj.states || obj.states[key]==null)? '-': obj.states[key]+7;
		return `<div class="mainVal">${state}</div><div class="fixVal">(${fixed})</div>`;
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
		//var tags = actionObj.tag.map( t => `<div class="tag">${t.shiftToFW()}</div>` ).join("");
		var tags = `<div class="tag">${actionObj.tag.map( t => t.shiftToFW() ).join("／")}</div>`;
		return `
<div class="rowField talent">
	<div class="title">${actionObj.name}</div>
	<div class="tags">${tags}</div>
	<div class="value">${Array.isArray(actionObj.effect)? actionObj.effect.join("<br>"): actionObj.effect}</div>
</div>`.fmt();
	}
	function getRewardEntry( rewardObj ){
		var lowerRange = rewardObj.range[0];
		var upperRange = rewardObj.range[1]? rewardObj.range[1]: "";
		var rewardRange = lowerRange=='auto'? '自動': `${lowerRange} ~ ${upperRange}`;
		
		var rewardContent = "無";
		if(rewardObj.content!=""){
			var cost = rewardObj.cost? rewardObj.cost: calcRewardDefaultCost(rewardObj);
			rewardContent = `${rewardObj.content} ／ ${rewardObj.effect}：${cost}G （效果值: ${rewardObj.value}）`;
		}
		return `<div class="rewardEntry">
				<div class="range">${rewardRange}</div>
				<div class="content">${rewardContent}</div>
			</div>`.fmt();
	}
	function calcRewardDefaultCost(rewardObj){
		if(rewardObj.value<=4) return rewardObj.value*500;
		if(rewardObj.value>=5) return 2000 + (rewardObj.value-4)*1000;
	}
	//===================

	return `
<div class="Enemy-Item Item">
	<div class="ItemHeader">
		<div class="Enemy-Type ${obj.type}" title="種別：${Util.CreatureType[obj.type]}"></div>
		<div class="Enemy-Level">Lv.${obj.level}</div>
		<div class="Enemy-Name">${getName()}</div>
		<div class="Enemy-ManaReward">靈力獎勵: ${Math.ceil(obj.level/5)}</div>
	</div>
	
	<div class="Enemy-Infos">
		<div class="row">
			<div class="rowField">
				<div class="title">體型</div>
				<div class="value Short" style="font-size:16px;">${getSize()}</div>
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
				<div class="title">知名度</div>
				<div class="value Short" style="font-size:16px;">${getReputation()}</div>
			</div>
			<div class="rowField">
				<div class="title">弱點</div>
				<div class="value Long">${getWeakness()}</div>
			</div>
			<div class="rowField">
				<div class="title">移動</div>
				<div class="value Long">${getMovements()}</div>
			</div>
		</div>
	</div>
	<div class="Enemy-States">
		<div class="rowField row nowrap">
			<div class="title">戰鬥值</div>
			<div class="row">
				<div class="value">
					<div class="subtitle green">命中</div>
					${getStateWithFixed("phy_hit")}
				</div>
				<div class="value">
					<div class="subtitle green">迴避</div>
					${getStateWithFixed("phy_evd")}
				</div>
				<div class="value">
					<div class="subtitle green">發動</div>
					${getStateWithFixed("mgc_hit")}
				</div>
				<div class="value">
					<div class="subtitle green">抵抗</div>
					${getStateWithFixed("mgc_evd")}
				</div>
				<div class="value">
					<div class="subtitle green">看破</div>
					${getStateWithFixed("spc_evd")}
				</div>
				<div class="value">
					<div class="subtitle purple">行動值</div>
					<div class="mainVal">${getState("speed")}</div>
					<div class="fixVal">(${getMoveSpeed("speed")})</div>
				</div>
				<div class="value">
					<div class="subtitle red">生命力</div>
					<div class="doubleLayerVal">${getState("hp")}</div>
				</div>
				<div class="value">
					<div class="subtitle blue">裝甲</div>
					<div class="doubleLayerVal">${getState("phy_armor")}</div>
				</div>
				<div class="value">
					<div class="subtitle blue">結界</div>
					<div class="doubleLayerVal">${getState("mgc_armor")}</div>
				</div>
			</div>
		</div>
	</div>

	<div class="Enemy-Actions">
		<div class="rowTitle">行動</div>
		${getActions()}
	</div>

	<div class="Enemy-Rewards">
		<div class="rowField" style="align-items:stretch;">
			<div class="rowTitle">素材</div>
			${getRewards()}
		</div>
	</div>

</div>`.fmt();
}