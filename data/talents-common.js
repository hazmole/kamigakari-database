var TALENTS;
if(!TALENTS) TALENTS = [];

Array.prototype.push.apply(TALENTS, [
{type:"common-normal",name:"《左右開弓》",phase:["常時"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。當對象［裝備］著1項［用法：單手］（不包含雙單手）的［武器］時，可以再［裝備］1項［用法：單手］（不包含雙單手）的［武器］。［距離］將採用較短的一方，［對象］則採用任意一方。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《雙手武器集中》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。當對象［裝備］著［用法：雙手］（不包含雙單手］的［道具：武器］時，［主動判定］的達成值+1、［傷害計算］時獲得+2修正。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《武器熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象從［主要稱號］以外［稱號］的［系統］中選擇1項（戰鬥系、泛用系、魔導系），可以無視［限制］來［裝備］該［系統］的［道具：武器］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《防具熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象從［主要稱號］以外［稱號］的［系統］中選擇1項（戰鬥系、泛用系、魔導系），可以無視［限制］來［裝備］該［系統］的［道具：防具］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《不畏疼痛》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【生命力】獲得+5修正。此《天賦》可以重複取得並累積效果（最多+25）。重複取得時，需在名稱欄上記載「《不畏疼痛》×n（n為取得數）」。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《戰鬥即應》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［被動判定］獲得+1修正。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《狀態耐性》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。取得此《天賦》時，從［狀態變化：倒地、黑暗、猛毒］中選擇1項，名稱變為《狀態耐性：〇〇》（〇〇為選擇的［狀態變化］）。對象常駐獲得［解除：指定的狀態變化］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《靈力增強》",phase:["開始"],range:"使用者",target:"使用者",cost:["偶"],effect:"特殊效果。對象的［主動判定］達成值獲得+1修正。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《靈力疾走》",phase:["開始"],range:"使用者",target:"使用者",cost:["奇"],effect:"特殊效果。對象［簡易行動］的［移動力］變為［2格］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《靈力疾驅》",phase:["攻擊"],range:"移動4格",target:"1體",cost:["偶","奇"],effect:"主動時使用。對象的［主動判定］達成值+2，進行1次［武器攻擊］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《魔術近戰》",phase:["攻擊"],range:"移動2格",target:"1體",cost:["偶","奇","奇"],effect:"物理攻擊。使用者的［物理攻擊］獲得+「使用者的【發動】×2」修正。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《近戰靈力》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［空手］在［傷害計算］時獲得+5修正。\n此效果不適用於「視為［空手］」的［武器］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《高等狀態耐性》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《狀態耐性》。取得此《天賦》時，從［狀態變化：疼痛、麻痺］中選擇1項，名稱變為《狀態耐性：〇〇》（〇〇為選擇的［狀態變化］）。對象常駐獲得［解除：指定的狀態變化］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《擴展》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。當對象使用［效果種類：傷害計算時使用］的《天賦》時，《天賦》的效果再追加「此外，對象的［階級］+1」。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《戰鬥熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》只有［系統：戰鬥系］可以取得。對象在計算【生命力】時，將「［世界干涉LV］×3」變為「×5」來進行計算。此外，對象［攻擊行動］的［距離］可變為［1格］。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《探索熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》只有［系統：泛用系］可以取得。對象的【行動值】獲得+［世界干涉LV］修正。此外，1場戰鬥中1次，在［時機：開始］時可以使【行動值】的總計變為2倍。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《魔法熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》只有［系統：魔導系］可以取得。對象的［魔法傷害］獲得+5修正。此外，1場劇本中1次，1項已取得的［稱號：魔導系］的《天賦》視為已消耗［代價］並使用。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《泛用技的達人》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《戰鬥即應》。當對象使用《共通天賦》時，任1個［代價］視為已消耗。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《單手武器的達人》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《戰鬥即應》。對象［裝備］著［用法：單手、雙單手］的［武器］時，［主動判定］的達成值及［階級］+1。\n此《天賦》的效果即使［裝備］複數［武器］也不會重複、累積。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《雙單手的達人》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《單手武器的達人》。對象的［用法：雙單手］（不包含單手）的［武器］也能以［用法：雙手］來［裝備］（不適用《戰場的死神》）。［武器］所設定的［物D／魔D／行動］的數值皆適用於［雙手］使用時的數值。此外，對象在［傷害計算］時獲得+10修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《複合輸出者》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象在［傷害計算］時獲得+「使用者自動取得的※《稱號天賦》的數量×2（最大+10）」修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《複合防禦者》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［裝甲］及［結界］獲得+「使用者自動取得的※《稱號天賦》的數量×2（最大+10）」修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《暗藏的靈藥》",phase:["結束"],range:"使用者",target:"使用者",cost:["偶"],effect:"特殊效果。必須取得《防具熟練》。對象使用［持有］中的1個［道具：消耗］。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《瞬間的靈感》",phase:["特殊"],range:"使用者",target:"使用者",cost:["偶"],effect:"特殊效果。必須取得《不畏疼痛》。在對象進行［靈力操作］前使用。對象的［擲骰］結果（不包含［大成功］、［大失敗］）重擲。此外，重擲後也能進行［靈力操作］。\n此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《直覺瞄準》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［主動判定］獲得+「使用者的【幸運】÷3」修正。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《疾風擊》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象在［戰鬥移動］後進行［物理攻擊］時［階級］+1。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《單手武器集中》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象只［裝備］1個［道具：武器／用法：單手（不包含［用法：雙單手］）］時（沒有［裝備］另1項［武器］或［盾］），［傷害計算］時獲得+5修正。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《靈操疾驅》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《疾風擊》。對象的【行動值】獲得+2修正。此外，在對象［戰鬥移動］後，1個［靈力］骰面±1（不可變為0以下、7以上）。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《靈威吸收》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《高等狀態耐性》。對象在使用［1場劇本中n次］的《天賦》時，將任2個［靈力］變更為任意骰面。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《猛投》",phase:["特殊"],range:"接近狀態",target:"1體",cost:["無"],effect:"傷害減少時使用。對象消耗1D點【生命力】後變為［狀態變化：倒地］。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《特技》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。在對象宣言進行［簡易移動］時使用。對象進行［簡易移動］後，將自己［設置］於2格內任意格子。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《機會攻擊》",phase:["特殊"],range:"接近狀態",target:"1體",cost:["連號"],effect:"特殊效果。必須取得《狀態耐性》。隨時都能使用。向對象進行1次［武器攻擊］。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-normal",name:"《重武器熟練》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《雙手武器集中》。當對象［裝備］著［用法：雙手］（不包含雙單手］的［道具：武器］時，［主動判定］的達成值+1、［階級］獲得+1修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《近戰大師》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《重武器熟練》。當對象［裝備］著［用法：雙手］（不包含雙單手］的［道具：肉搏武器］時，［物理傷害］獲得+10修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《射擊大師》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《重武器熟練》。當對象［裝備］著［用法：雙手］（不包含雙單手］的［道具：射擊武器］時，［物理傷害］獲得+7修正。",isLimit:1,isDefault:false},
{type:"common-normal",name:"《魔法大師》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。必須取得《重武器熟練》。當對象［裝備］著［用法：雙手］（不包含雙單手］的［道具：魔法武器］時，［魔法傷害］獲得+5修正。",isLimit:1,isDefault:false},
{type:"common-advanced5",name:"《命中強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【體力】判定與【命中】判定的［擲骰］數獲得+1顆修正。\n此《天賦》可以重複取得，但能累積的［擲骰］最多只+2顆（合計4顆）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《迴避強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【敏捷】判定與【迴避】判定的［擲骰］數獲得+1顆修正。\r\n此《天賦》可以重複取得，但能累積的［擲骰］最多只+2顆（合計4顆）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《發動強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【知性】判定與【發動】判定的［擲骰］數獲得+1顆修正。\r\n此《天賦》可以重複取得，但能累積的［擲骰］最多只+2顆（合計4顆）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《抵抗強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【精神】判定與【抵抗】判定的［擲骰］數獲得+1顆修正。\r\n此《天賦》可以重複取得，但能累積的［擲骰］最多只+2顆（合計4顆）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《看破強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【幸運】判定與【看破】判定的［擲骰］數獲得+1顆修正。\r\n此《天賦》可以重複取得，但能累積的［擲骰］最多只+2顆（合計4顆）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《連續行動》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。每當對象成為［行動者］，便多獲得1次［時機：攻擊］。\n此《天賦》可以重複取得，但《天賦》所增加［時機：攻擊］次數最多+3次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《稱號取得》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐。對象取得1項尚未取得的［稱號］（須決定類型A或B），並獲得自動取得的《天賦》。之後在［成長］時可以選擇該［稱號］的《稱號天賦》。\n此《天賦》可以重複取得。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《複合技》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。對象宣言使用［效果種類：物理攻擊］的《天賦》時使用。對象可以再使用1項已取得的［效果種類：物理攻擊］的《天賦》（［代價］需各自消耗）。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《必殺魔法》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。對象宣言使用［效果種類：魔法攻擊］的《天賦》時使用。對象獲得①或②其中1項效果。\n①［魔法傷害］+「使用者的任意【主能力值】」。\n②【發動】判定的達成值+3。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《反擊技》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。在對象進行［被動判定］成功後使用。對象的被動結束後，向進行［攻擊行動］的［對象：1體］進行［時機：攻擊］。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《戰鬥力強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［物理階級］+2。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《生命力強化》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【生命力】獲得+30修正。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《龍脈增加》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［靈力］上限+1個。\n此《天賦》可以重複取得，但能累積的［靈力］上限最多只+2個（合計6個）。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《得意技》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象指定1項已取得的《天賦》，使用該《天賦》時，任1個［代價］視為已消耗。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《惡運的持有者》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。對象的［擲骰］發生［大成功、大失敗］時使用。對象發生［大成功］時，再使1個（合計2個）［靈力］變更為任意骰面。對象發生［大失敗］時，不是1個［靈力］變為「1」，而是變為任意任意骰面。\n此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《潛在靈力解放》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。隨時都能使用。對象使任3個［靈力］變更為任意骰面。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced5",name:"《生還者》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。對象進行［靈紋檢定］時使用。對象的【靈紋】再［回復］3D。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《龍脈胎動》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》在［世界干涉LV］為10以上時，須與《稱號奧義》、《稱號開花》擇一取得。\n對象的［靈力］最大值+1個（［靈力］4個的場合變為5個）。",isLimit:false,isDefault:true},
{type:"common-advanced10",name:"《稱號奧義》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》在［世界干涉LV］為10以上時，須與《龍脈胎動》、《稱號開花》擇一取得。\n對象從［初期創造］所選擇，［主要稱號］以外的［稱號］中取得1項◎《稱號天賦》。",isLimit:false,isDefault:true},
{type:"common-advanced10",name:"《稱號開花》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。此《天賦》在［世界干涉LV］為10以上時，須與《龍脈胎動》、《稱號奧義》擇一取得。\n對象取得1項尚未取得的［稱號］（須決定類型A或B），並獲得自動取得的《天賦》。之後在［成長］時可以選擇該［稱號］的《稱號天賦》。",isLimit:false,isDefault:true},
{type:"common-advanced10",name:"《強大的達人》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［物理傷害］獲得+15修正。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《優異施法者》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【發動】判定達成值+1，［魔法傷害］獲得+10修正。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《鐵壁的防禦》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［裝甲］獲得+15修正。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《反魔術外殼》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【抵抗】判定達成值+1，［結界］獲得+10修正。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《蓄積強化》",phase:["準備"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象可以將2個［靈力］變更為任意骰面。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《龍脈調整》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象在［時機：結束］（或是［場景］結束）後，使用完的［靈力］進行重擲時，使其中1顆變為任意骰面放回［靈力］。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《驚異的生命力》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的【生命力】獲得+50修正。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《龍脈蘇生》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"傷害減少時使用。對象受到的［傷害］變為0。之後對象解除［昏厥、無法戰鬥、死亡］以外所有不利的［狀態變化］，【生命力】的現在值變為20。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《限制解除》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［階級］+1。此外，對象可以無視［限制］來［裝備］所有的［道具］，在［裝備］上［限制：戰鬥系］的［鎧］時，［行為］也不會受到懲罰。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《奧義到達者》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象取得1項並非［主要稱號］的「已取得［稱號］的◎《稱號天賦》」。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《必殺技》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。必須取得《複合技》。對象宣言使用《複合技》時使用。對象使用《複合技》時，對象可以再使用1項已取得的［效果種類：物理攻擊］的《天賦》。此外，對象獲得2個［超越靈力］。\n此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《固有大魔術》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。必須取得《必殺魔法》。對象宣言使用《必殺魔法》時使用。對象在適用《必殺魔法》效果後，獲得1個［超越靈力］。此外，對象的［魔法傷害］計算時+「使用者的任意【主能力值】」修正\n。此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced10",name:"《伺機而動》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。對象的［被動判定］+1，【行動值】獲得+10修正。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《殲滅攻擊》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。隨時都能使用。對象［攻擊行動］的［距離／對象］變為［戰鬥地帶］。［距離／對象］已為［戰鬥地帶］的場合，在［傷害計算］時獲得+「使用者的任意【主能力值】」修正。\n此《天賦》在1場戰鬥中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《具現的波動》",phase:["特殊"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"特殊效果。在對象計算［達成值］後使用。對象的［達成值］獲得+2D修正（並非［擲骰］，此2D無法進行［靈力操作］）。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《必殺的一擊》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"傷害計算時使用。對象在［傷害計算］時獲得+「使用者的［世界干涉LV］×2」修正。\n此《天賦》在1輪中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《九死一生》",phase:["特殊"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"傷害減少時使用。對象受到的［傷害］將［減半］。\n此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《龍脈放出》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"特殊效果。隨時都能使用。對象使任2個［使用靈力］變為任意骰面後放回［靈力］。\n此《天賦》在1輪（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced15",name:"《生命活賦》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"傷害減少時使用。對象受到的［傷害］變為0。之後對象解除［昏厥、無法戰鬥、死亡］以外所有不利的［狀態變化］，【生命力】的現在值變為「使用者的［世界干涉LV］×2」（無法超過最大值）。\n此《天賦》在1場戰鬥（場景）中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《弑神之力》",phase:["常駐"],range:"使用者",target:"使用者",cost:["無"],effect:"常駐效果。於對象所存在的［戰鬥地帶］中，使［【生命力】：神］角色的【生命力】變為2000點並［戰鬥開始］。",isLimit:false,isDefault:true},
{type:"common-advanced20",name:"《突破極限》",phase:["開始"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"特殊效果。對象到該輪的［時機：結束］為止，《天賦》的［代價］全部變為［無］。【固定值】角色的［1輪中n次］或［1場戰鬥中n次］的《天賦》無關是否使用過，使用1次。\n無關是否使用過，使用1次。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《滅魂一擊》",phase:["特殊"],range:"使用者",target:"使用者",cost:["無"],effect:"傷害計算時使用。對象在［傷害計算］時，獲得①或②其中1項效果。但指定複數［對象］時（［範圍］、［戰鬥地帶］、［2體以上］），只能選擇［對象：1體］發揮《滅魂一擊》的效果。\n①［階級］變為10。\n②［傷害計算］時+50。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《命運操作》",phase:["特殊"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"判定時使用。對象的［擲骰］結果變為［大成功］。對於《命運操作》使用《死刑》的場合，雙方效果抵銷，變為普通的［對決］。對象的［主動判定］發生［大成功］時，因無法進行［被動判定］而發揮《命運操作》的效果。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《死刑》",phase:["特殊"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"判定時使用。對象的［擲骰］結果變為［大失敗］。對於《死刑》使用《命運操作》的場合，雙方效果抵銷，變為普通的［對決］。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《絕對防護》",phase:["特殊"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"傷害減少時使用。對象受到的［傷害］視為0，除此之外的效果全數消滅。\n此《天賦》在1場遊戲中只能使用1次。",isLimit:false,isDefault:false},
{type:"common-advanced20",name:"《龍之覺醒》",phase:["結束"],range:"戰鬥地帶",target:"1體",cost:["無"],effect:"特殊效果。對象解除［死亡］以外所有不利的［狀態變化］，【生命力】的現在值變為200（無法超過最大值）。\n此《天賦》在1場遊戲中只能使用1次，對象可以拒絕此《天賦》的效果。",isLimit:false,isDefault:false},
]);