var Util; // from "js/util.js"

function parseTalent(talent){
	function getCategoryText(){
		var arr = talent.type.split('-');
		switch(arr[0]){
			case "race": arr[0]="種族"; break;
			case "class": arr[0]="稱號"; break;
		}
		return `${arr.join('-')}`;
	}
	function getName(){
		const prefix = talent.isLimit? (talent.isLimit==1? "●": "◎"): ""; 
		return prefix + talent.name;
	}
	function getEffect(){
		return Array.isArray(talent.effect)? talent.effect.join('<br>'): talent.effect.replace(/\n/g, '<br>');
	}

	return `
	<div class="Item-list talent">
		<div class="title fixWidth">
			<div class="category">${getCategoryText()}</div>
			<div class="mainTitle">${getName()}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="phase">${talent.phase.join('/')}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="range">${talent.range}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="target">${talent.target}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="cost">${talent.cost.join('、')}</div>
		</div>
		<div class="field">${getEffect()}</div>
	</div>`.fmt();
}