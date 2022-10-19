var Util; // from "js/util.js"

function parseGear(itemObj){
	function getCategory(){
		var typeArr = itemObj.type.split('-');
		return typeArr[0];
	}
	function getName(){
		var catogory = getCategory();
		if(catogory!="upgrade")
			return itemObj.name;
		else{
			var prefix = (Number.isInteger(itemObj.value) && itemObj.value<=2)? "◇": "　";
			return `<b class="PrefixIcon">${prefix}</b>` + itemObj.name;
		}
	}
	function getCost(){
		if(Number.isInteger(itemObj.cost)) return `${itemObj.cost}G`;
		if(itemObj.cost=='-') return "非賣品";
		return itemObj.cost;
	}
	function getEffect(){
		return Array.isArray(itemObj.effect)? itemObj.effect.join('<br>'): itemObj.effect.replace(/\n/g, '<br>');
	}

	return `
	<div class="Item-list Gear">
		<div class="title fixWidth">
			<div class="category">追加效果</div>
			<div class="mainTitle">${getName()}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="value">${itemObj.value}</div>
		</div>
		<div class="blockCell fixWidth">
			<div class="cost">${getCost()}</div>
		</div>
		<div class="field">${getEffect()}</div>
	</div>`.fmt();
}