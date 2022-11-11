/***********
 * Require: 
 *   "data/enemy-list.js": var ENEMY_LIST
 *   "js/mySearcher.js": class MySearcher
 */

// Controller
var EnemySearchCtrl = {};
EnemySearchCtrl.simpleCfg = { fields:['name','alias'] };
EnemySearchCtrl.advancedCfg = [
  {
    field: 'level',
    title: '等級',
    type: 'dual-range',
    config: { min: 1, max: 20, step: 1, }
  },
  {
    field: 'type',
    title: '種別',
    type: 'selection',
    options: [
      { text: '人型', value: 'humanoid' },
      { text: '魔獸', value: 'beast' },
      { text: '怪蟲', value: 'insect' },
      { text: '植物', value: 'plant' },
      { text: '機械', value: 'machine' },
      { text: '不死', value: 'undead' },
      { text: '幻獸', value: 'eudemon' },
      { text: '混沌', value: 'demon' },
    ],
  },
  {
    field: 'info.weakness',
    title: '弱點',
    type: 'selection',
    options: [
      { text: '火炎', value: 'fire' },
      { text: '寒氣', value: 'cold' },
      { text: '電擊', value: 'electric' },
      { text: '磁力', value: 'magnetic' },
      { text: '風壓', value: 'wind' },
      { text: '閃光', value: 'flash' },
      { text: '魔毒', value: 'poison' },
      { text: '幻覺', value: 'illusion' },
    ],
  },
  {
    field: 'misc',
    title: '其他',
    type: 'selection',
    options: [
      { text: '×ｎ精怪', value: 'isGroup' },
    ],
  },
  {
    field: 'source',
    title: '資源',
    type: 'selection',
    options: [
      { text: '核心規則', value: 'basic' },
      { text: "擴充〈神魂のレクイエム〉", value: "ex-SpiritRequiem" },
      { text: "擴充〈ダモクレスの機神〉", value: "ex-DamoclesMach" },
      { text: "擴充〈クロノスの原初神器〉", value: "ex-KronosArtifact" },
      { text: "擴充〈少女を焦がす熾火〉", value: "ex-BurnedMaiden" },
      { text: "擴充〈四神ガーディアンズ〉", value: "ex-SpiritGuardian" },
      { text: "擴充〈混沌神話との接触〉", value: "ex-ChaosMytho" },
      { text: "擴充〈時空のオルタード〉", value: "ex-TimeAltered" },
      { text: "擴充〈神魔ストラグル〉", value: "ex-GodsWar" },
      { text: "擴充〈神怪夜行〉", value: "ex-DemonParade" },
      { text: "擴充〈神機エクソダス〉", value: "ex-MachinaExile" },
      { text: "擴充〈超神イヴォルヴ〉", value: "ex-PsychicEvolve" },
    ],
  }
];

EnemySearchCtrl.decorateListData = function(list){
  return list.map( itemObj => {
    var newObj = {};
    Object.assign(newObj, itemObj);
    
    if(itemObj.alias!=null)
      newObj.alias = itemObj.alias.map( txt => txt.toLowerCase() ).join(' ');
    
    newObj.misc = [];
    if(itemObj.isGroup) newObj.misc.push("isGroup");

    return newObj;
  });
}

EnemySearchCtrl.EnemyTypeArr = [ 'humanoid', 'beast', 'insect', 'plant', 'machine', 'undead', 'eudemon', 'demon'];
EnemySearchCtrl.cmpFunc = function(a, b){
  if(a.type != b.type) return (EnemySearchCtrl.EnemyTypeArr.indexOf(a.type) - EnemySearchCtrl.EnemyTypeArr.indexOf(b.type));
  if(a.level != b.level) return (a.level - b.level);
  return ENEMY_LIST.indexOf(a) - ENEMY_LIST.indexOf(b);
};

var ENEMY_LIST;
EnemySearchCtrl.searcher = new MySearcher();
EnemySearchCtrl.searcher.Register(
  EnemySearchCtrl.decorateListData(ENEMY_LIST),
  {
    simple: EnemySearchCtrl.simpleCfg,
    advanced: EnemySearchCtrl.advancedCfg,
    compareFunc: EnemySearchCtrl.cmpFunc,
  });