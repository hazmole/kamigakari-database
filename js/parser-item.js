var Util; // from "js/util.js"

function parseGear(itemObj){
	function getCategory(){
		var typeArr = itemObj.type.split('-');
		return typeArr[0];
	}
	function getCategoryText(){
		switch(getCategory()){
			case "upgrade": return '追加效果';
			case "weapon": return '武器';
			case "armor": return '防具';
			case "accessory": return '裝飾';
			case "permanent": return '常備品';
			case "consumable": return '消耗品';
		}
	}
	function getFullCategoryText(){
		var txtArr = itemObj.type.split('-');
		txtArr[0] = getCategoryText();
		return txtArr.join('-');
	}

	function getName(){
		var category = getCategory();
		var prefix = '　';
		if(category=="upgrade"){
			if(Number.isInteger(itemObj.value) && itemObj.value<=2) prefix = "◇";
		} else if(category=="weapon"){
			if(itemObj.isFirearm) prefix = "※";
		}
		return `<font class="PrefixIcon">${prefix}</font>` + itemObj.name;
	}

	function getRequire(){
		if(itemObj.require.length==0) return '-';
		return itemObj.require.join('<br>/');
	}
	function getCost(){
		if(itemObj.cost==0) return "<font style='font-size:14px;'>無</font>";
		if(itemObj.cost==null || itemObj.cost=='-') return "<font style='font-size:14px;'>非賣品</font>";
		if(Number.isInteger(itemObj.cost)) return `${itemObj.cost}G`;
		return itemObj.cost;
	}
	function getWeaponProperty(){
		var p = itemObj.property;
		var arr = [];
		arr.push(`距離：${p.range}`);
		arr.push(`對象：${p.target}`);
		if(p.resist)    arr.push(`抵抗：${p.resist}`);
		if(p.elemental) arr.push(`屬性：${p.elemental}`);
		if(p.rank)      arr.push(`階級：${p.rank}`);

		return arr.map( tag => `<div class="tag">${tag}</div>` ).join('');
	}
	function getUsage(){
		return itemObj.usage.map( txt => Util.ItemUsage[txt] ).join('<br>');
	}
	function getEquip(){
		return Array.isArray(itemObj.equip)? itemObj.equip.map(e=>Util.ItemEquip[e]).join('、'): Util.ItemEquip[itemObj.equip]
	}

	function getEffect(){
		return Array.isArray(itemObj.effect)? itemObj.effect.join('<br>'): itemObj.effect.replace(/\n/g, '<br>');
	}

	function getPhyOrMgc(){
		if(itemObj.type.indexOf('魔法')>=0) return 'mgc';
		return 'phy';
	}
	function getBonusVal(val){
		if(val==0) return '-';
		if(val>0) return '+'+val;
		return val;
	}

	var category = getCategory();
	return `<div class="Item-list Gear ${category}">${buildGearInnerElem(category)}</div>`.fmt();
	//-----------------

	function buildGearInnerElem(category){
		var cellArr = [];

		// Title
		cellArr.push(`
			<div class="title fixWidth">
				<div class="category">${getFullCategoryText()}</div>
				<div class="mainTitle">${getName()}</div>
			</div>`);

		if(category=="upgrade"){
			cellArr.push(`
				<div class="blockCell fixWidth">
					<div class="value biggerTxt">${itemObj.value}</div>
				</div>`);
			cellArr.push(`
				<div class="blockCell fixWidth">
					<div class="cost biggerTxt">${getCost()}</div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="weapon"){
			cellArr.push(`<div class="blockCell fixWidth" style="width:80px;">
					<div class="require">${getRequire()}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="equip">${getEquip()}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="hit ${getPhyOrMgc()} biggerTxt">${getBonusVal(itemObj.hit)}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="dmg ${getPhyOrMgc()} biggerTxt">${itemObj.dmg.map(v => getBonusVal(v)).join('/')}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="spd biggerTxt">${itemObj.spd.map(v => getBonusVal(v)).join('/')}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt">${getCost()}</div>
				</div>`);
			cellArr.push(`<div style="flex-grow:1;">
					<div class="property">${getWeaponProperty()}</div>
					<div class="field">${getEffect()}</div>
				</div>`);
		}
		else if(category=="accessory"){
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="equip">${getEquip()}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt">${getCost()}</div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="permanent" || category=="consumable"){
			cellArr.push(`<div class="blockCell fixWidth" style="width:80px;">
					<div class="usage">${getUsage()}</div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt">${getCost()}</div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}


		return cellArr.join('');
	}
}