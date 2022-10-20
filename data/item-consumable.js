var ITEMS;
if(!ITEMS) ITEMS = [];

Array.prototype.push.apply(ITEMS, [
{type:"consumable",name:"芳香護符",usage:["other"],cost:5,effect:"以［距離：使用者／對象：使用者］來使用。\n使對象［登場判定］發生的失敗或［大失敗］無效化，並登場於［場景］。"},
{type:"consumable",name:"聖水×5",usage:["other"],cost:50,effect:"以［距離：使用者／對象：使用者］來使用。\n對象到該輪的［結束］為止，對於［種類：不死］進行［傷害計算］時［階級］+1。"},
{type:"consumable",name:"變若水",usage:["other"],cost:400,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］20點【生命力】。"},
{type:"consumable",name:"金枝之楔×5",usage:["enchantment"],cost:100,effect:"以［距離：接近狀態／對象：1體］來使用\n［消去］時使用，【體力】判定的達成值獲得+1修正。"},
{type:"consumable",name:"式神符×5",usage:["enchantment"],cost:100,effect:"以［距離：接近狀態／對象：1體］來使用。\n［消去］時使用，【敏捷】判定的達成值獲得+1修正。"},
{type:"consumable",name:"魔術蠟燭×5",usage:["enchantment"],cost:100,effect:"以［距離：接近狀態／對象：1體］來使用。\n［消去］時使用，【知性】判定的達成值獲得+1修正。"},
{type:"consumable",name:"魔香×5",usage:["enchantment"],cost:100,effect:"以［距離：接近狀態／對象：1體］來使用。\n［消去］時使用，【精神】判定的達成值獲得+1修正。"},
{type:"consumable",name:"卡洛里棒×5",usage:["rest"],cost:100,effect:"以［距離：使用者／對象：使用者］來使用。\n［小休］時，［休息回復量］+5。"},
{type:"consumable",name:"一次性咒物",usage:["other"],cost:100,effect:"［時機：特殊／距離：使用者／對象：使用者／效果種類：傷害計算時使用］。\n在1次［傷害計算］中可以使用1個，［傷害］獲得+1D修正。"},
{type:"consumable",name:"人魚的肉片",usage:["other"],cost:200,effect:"吃下後在1個場景中，在水中也能呼吸，［游泳］的達成值獲得+3修正。"},
{type:"consumable",name:"蘇拉酒",usage:["other"],cost:200,effect:"以［距離：接近狀態／對象：1體］來使用。\n給予對象［解除：黑暗、猛毒］。"},
{type:"consumable",name:"五石散",usage:["other"],cost:200,effect:"以［距離：接近狀態／對象：1體］來使用。\n給予對象［解除：疼痛、麻痺、不動］。"},
{type:"consumable",name:"不死甘露",usage:["other"],cost:200,effect:"以［距離：接近狀態／對象：1體］來使用。\n給予對象［解除：昏厥］後，對象的【生命力】變為1，對象可以拒絕此效果。"},
{type:"consumable",name:"劣化蘇摩酒",usage:["other"],cost:300,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象到下輪的［結束］為止，【命中】判定達成值獲得+1修正。"},
{type:"consumable",name:"簡易豪麻酒",usage:["other"],cost:300,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象到下輪的［結束］為止，【迴避】判定達成值獲得+1修正。"},
{type:"consumable",name:"銀丹",usage:["other"],cost:300,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象到下輪的［結束］為止，【發動】判定達成值獲得+1修正。"},
{type:"consumable",name:"泛用龍血",usage:["other"],cost:300,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象到下輪的［結束］為止，【抵抗】判定達成值獲得+1修正。"},
{type:"consumable",name:"鍊金藥劑",usage:["other"],cost:500,effect:"以［距離：接近狀態／對象：1體］來使用。\n給予對象［解除：昏厥］後，對象的【生命力】變為10，對象可以拒絕此效果。"},
{type:"consumable",name:"魔女的靈藥",usage:["other"],cost:1000,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］25點【生命力】。"},
{type:"consumable",name:"清淨藥",usage:["other"],cost:50,effect:"以［距離：接近狀態／對象：1體］來使用。\n［察知］的達成值獲得+2修正。"},
{type:"consumable",name:"火之精×5",usage:["other"],cost:50,effect:"1個場景中，［距離：戰鬥地帶／對象：戰鬥地帶］的「極度昏暗的場所」所致的懲罰無效化。"},
{type:"consumable",name:"藥水×5",usage:["other"],cost:50,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］5點【生命力】。"},
{type:"consumable",name:"希臘之火",usage:["other"],cost:100,effect:"以［射擊武器／距離：4格／對象：1體］的［武器攻擊］來使用。\n【迴避】失敗的對象每當［結束］時便消耗5點【生命力】，對象能消耗1次［準備］使此效果消滅。"},
{type:"consumable",name:"黑之章",usage:["other","enchantment"],cost:100,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用。\n給予【迴避】判定失敗的對象［階級：1］的［魔法傷害］。\n［消去］時使用的場合，［接近狀態／1體］的【體力】判定達成值獲得+2修正。"},
{type:"consumable",name:"白之章",usage:["other","enchantment"],cost:100,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用\n給予【迴避】判定失敗的對象［狀態變化：黑暗］。\n［消去］時使用的場合，［接近狀態／1體］的【敏捷】判定達成值獲得+2修正。"},
{type:"consumable",name:"紅之章",usage:["other","enchantment"],cost:100,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用。\n給予【迴避】判定失敗的對象［狀態變化：倒地］。\n［消去］時使用的場合，［接近狀態／1體］的【知性】判定達成值獲得+2修正。"},
{type:"consumable",name:"青之章",usage:["other","enchantment"],cost:100,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用\n給予【迴避】判定失敗的對象［狀態變化：猛毒］。\n［消去］時使用的場合，［接近狀態／1體］的【精神】判定達成值獲得+2修正。"},
{type:"consumable",name:"屬性強化劑",usage:["other"],cost:500,effect:"以［距離：接近狀態／對象：1體］來使用。\n1場戰鬥中，［裝備］中的1個［武器］賦有［屬性］時，［對象：1體］的［階級］+1。"},
{type:"consumable",name:"狂化以太",usage:["other"],cost:1500,effect:"以［距離：使用者／對象：使用者］來使用。\n［距離：使用者／對象：使用者］在1場戰鬥中獲得［解除：倒地、疼痛、麻痺］，但每當［結束］時便消耗5點【生命力】，此效果能藉由消耗1次［準備］來消滅。"},
{type:"consumable",name:"維修",usage:["other"],cost:100,effect:"此［道具］若GM許可，可於［登場］中購買1次。但於［戰鬥外］時只有［種類：機械］的角色能使用。\n以［距離：使用者／對象：使用者］來使用。\n對象［回復］10點【生命力】。"},
{type:"consumable",name:"營養膠囊",usage:["other"],cost:150,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］10點【生命力】。"},
{type:"consumable",name:"修復素材",usage:["other"],cost:250,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］10點【生命力】。若對象為［種類：機器］，則再［回復］5點（合計15）【生命力】。"},
{type:"consumable",name:"靈威榴彈",usage:["other"],cost:300,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用。\n使用者在［物理傷害］的［傷害計算］時［物理階級］+1。\n此外，此［消耗］不會追加［裝備］中［武器］的［物D］。"},
{type:"consumable",name:"星塵沙漏",usage:["other"],cost:500,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n對象到該輪的［結束］為止【行動值】+1D。［星塵沙漏］對於1名角色在1輪中只能發揮1次效果。"},
{type:"consumable",name:"※火箭發射器",usage:["other"],cost:700,effect:"以［射擊武器／距離：10格／對象：範圍］的［武器攻擊］來使用。\n使用者在［傷害計算］時［物理階級］+3。此外，此［消耗］不會追加［裝備］中［武器］的［物D］。"},
{type:"consumable",name:"萬靈藥",usage:["other"],cost:800,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象獲得［解除：黑暗、猛毒、疼痛、麻痺］。"},
{type:"consumable",name:"天狗的飯糰",usage:["other"],cost:1000,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象獲得［解除：黑暗、猛毒］，且［回復］20點【生命力】。"},
{type:"consumable",name:"聖餅",usage:["other"],cost:1500,effect:"以［距離：接近狀態／對象：1體］來使用。\n對象［回復］35點【生命力】。"},
{type:"consumable",name:"偽造戶籍",usage:["other"],cost:100,effect:"經由各種組織的手上而偽造的戶籍。多數的場合，來自裏世界為了隱瞞自己的經歷會使用，也有利用這東西來過著人類生活的神或妖怪。詳細情況需與GM商量並決定。"},
{type:"consumable",name:"活力飲料A",usage:["other"],cost:100,effect:"以［距離：使用者／對象：使用者］來使用。\n對象［回復］10點【生命力】。"},
{type:"consumable",name:"神具黑御縵",usage:["other"],cost:150,effect:"在［距離：使用者／對象：使用者］擲出［時限］進行的骰子前使用。對象的骰面結果-1（最低為1）。\n［神具〇〇］在1個場景中只能使用1個。"},
{type:"consumable",name:"追蹤香",usage:["other"],cost:200,effect:"只能在［戰鬥外］使用。以［時機：特殊／距離：使用者／對象：使用者］來使用。\n在1次【主能力值】判定中只能使用1個，對象的【主能力值】判定達成值獲得+1修正。"},
{type:"consumable",name:"比禮",usage:["other"],cost:250,effect:"以［射擊武器／距離：【體力】格／對象：1體］的［武器攻擊］來使用。\n對於【迴避】判定失敗的目標，以［物理階級］+1來給予［物理傷害］。"},
{type:"consumable",name:"活力飲料D",usage:["other"],cost:300,effect:"以［距離：使用者／對象：使用者］來使用。\n對象［回復］20點【生命力】。"},
{type:"consumable",name:"神具湯津津間櫛",usage:["other"],cost:400,effect:"在［距離：使用者／對象：使用者］擲出［時限］進行的骰子前使用。對象的骰面結果-2（最低為1）。\n［神具〇〇］在1個場景中只能使用1個。"},
{type:"consumable",name:"攻式符",usage:["other"],cost:700,effect:"以［魔法武器／距離：7格／對象：1體／抵抗：消滅］的［武器攻擊］來使用。\n給予【抵抗】判定失敗的目標［魔法階級：1］的［魔法傷害］。"},
{type:"consumable",name:"神具大神實命",usage:["other"],cost:1500,effect:"在［距離：使用者／對象：使用者］擲出［時限］進行的骰子前使用。對象的骰面結果-3（最低為1）。\n［神具〇〇］在1個場景中只能使用1個。"},
{type:"consumable",name:"黃金蜂蜜酒x5",usage:["other"],cost:50,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n對象在利用［精怪］的《時空飛行》進行移動時，不需消耗【靈紋】。"},
{type:"consumable",name:"伊本・卡茲之粉",usage:["other"],cost:700,effect:"以［距離：5格／對象：範圍］來使用。\n給予對象［解除：隱密］（對象無法進行被動判定）。"},
{type:"consumable",name:"支配血清",usage:["other"],cost:700,effect:"以［距離：接近狀態／對象：1體］來使用。\n對於攝取了［支配血清］的一般人，使用者能在兩個禮拜間操控其記憶及行動（詳情需與GM討論）。"},
{type:"consumable",name:"弒神之塵",usage:["other"],cost:700,effect:"以［魔法攻擊／距離：4格／對象：範圍／抵抗：消滅／屬性：魔毒／階級：1］的［武器攻擊］來使用。"},
{type:"consumable",name:"木乃伊粉",usage:["other"],cost:2000,effect:"以［距離：接近狀態／對象：1體］來使用。\r\n對象［回復］40點【生命力】。"},
{type:"consumable",name:"轉移符",usage:["other"],cost:2,effect:"只能在［戰鬥外］使用。\n對象能往30m內，且自己曾經去過的地點進行瞬間移動（詳情需與GM討論）。\n［轉移符］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"轉化丹",usage:["other"],cost:10,effect:"只能在［戰鬥外］使用。\n對象在1場遊戲中能使自己的性別逆轉。想看破性別逆轉時，目標值為［偽裝【知性】／達成值：15］。"},
{type:"consumable",name:"神名紙",usage:["other"],cost:200,effect:"以［時機：準備／距離：戰鬥地帶／對象：1體］來使用。\n使用者向對象進行［識別【知性】］判定。"},
{type:"consumable",name:"數據卡",usage:["other"],cost:200,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n1輪1次，以標有［限制：數碼異術士］的［武器］進行［傷害計算］時+2D。"},
{type:"consumable",name:"通訊資料",usage:["other"],cost:200,effect:"只能在［戰鬥外］使用。\n［對象：1體］能立即獲得1個對於任意NPC的［感情］。\n［通訊資料］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"情報屋",usage:["other"],cost:200,effect:"只能在［鬥爭規則］的［戰鬥外］使用。\n［對象：使用者］能再擲1次［事件表1］，並從中選擇1種結果。\n［情報屋］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"怪力的秘藥",usage:["other"],cost:250,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n1次【主能力值】判定中可以使用1次，對象的【體力】判定達成值獲得+2修正。"},
{type:"consumable",name:"機敏的秘藥",usage:["other"],cost:250,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n1次【主能力值】判定中可以使用1次，對象的【敏捷】判定達成值獲得+2修正。"},
{type:"consumable",name:"英知的秘藥",usage:["other"],cost:250,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\r\n1次【主能力值】判定中可以使用1次，對象的【知性】判定達成值獲得+2修正。"},
{type:"consumable",name:"冥想的秘藥",usage:["other"],cost:250,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\r\n1次【主能力值】判定中可以使用1次，對象的【精神】判定達成值獲得+2修正。"},
{type:"consumable",name:"運氣的秘藥",usage:["other"],cost:250,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n1次【主能力值】判定中可以使用1次，對象的【幸運】判定達成值獲得+2修正。"},
{type:"consumable",name:"以太錠劑",usage:["other"],cost:250,effect:"以［距離：使用者／對象：使用者］來使用。\n對象1個［靈力］的骰面±2（無法變為0以下、7以上）。\n［以太錠劑］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"加速符",usage:["other"],cost:300,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n對象能以［移動行為］移動的［距離］+1格。\n［加速符］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"C4",usage:["other"],cost:300,effect:"以［時機：準備／距離：7格／對象：1體］來使用。\n使用者指定的［障礙物］立即消滅。此外，與消滅的［障礙物］鄰近1格的目標變為［狀態變化：倒地］。"},
{type:"consumable",name:"結界石",usage:["other"],cost:500,effect:"以［時機：特殊／距離：使用者／對象：使用者］來使用。\n對象受到［對象：2體以上（包含範圍、戰鬥地帶）］的［攻擊行動］的［傷害］-2D。\n［結界石］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"鎮靜劑",usage:["other"],cost:1000,effect:"以［距離：使用者／對象：使用者］來使用。\n對象1個［靈力］的骰面±2（無法變為0以下、7以上）。\n［鎮靜劑］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"攜帶式AED",usage:["other"],cost:1000,effect:"以自己以外的［距離：接近狀態／對象：1體］來使用。\n給予對象［解除：昏厥］後，對象的【生命力】變為15，對象可以拒絕此效果。"},
{type:"consumable",name:"加速膠囊",usage:["other"],cost:1500,effect:"以［時機：開始／距離：使用者／對象：使用者］來使用。\n對象到該輪的［結束］為止，【行動值】+2D。\n［加速膠囊］對於1名角色在1場遊戲中只能發揮1次效果。"},
{type:"consumable",name:"神秘的介紹信",usage:["other"],cost:3000,effect:"只能在［結局］中使用。\n1場遊戲1次，［對象：1體］能變更自己的［所屬組織］。\n此時，［對象：1體］所［持有、裝備］的［限制：所屬組織］的［道具］將自動賣出。"},
]);