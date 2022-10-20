var ITEMS;
if(!ITEMS) ITEMS = [];

Array.prototype.push.apply(ITEMS, [
{type:"permanent",name:"行動裝置",usage:["other"],cost:0,effect:"1個場景1次，無關［登場］、［未登場］、［退場］，能與1名角色對話（是否能對話由GM決定）。"},
{type:"permanent",name:"替換衣物",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"流行服飾",usage:["other"],cost:0,effect:"［交涉］判定的達成值+1。"},
{type:"permanent",name:"相機",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"包包",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"錄音機",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"化妝道具",usage:["other"],cost:3,effect:"［偽裝］判定的達成值+1。"},
{type:"permanent",name:"機車",usage:["other"],cost:5,effect:"於［戰鬥外］時能用來移動的一般機車。\n由於超常存在是靈力的具現化，無法以一般的物理法則造成傷害，所以無法作為［武器］來使用。"},
{type:"permanent",name:"汽車",usage:["other"],cost:10,effect:"於［戰鬥外］時能用來移動的汽車。\n由於超常存在是靈力的具現化，無法以一般的物理法則造成傷害，所以無法作為［武器］來使用。"},
{type:"permanent",name:"隱藏據點",usage:["rest-prepare"],cost:10,effect:"［休息回復量］+1。"},
{type:"permanent",name:"間諜工具",usage:["other"],cost:100,effect:"【敏捷】的［行為］判定的達成值+1。"},
{type:"permanent",name:"急救包",usage:["rest-prepare"],cost:100,effect:"［休息回復量］+3。"},
{type:"permanent",name:"設施",usage:["rest-meal"],cost:100,effect:"［休息回復量］+3。"},
{type:"permanent",name:"住所",usage:["rest-meal"],cost:100,effect:"［休息回復量］+3。"},
{type:"permanent",name:"靈毛睡袋",usage:["rest-sleep"],cost:150,effect:"［休息回復量］+4。"},
{type:"permanent",name:"靈木床",usage:["rest-sleep"],cost:250,effect:"［休息回復量］+8。"},
{type:"permanent",name:"高級住所",usage:["rest-meal"],cost:300,effect:"［休息回復量］+5。"},
{type:"permanent",name:"靈藥套裝",usage:["rest-prepare"],cost:500,effect:"［休息回復量］+5。"},
{type:"permanent",name:"靈力手套",usage:["enchantment"],cost:500,effect:"［消去］時使用，【體力】判定的達成值獲得+1修正。"},
{type:"permanent",name:"靈鳥之羽",usage:["enchantment"],cost:500,effect:"［消去］時使用，【敏捷】判定的達成值獲得+1修正。"},
{type:"permanent",name:"靈異相機",usage:["enchantment"],cost:500,effect:"［消去］時使用，【知性】判定的達成值獲得+1修正。"},
{type:"permanent",name:"咒符",usage:["enchantment"],cost:500,effect:"［消去］時使用，【精神】判定的達成值獲得+1修正。"},
{type:"permanent",name:"虎之瞳",usage:["enchantment"],cost:500,effect:"［消去］時使用，【幸運】判定的達成值獲得+1修正。"},
{type:"permanent",name:"綠石的玄武",usage:["other"],cost:2000,effect:"【體力】判定的達成值獲得+1修正。"},
{type:"permanent",name:"太陽石的朱雀",usage:["other"],cost:2000,effect:"【敏捷】判定的達成值獲得+1修正。"},
{type:"permanent",name:"月石的青龍",usage:["other"],cost:2000,effect:"【知性】判定的達成值獲得+1修正。"},
{type:"permanent",name:"乳石的白虎",usage:["other"],cost:2000,effect:"【精神】判定的達成值獲得+1修正。"},
{type:"permanent",name:"深蒼石的黃龍",usage:["other"],cost:2000,effect:"【幸運】判定的達成值獲得+1修正。"},
{type:"permanent",name:"靈光釋放",usage:["other"],cost:"-",effect:"「極度昏暗的場所」所致的懲罰無效化。"},
{type:"permanent",name:"靈氣感知",usage:["other"],cost:"-",effect:"［察知］判定的達成值+1。"},
{type:"permanent",name:"靈威衝",usage:["other"],cost:"-",effect:"發出強大的靈威，一擊便能使一般人無力化。受到此效果的一般人僅會昏厥，並不會失去記憶（詳情由GM決定）。"},
{type:"permanent",name:"休息領域",usage:["rest-meal"],cost:"-",effect:"［休息回復量］+10。"},
{type:"permanent",name:"靈力轉移",usage:["other"],cost:"-",effect:"變為靈體，能在靈力結界內自由來往，且無法被一般人看見。\n此外，利用空間的縫隙來轉移時，能帶上6人以汽車般的速度移動。"},
{type:"permanent",name:"裝飾品",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"防寒衣物",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"攜帶遊戲",usage:["other"],cost:0,effect:"無"},
{type:"permanent",name:"禮服",usage:["other"],cost:0,effect:"［禮儀］判定的達成值+1。"},
{type:"permanent",name:"泳裝",usage:["other"],cost:0,effect:"［游泳］判定的達成值+1。"},
{type:"permanent",name:"繩鉤",usage:["other"],cost:0,effect:"［攀登］判定的達成值+1。"},
{type:"permanent",name:"調和套組",usage:["other"],cost:50,effect:"［耐性］判定的達成值+1。"},
{type:"permanent",name:"休旅車",usage:["other","rest-meal"],cost:50,effect:"於［戰鬥外］時能用來移動，且［小休］時［休息回復量］+1。\n與［汽車］相同，無法作為［武器］來使用。"},
{type:"permanent",name:"百鬼夜行圖",usage:["other"],cost:100,effect:"［識別］判定的達成值+1。"},
{type:"permanent",name:"水晶球",usage:["other"],cost:100,effect:"［直覺］判定的達成值+1。"},
{type:"permanent",name:"視野裝置",usage:["other"],cost:100,effect:"於［戰鬥外］使用時，「極度昏暗的場所」所致的懲罰無效化。"},
{type:"permanent",name:"無力化兵器",usage:["other"],cost:100,effect:"以神秘技術所創造，一擊便能使一般人無力化的兵器。受到此效果的一般人僅會昏厥，並不會失去記憶（詳情由GM決定）。"},
{type:"permanent",name:"靈力計",usage:["other"],cost:1000,effect:"［察知］判定的達成值+1。"},
{type:"permanent",name:"神鳥之瞳",usage:["other"],cost:1500,effect:"［識別］及［直覺］判定的達成值+1。"},
{type:"permanent",name:"高性能靈力計",usage:["other"],cost:2500,effect:"［察知］判定的達成值+2。"},
{type:"permanent",name:"特殊車輛",usage:["other","rest-meal"],cost:"-",effect:"於［戰鬥外］時能用來移動，車廂內部有著休息空間，［小休］時［休息回復量］+3。\n與［汽車］相同，無法作為［武器］來使用。"},
{type:"permanent",name:"幻影能力",usage:["other"],cost:"-",effect:"使用魔法或特殊能力，將自己的服裝變成任意樣貌（［行為：偽裝／達成值：12］）。"},
{type:"permanent",name:"浮空能力",usage:["other"],cost:"-",effect:"只能在［戰鬥外］使用，「立足點不好的場所」所致的懲罰無效化。"},
{type:"permanent",name:"轉移能力",usage:["other"],cost:"-",effect:"使用魔法或特殊能力進行轉移，能帶上6人以汽車般的速度移動至目的地。"},
{type:"permanent",name:"大規模結界",usage:["rest-meal"],cost:"-",effect:"［休息回復量］+10。"},
{type:"permanent",name:"僱員",usage:["other"],cost:100,effect:"持有者所雇用的優秀雇員。只要聯絡一聲便能滴水不漏的完成日常雜務（詳情由GM決定）。"},
{type:"permanent",name:"直升機",usage:["other"],cost:500,effect:"於［戰鬥外］時能用來移動，且［登場判定］的達成值獲得+1修正。\r\n與［汽車］相同，無法作為［武器］來使用。"},
{type:"permanent",name:"後援團體",usage:["other"],cost:500,effect:"後援持有者的團體。支援團體、信徒、粉絲或友好的社團成員，其形態各式各樣。只要聯絡一聲便能滴水不漏的完成日常雜務（詳情由GM決定）。"},
{type:"permanent",name:"靈絲之繭",usage:["rest-sleep"],cost:500,effect:"［休息回復量］+10"},
{type:"permanent",name:"小妖精",usage:["other"],cost:700,effect:"1場遊戲1次，於［戰鬥外］的場合，［行為］的達成值獲得+1修正。"},
{type:"permanent",name:"船舶",usage:["other","rest-meal"],cost:800,effect:"於［戰鬥外］時能用來移動，且［小休］時［休息回復量］+8。\r\n與［汽車］相同，無法作為［武器］來使用。"},
{type:"permanent",name:"神社",usage:["rest-meal"],cost:1000,effect:"［休息回復量］+20。"},
{type:"permanent",name:"心靈手術具",usage:["rest-prepare"],cost:1000,effect:"［休息回復量］+8。"},
{type:"permanent",name:"基地",usage:["rest-meal"],cost:1500,effect:"［休息回復量］+25。"},
{type:"permanent",name:"動物的化身",usage:["other"],cost:"-",effect:"可以變身為指定動物的姿態（［行為：偽裝／達成值：15］）。取得［動物的化身］時指定1種動物，這時名稱變為［動物的化身：〇〇］（〇〇為指定的動物）。此外，處於［昏厥、戰鬥不能、死亡］時，將自動變為指定動物的姿態。［動物的化身］無法與［神器的化身］同時取得。"},
{type:"permanent",name:"神器的化身",usage:["other"],cost:"-",effect:"可以變身為［裝備］中的［武器：鎧、盾、裝飾］其中1個的姿態。（［行為：偽裝／達成值：15］）。取得［神器的化身］時指定1個［道具］。此外，處於［昏厥、戰鬥不能、死亡］時，將自動變為指定［道具］的姿態。［神器的化身］無法與［動物的化身］同時取得。"},
{type:"permanent",name:"體色變化",usage:["other"],cost:"-",effect:"只能在［戰鬥外］使用。即便周圍沒有［障礙物］也能進行［行為：隱身］。此時，可選擇視為［達成值：10］或［行為：隱密］的達成值+3。"},
{type:"permanent",name:"追加部位",usage:["other"],cost:"-",effect:"「立足點不好的場所」所致的懲罰無效化。即便部位增加，可以［裝備］的［道具］數量也不會改變。"},
{type:"permanent",name:"伸縮部位",usage:["other"],cost:"-",effect:"［行為：攀登【體力】］的達成值獲得+2修正。"},
{type:"permanent",name:"高速移動",usage:["other"],cost:"-",effect:"可帶上自己［體型］體（［體型：0］時為1體）的角色以汽車般的速度移動。"},
{type:"permanent",name:"分離可能",usage:["other"],cost:"-",effect:"［行為：追蹤、開鎖【敏捷】］的達成值獲得+2修正。"},
{type:"permanent",name:"異食體質",usage:["other"],cost:"-",effect:"1個場景1次，藉由消耗1個沒有［回復］效果的［道具：消耗］，來［回復］5點【生命力】。"},
{type:"permanent",name:"夢使",usage:["other"],cost:"-",effect:"1場遊戲1次，［小休］時［休息回復量］+20。"},
{type:"permanent",name:"靈力分身",usage:["other"],cost:"-",effect:"只能在［戰鬥外］使用。可以無視［行為：諜報【幸運】］的限制。此外，［行為：諜報］的達成值獲得+1修正。"},
{type:"permanent",name:"妖怪手下",usage:["other"],cost:"-",effect:"跟隨持有者的手下妖怪們。只要聯絡一聲便能滴水不漏的完成日常雜務（詳情由GM決定）。"},
{type:"permanent",name:"搭載可能",usage:["other"],cost:"-",effect:"可自己［體型］體（［體型：0］時為1體）的一般人［NPC］作為［持有］帶著移動，此效果只能在［戰鬥外］發揮。"},
{type:"permanent",name:"預知異能",usage:["other"],cost:"-",effect:"1場遊戲1次，【主能力值】判定的［目標值］-1。"},
{type:"permanent",name:"幻覺能力",usage:["other"],cost:"-",effect:"1場遊戲1次，使一般人無力化，並且能照自己所想來替換對方的記憶（詳情需與GM討論）。"},
{type:"permanent",name:"牆壁行走",usage:["other"],cost:"-",effect:"1個場景1次，［行為：攀登【體力】、雜技【敏捷】］的達成值獲得+1修正。"},
{type:"permanent",name:"超軟體",usage:["other"],cost:"-",effect:"1個場景1次，［行為：開鎖【敏捷】、偽裝【知性】］的達成值獲得+1修正。"},
{type:"permanent",name:"神聖的美貌",usage:["other"],cost:"-",effect:"即便解除了《人類形態》或［偽裝］，真實身分被一般人目擊到也不會讓人感到害怕（詳情由GM決定）。［神聖的美貌］無法與［根源的恐懼］同時取得。"},
{type:"permanent",name:"根源的恐懼",usage:["other"],cost:"-",effect:"1個場景1次，使一般人變為［昏厥］。受到此效果的一般人僅會昏厥，並不會失去記憶（詳情由GM決定）。［根源的恐懼］無法與［神聖的美貌］同時取得。"},
{type:"permanent",name:"豐穰媒介",usage:["other"],cost:"-",effect:"1場遊戲1次，【幸運】判定的達成值獲得+1修正。"},
{type:"permanent",name:"憑依異能",usage:["other"],cost:"-",effect:"1場遊戲1次，能在1個場景中自由操控一般人（詳情由GM決定）。"},
{type:"permanent",name:"靈藥作用",usage:["other"],cost:"-",effect:"自身的肉體或血液（屍體也行）擁有靈藥的效果，一般人攝取時可以治病或延長壽命（詳情由GM決定）。\n只能在［戰鬥外］使用，1場遊戲1次，使［對象：1體］的【生命力】回復10點。"},
{type:"permanent",name:"美味禮讚",usage:["other"],cost:"-",effect:"自身的肉體或血液（屍體也行）極為美味，一般人攝取時會因永生難忘的美味而感動（詳情由GM決定）。\n只能在［戰鬥外］使用，1場遊戲1次，使［對象：1體］的【生命力】回復10點。"},
{type:"permanent",name:"特殊毒素",usage:["other"],cost:"-",effect:"自身的肉體或血液（屍體也行）含有特殊的毒素，一般人攝取時會陷入假死狀態，若要解除假死狀態，必須讓那名一般人服用［特殊毒素］的持有者所製造出來的解毒劑，或是消耗有［解除：猛毒］效果的［消耗］才能恢復（詳情由GM決定）。"},
{type:"permanent",name:"黃金一條份的寶物",usage:["other"],cost:"-",effect:"1場遊戲1次，獲得［1G］。"},
{type:"permanent",name:"天上的樂曲",usage:["other"],cost:"-",effect:"1個場景1次，［行為：統帥、魅惑【精神】］的達成值獲得+1修正。"},
{type:"permanent",name:"電磁干涉",usage:["other"],cost:"-",effect:"1場遊戲1次，能使［距離：戰鬥地帶／對象：1體］的［行動裝置］或［汽車］等電子產品在1個場景中無法使用（詳情由GM決定）。"},
{type:"permanent",name:"妖力念話",usage:["other"],cost:"-",effect:"1個場景1次，無關［登場］、［未登場］、［退場］，能與1名角色對話（是否能對話由GM決定）。"},
{type:"permanent",name:"天候變化",usage:["other"],cost:"-",effect:"1場遊戲1次，【主能力值】判定的達成值獲得+1修正。"},
{type:"permanent",name:"共存者",usage:["other"],cost:"-",effect:"必須取得［動物的化身］。取得［共存者］時可以設定1名一般人（動物也可）［NPC］。［共存者］的持有者將被這名［NPC］所飼養，或是一同生活（詳情需與GM討論）。"},
{type:"permanent",name:"原創",usage:["other"],cost:"-",effect:"原創的效果，需與GM討論來設定。此外，因應劇本需求，GM也能設定給NPC用的某種效果。"},
{type:"permanent",name:"舊印",usage:["other"],cost:500,effect:"能藉由讓一般人［持有］此［道具］，使《魔術暗示》等《天賦》以及作用於一般人的［道具］或［追加效果］的影響無效化（詳情需與GM討論）。"},
{type:"permanent",name:"停滯魔方",usage:["other"],cost:3000,effect:"能使放入內部的物品時間停滯的小型塑膠盒子，大多場合會用於防止貴重古書或靈藥劣化（詳情需與GM討論）。"},
{type:"permanent",name:"阿爾哈茲萊德的提燈",usage:["rest-sleep"],cost:4000,effect:"［休息回復量］+40。"},
{type:"permanent",name:"通信裝置",usage:["other"],cost:20,effect:"1個場景1次，無關［登場］、［未登場］、［退場］，能與1名角色對話（是否能對話由GM決定）。"},
{type:"permanent",name:"念話寶石",usage:["other"],cost:20,effect:"1個場景1次，無關［登場］、［未登場］、［退場］，能與1名角色對話（是否能對話由GM決定）。"},
{type:"permanent",name:"電子特裝車",usage:["other"],cost:100,effect:"於［戰鬥外］時能用來移動的機車。\n由於超常存在是靈力的具現化，無法以一般的物理法則造成傷害，所以無法作為［武器］來使用。"},
{type:"permanent",name:"整備場",usage:["rest-meal"],cost:100,effect:"［種類：機械］的角色［休息回復量］+5。"},
{type:"permanent",name:"個人工房",usage:["rest-meal"],cost:100,effect:"［種族：魔術師、人造生命］的角色［休息回復量］+5。"},
{type:"permanent",name:"護身魔彈銃",usage:["other"],cost:100,effect:"能發射特殊魔彈的手槍型人造神器。一擊便能使一般人無力化的兵器。受到此效果的一般人僅會昏厥，並不會失去記憶（詳情由GM決定）。"},
{type:"permanent",name:"防衛用式神",usage:["other"],cost:100,effect:"僅在［戰鬥外］有效，受到［法則障礙］的［特殊傷害］-10。"},
{type:"permanent",name:"靈藥一式",usage:["rest-meal"],cost:100,effect:"［種族：魔術師、改造人、仿生機械、人造生命］的角色［休息回復量］+5。"},
{type:"permanent",name:"從屬人造人",usage:["other"],cost:100,effect:"遵從創造者所指定的人造人命令，下等的人造人們。雖沒有感情，但只要下達指示便能滴水不漏的完成日常雜務（詳情由GM決定）。"},
]);