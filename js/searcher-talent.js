/***********
 * Require: 
 *   "data/enemy-list.js": var ENEMY_LIST
 *   "js/mySearcher.js": class MySearcher
 */

// Controller
var TalentSearchCtrl = {};
TalentSearchCtrl.simpleCfg = { fields:['name', 'effect'] };
TalentSearchCtrl.advancedCfg = [
  {
    field: 'category_fmt',
    title: '分類',
    type: 'selection',
    options: [
      { text: '共通天賦', value: 'common' },
      { text: '種族天賦', value: 'race' },
      { text: '稱號天賦', value: 'class' },
    ],
  },
  {
    field: 'phase',
    title: '時機',
    type: 'selection',
    options: [
      { text: '開始', value: '開始' },
      { text: '結束', value: '結束' },
      { text: '準備', value: '準備' },
      { text: '攻擊', value: '攻擊' },
      { text: '防禦', value: '防禦' },
      { text: '特殊', value: '特殊' },
      { text: '常駐', value: '常駐' },
    ],
  },
  {
    field: 'range_fmt',
    title: '距離',
    type: 'selection',
    options: [
      { text: '使用者', value: '使用者' },
      { text: '接近狀態', value: '接近狀態' },
      { text: '戰鬥地帶', value: '戰鬥地帶' },
      { text: '道具', value: '道具' },
      { text: 'N格', value: 'N格' },
      { text: '移動N格', value: '移動N格' },
      { text: '其他', value: '其他' },
    ],
  },
  {
    field: 'target_fmt',
    title: '目標',
    type: 'selection',
    options: [
      { text: '使用者', value: '使用者' },
      { text: 'N體', value: 'N體' },
      { text: 'N格', value: 'N格' },
      { text: '範圍', value: '範圍' },
      { text: '戰鬥地帶', value: '戰鬥地帶' },
      { text: '其他', value: '其他' },
    ],
  },
  {
    field: 'cost_fmt',
    title: '代價',
    type: 'selection',
    options: [
      { text: '無', value: '無' },
      { text: '奇', value: '奇' },
      { text: '偶', value: '偶' },
      { text: '連號', value: '連號' },
      { text: '對數', value: '對數' },
      { text: '一骰', value: 'l1' },
      { text: '二骰', value: 'l2' },
      { text: '三骰以上', value: 'l3+' },
    ],
  },
  {
    field: 'misc',
    title: '限制',
    type: 'selection',
    options: [
      { text: '等級3', value: '3' },
      { text: '等級3-主稱號', value: '3m' },
      { text: '等級5', value: '5' },
      { text: '等級10', value: '10' },
      { text: '等級15', value: '15' },
      { text: '等級20', value: '20' },
    ],
  }
];

TalentSearchCtrl.decorateListData = function(list){
  return list.map( itemObj => {
    var newObj = {};
    Object.assign(newObj, itemObj);

    newObj.category_fmt = getFmtCategory(itemObj.type);
    newObj.range_fmt = getFmtRange(itemObj.range);
    newObj.target_fmt = getFmtTarget(itemObj.target);
    newObj.cost_fmt = getFmtCost(itemObj.cost);
    newObj.misc = getLvlLimit(itemObj);


    return newObj;
  });
  //--------------
  function getFmtCategory(txt){
    return txt.split('-')[0];
  }
  function getFmtRange(txt){
    return txt
      .replace(/^移動(\d+)格/, '移動N格')
      .replace(/^(\d+)格/, 'N格');
  }
  function getFmtTarget(txt){
    return txt
      .replace(/^(\d+)體/, 'N體')
      .replace(/^.*（(\d+)格）/, 'N格');
  }
  function getFmtCost(arr){
    if(arr.length==1){
      if(arr[0]=='無') return ['無'];
      if(arr[0]=="對數" || arr[0]=="連號") return ['l2', arr[0]];
      return ['l1', arr[0]];
    }
    if(arr.length==2){

      return ['l2'];
    }
    return ['l3+'];
  }
  function getLvlLimit(obj) {
    if(obj.isLimit==1) return '3';
    if(obj.isLimit==2) return '3m';
    if(obj.type=='common-advanced5') return '5';
    if(obj.type=='common-advanced10') return '10';
    if(obj.type=='common-advanced15') return '15';
    if(obj.type=='common-advanced20') return '20';
  }
}





var TALENTS;
TalentSearchCtrl.searcher = new MySearcher();
TalentSearchCtrl.searcher.Register(
  TalentSearchCtrl.decorateListData(TALENTS),
  {
    simple: TalentSearchCtrl.simpleCfg,
    advanced: TalentSearchCtrl.advancedCfg,
    compareFunc: Util.sort.cmpTalent,
  }
);