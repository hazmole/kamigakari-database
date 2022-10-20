var Util = {};
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
Util.ItemEquip = {
	"one-hand": "單手",
	"two-hand": "雙手",
	"versatile": "單雙手",
	"head": "頭",
	"back": "背",
	"waist": "腰",
	"hand": "手",
	"feet": "足",
};
Util.ItemUsage = {
	"other": "其他",
	"enchantment": "法則障礙",
	"rest": "小休",
	"rest-meal": "小休(用餐)",
	"rest-prepare": "小休(準備)",
	"rest-sleep": "小休(睡眠)",
};

/* Sorting Function */
Util.sort = {};
Util.sort.cmpTalent = function(a,b){
  if(a.type != b.type) return TALENTS.indexOf(a) - TALENTS.indexOf(b);
  if(a.isLimit != b.isLimit) return (a.isLimit - b.isLimit);
  return TALENTS.indexOf(a) - TALENTS.indexOf(b);
};
Util.sort.cmpWaeponUpgrade = function(a,b){
  if(a.type != b.type) return ITEMS.indexOf(a) - ITEMS.indexOf(b);
  if(a.value != b.value) return (a.value - b.value);
  return ITEMS.indexOf(a) - ITEMS.indexOf(b);
};
Util.sort.cmpItem = function(a,b){
  if(a.type != b.type) return ITEMS.indexOf(a) - ITEMS.indexOf(b);
  
  var aCost = a.cost=='-'? Number.MAX_SAFE_INTEGER: a.cost;
  var bCost = b.cost=='-'? Number.MAX_SAFE_INTEGER: b.cost;
  if(aCost != bCost) return (aCost - bCost);
  return ITEMS.indexOf(a) - ITEMS.indexOf(b);
};


/* String Function Expansion */
String.prototype.fmt = function(){
	return this.replace(/[\t]/g, '')
}
String.prototype.shiftToFW = function(){
	var originTxt = this;
	var resultTxt = "";
	for(var i=0;i<originTxt.length;i++) {
		var charCode = originTxt.charCodeAt(i);

		var isNumber   = (charCode>=48 && charCode<=57);
		var isAlphabet = ((charCode>=97 && charCode<=122) || (charCode>=65 && charCode<=90));
		var isOther    = (charCode==43 || charCode==45)

		if(isNumber || isAlphabet || isOther){
			resultTxt += String.fromCharCode(charCode+65248);
		}
		else{
			resultTxt += String.fromCharCode(charCode);
		}
	}
	return resultTxt;
}