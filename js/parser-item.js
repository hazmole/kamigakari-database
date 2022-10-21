var Util; // from "js/util.js"

function parseGear(itemObj){
	function getCategory(){
		var typeArr = itemObj.type.split('-');
		return typeArr[0];
	}
	function getCategoryText(){
		return fmtCategoryTxt(getCategory());
	}
	function getRoughCategoty(){
		if(isWeapon()) return "weapon";
		if(isArmor()) return "armor";
		if(isAccessory()) return "accessory";
		return getCategory();
	}
	function getFullCategoryText(){
		var txtArr = itemObj.type.split('-');
		txtArr[0] = getCategoryText();
		if(txtArr[1]) txtArr[1] = fmtCategoryTxt(txtArr[1]);
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

	function isWeapon(){
		var typeArr = itemObj.type.split('-');
		return (typeArr.length>=2 && (typeArr[1]=="劍" || typeArr[1]=="槍" || typeArr[1]=="斧" || typeArr[1]=="錘" || typeArr[1]=="射擊" || typeArr[1]=="魔法"))
	}
	function isArmor(){
		var typeArr = itemObj.type.split('-');
		return (typeArr.length>=2 && (typeArr[1]=="鎧" || typeArr[1]=="盾"))
	}
	function isAccessory(){
		var typeArr = itemObj.type.split('-');
		return (typeArr.length>=2 && (typeArr[1]=="裝飾"))
	}
	function fmtCategoryTxt(txt){
		switch(txt){
			case "upgrade": return '追加效果';
			case "weapon": return '武器';
			case "armor": return '防具';
			case "accessory": return '裝飾';
			case "permanent": return '常備品';
			case "consumable": return '消耗品';
			case "legacy": return "神成神器";
			case "legacyFeat": return "神器能力";
			case "common": return "共通";
		}
		return txt;
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
	return `<div class="Item-list Gear ${getRoughCategoty()}">${buildGearInnerElem(category)}</div>`.fmt();
	//-----------------

	function buildGearInnerElem(category){
		var cellArr = [];

		// Title
		cellArr.push(`
			<div class="title fixWidth">
				<div class="category">${getFullCategoryText()}</div>
				<div class="mainTitle"><div>${getName()}</div></div>
			</div>`);

		if(category=="upgrade"){
			cellArr.push(`
				<div class="blockCell fixWidth">
					<div class="value biggerTxt"><div>${itemObj.value}</div></div>
				</div>`);
			cellArr.push(`
				<div class="blockCell fixWidth">
					<div class="cost biggerTxt"><div>${getCost()}</div></div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="weapon" || isWeapon()){
			cellArr.push(`<div class="blockCell fixWidth" style="width:80px;">
					<div class="require"><div>${getRequire()}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="equip"><div>${getEquip()}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="hit ${getPhyOrMgc()} biggerTxt"><div>${getBonusVal(itemObj.hit)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="dmg ${getPhyOrMgc()} biggerTxt"><div>${Array.isArray(itemObj.dmg)? itemObj.dmg.map(v => getBonusVal(v)).join('/'): getBonusVal(itemObj.dmg)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="spd biggerTxt"><div>${Array.isArray(itemObj.spd)? itemObj.spd.map(v => getBonusVal(v)).join('/'): getBonusVal(itemObj.spd)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt"><div>${getCost()}</div></div>
				</div>`);
			cellArr.push(`<div style="flex-grow:1;">
					<div class="property">${getWeaponProperty()}</div>
					<div class="field">${getEffect()}</div>
				</div>`);
		}
		else if(category=="armor" || isArmor()){
			cellArr.push(`<div class="blockCell fixWidth" style="width:80px;">
					<div class="require"><div>${getRequire()}</div></div>
				</div>`);
			if(itemObj.equip){
				cellArr.push(`<div class="blockCell fixWidth">
					<div class="equip"><div>${getEquip()}</div></div>
				</div>`);
			}
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="evd biggerTxt"><div>${getBonusVal(itemObj.evd)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="spd biggerTxt"><div>${getBonusVal(itemObj.spd)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="amr phy biggerTxt"><div>${getBonusVal(itemObj.phyArmor)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="amr mgc biggerTxt"><div>${getBonusVal(itemObj.mgcArmor)}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt"><div>${getCost()}</div></div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="accessory" || isAccessory()){
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="equip"><div>${getEquip()}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt"><div>${getCost()}</div></div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="permanent" || category=="consumable"){
			cellArr.push(`<div class="blockCell fixWidth" style="width:80px;">
					<div class="usage"><div>${getUsage()}</div></div>
				</div>`);
			cellArr.push(`<div class="blockCell fixWidth">
					<div class="cost biggerTxt"><div>${getCost()}</div></div>
				</div>`);
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}
		else if(category=="legacyFeat"){
			cellArr.push(`<div class="field">${getEffect()}</div>`);
		}

		if(category=="legacy"){
			for(var upgrade of itemObj.upgrades){
				cellArr.push(`<div class="legacy-upgrade">
						<div class="lvl">Lv.${upgrade.lvl}</div>
						<div class="cost">${upgrade.cost==0? '免費': (upgrade.cost+'G')}</div>
						<div class="effect">${upgrade.effect}</div>
					</div>`)
			}
		}


		return cellArr.join('');
	}
}