var IDENTITY_LIST = [
{name:"表職業1",sheet:[
	{icon:"□",name:"一般學生",feat:"［持久力］：【體力】判定的達成值+2，【精神】判定的達成值+1。",items:"行動裝置、住所、急救包、機車、包包",desc:"到處都有的普通學生。學年的小中高大需與GM討論來決定。"},
	{icon:"□",name:"優等生",feat:"［品行方正］：【敏捷】、【知性】、【幸運】判定的達成值+1。",items:"行動裝置、住所、急救包、流行服飾、包包、替換衣物",desc:"成績上相對優秀的學生。學年的小中高大需與GM討論來決定。"},
	{icon:"□",name:"不良學生",feat:"［不良的心得］：【體力】判定的達成值+1，【敏捷】判定的達成值+2。",items:"行動裝置、住所、急救包、機車、包包",desc:"素行不良的學生。學年的中高大需與GM討論來決定。"},
	{icon:"□",name:"特工",feat:"［特殊訓練］：【體力】判定的達成值+2，【知性】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車、機車",desc:"所屬於國家或特定權力組織的特殊公務員或間諜。所屬於環境省特別對策室的人即為特工。"},
	{icon:"□",name:"偵探",feat:"［調查］：【體力】、【精神】、【幸運】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車、相機",desc:"以調查各種事件為生的偵探。有個人的事務所還是在信用調查所工作需與GM討論來決定。"},
	{icon:"□",name:"刑警",feat:"［刑警的直覺］：【知性】判定的達成值+1，【幸運】判定的達成值+2。",items:"行動裝置、住所、急救包、汽車",desc:"追查事件的刑警，有著優異的調查能力，以經驗和直覺來追捕犯人。"},
	{icon:"□",name:"靈能者",feat:"［靈能力］：【精神】判定的達成值+1，【幸運】判定的達成值+2。",items:"行動裝置、設施、急救包、相機、汽車",desc:"擁有真正的靈能力，以善意來接受調查、解決超常事件的靈能者。"},
	{icon:"□",name:"宗教家",feat:"［意志力］：【精神】判定的達成值+2，【幸運】判定的達成值+1。",items:"行動裝置、設施、急救包、汽車",desc:"僧侶或神父等宗教家。信仰著某種神明。若為神我狩則會對邪神抱有忌避感。"},
	{icon:"",name:"教師",feat:"［學校情報］：【敏捷】、【知性】、【精神】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車",desc:"任職於學校或專科學校的教師。在學生、監護人及其他教師之間有著特定的情報網。"},
	{icon:"",name:"作家",feat:"［創造力］：【知性】判定的達成值+2，【幸運】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車",desc:"漫畫家或小說家等，創作某種出版物的作家。"},
	{icon:"",name:"記者",feat:"［探聽］：【敏捷】判定的達成值+1，【知性】判定的達成值+2。",items:"行動裝置、住所、急救包、汽車、相機",desc:"新聞記者、攝影師、播報員、現場回報員等記者。"},
	{icon:"",name:"醫師",feat:"［醫術］：只能在［戰鬥外］使用。1場遊戲1次，使存在於［場景］中的任意角色［回復］10點【生命力】。",items:"行動裝置、設施、急救包、汽車",desc:"擁有醫師執照的醫生。經營著個人的診所還是就職於的醫院需與GM討論來決定。"},
	{icon:"",name:"律師",feat:"［信賴］：【敏捷】、【精神】、【幸運】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"通過司法考試，得到執照的律師。"},
	{icon:"",name:"企業家",feat:"［秘書］：只能在［戰鬥外］使用。1場遊戲1次，使存在於［場景］中的任意角色買賣［道具］。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"建立了優良企業，或是繼承自雙親的企業家。"},
	{icon:"",name:"名人",feat:"［地位］：【體力】、【敏捷】、【精神】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"你是當地的名人，或是自古而來歷史悠久的門戶當家的血親或親屬。"},
	{icon:"",name:"富豪",feat:"［帝王學］：選擇任意2項［行為］，該［行為］判定的達成值+2。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"因為某種原因成為富豪的人，或是其親屬。"},
	{icon:"△",name:"運動員",feat:"［爆發力］：【體力】判定的達成值+2，【敏捷】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車",desc:"活躍於特定領域的職業運動選手。擁有出眾的運動能力。"},
	{icon:"△",name:"職人",feat:"［精密作業］：【敏捷】判定的達成值+2，【知性】判定的達成值+1。",items:"行動裝置、設施、急救包、汽車",desc:"以製作某種物品維生的專業職人。"},
	{icon:"△",name:"上班族",feat:"［業界的齒輪］：【知性】判定的達成值+1，【精神】判定的達成值+2。",items:"行動裝置、住所、急救包、汽車",desc:"就職於商業公司的上班族。所屬於公司內的特定部門，並負責與其關的業務。"},
	{icon:"△",name:"研究家",feat:"［專門知識］：【知性】、【精神】、【幸運】判定的達成值+1。",items:"行動裝置、設施、急救包、汽車",desc:"進行某種研究的研究家。主要所屬於企業的研究所，每日致力於研究。"},
	{icon:"△",name:"藝人",feat:"［藝能］：【敏捷】判定的達成值+1，【精神】判定的達成值+2。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車、包包、替換衣物",desc:"演員或歌手這一類的藝人。知名度需與GM討論來決定。"},
	{icon:"△",name:"政治家",feat:"［行使權力］：只能在［戰鬥外］使用。1場遊戲1次，可以隱蔽1件與超常事件有關的事實（詳情需與GM討論來決定）。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"活躍於政治界的政治家，或是現在某種程度上也擁有權力的前政治家。"},
	{icon:"□",name:"業餘愛好家",feat:"［興趣的延伸］：【體力】判定的達成值+2，【幸運】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、汽車",desc:"以興趣維生的愛好家。在各種領域上都有著不淺的造詣，有著一般人所沒有的技術。"},
	{icon:"□",name:"教授",feat:"［鑑識眼］：【知性】判定的達成值+2，【精神】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車",desc:"就職於大學的教授。僅限於特定領域，有著無與倫比的博學知識。"},
	{icon:"",name:"保鑣",feat:"［周邊把握］：【體力】、【知性】、【幸運】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車",desc:"高官、政治家或財界人士為了保護自己而雇用的保鑣。"},
	{icon:"",name:"駕駛員",feat:"［駕駛技術］：駕駛汽車、機車或某種交通工具時進行的【主能力值】判定達成值+3（詳情需與GM討論來決定）。",items:"行動裝置、住所、急救包、汽車、機車",desc:"計程車司機、卡車司機，或專業的騎士及駕駛員等，以駕駛維生的人。"},
	{icon:"△",name:"黑道",feat:"［違法］：【敏捷】判定的達成值+2，【精神】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、流行服飾、汽車",desc:"身處於裏社會的黑道或暴力團員。表面上偽裝成一般企業，實際上卻在背地裡幹著違法行為。"},
	{icon:"△",name:"逃亡者",feat:"［逃亡的手法］：【敏捷】判定的達成值+2，【幸運】判定的達成值+2。",items:"隱藏據點、包包、替換衣物、魔女的靈藥",desc:"從知曉超常存在的製藥公司或巨大企業的研究設施中逃出的實驗體。又或者是有罪之身卻不斷逃亡的逃犯。"},
	{icon:"□",name:"自由作家",feat:"［見識］：【敏捷】、【知性】、【幸運】判定的達成值+1。",items:"行動裝置、住所、隱藏據點、機車、包包、錄音機",desc:"撰寫小說或散文的自由作家。"},
	{icon:"□",name:"攝影師",feat:"［觀察眼］：【體力】、【精神】、【幸運】判定的達成值+1。",items:"行動裝置、住所、急救包、汽車、相機、包包",desc:"拍攝照片或是錄下影片的攝影師。"},
	{icon:"□",name:"企業士兵",feat:"［戰鬥經驗］：【精神】判定的達成值+1，【幸運】判定的達成值+2。",items:"行動裝置、住所、間諜工具、特殊車輛、包包",desc:"所屬於企業的老練戰鬥員。"},
	{icon:"□",name:"學生特工",feat:"［特殊訓練］：【敏捷】判定的達成值+2，【幸運】判定的達成值+1。",items:"行動裝置、替換衣物、住所、隱藏據點、機車、包包、化妝道具",desc:"偽裝成學生，屬於特對或其他組織的特工。學年的小中高大需與GM討論來決定。"},
	{icon:"□",name:"特別搜查官",feat:"［搜查官］：【體力】、【精神】、【幸運】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、間諜工具、機車、汽車、包包",desc:"擁有警察的地位。如能介入超常事件的＂特對＂搜查官。"},
	{icon:"",name:"軍人",feat:"［軍事訓練］：【體力】判定的達成值+1，【幸運】判定的達成值+2。",items:"行動裝置、住所、急救包、間諜工具、機車、汽車、包包",desc:"所屬於國家的軍人。也包含了因為特別任務而所屬於＂特對＂的自衛官。"},
	{icon:"",name:"傭兵",feat:"［傭兵的直覺］：【敏捷】判定的達成值+1，【幸運】判定的達成值+2。",items:"行動裝置、住所、急救包、間諜工具、汽車、包包",desc:"與國家、企業或組織簽下雇用契約的傭兵。"},
	{icon:"",name:"企業特工",feat:"［企業活動］：【敏捷】、【知性】、【幸運】判定的達成值+1。",items:"行動裝置、住所、間諜工具、特殊車輛、包包",desc:"所屬於企業的特殊工作員。"},
	{icon:"△",name:"傭人",feat:"［家務］：【敏捷】、【知性】、【精神】判定的達成值+1。",items:"行動裝置、替換衣物、住所、急救包、汽車、包包、化妝道具",desc:"任職於宅邸的傭人。"},
	{icon:"△",name:"管家",feat:"［業務執行］：【知性】判定的達成值+1，【精神】判定的達成值+2。",items:"行動裝置、替換衣物、流行服飾、高級住所、急救包、汽車、包包",desc:"管理著傭人們的管家或家令。"},
	{icon:"△",name:"組織幹部",feat:"［指揮官］：【知性】判定的達成值+2，【精神】判定的達成值+1。",items:"行動裝置、流行服飾、高級住所、隱藏據點、汽車、包包",desc:"國家、企業或組織的幹部。所屬於哪需與GM討論來決定。"},
	{icon:"△",name:"官僚",feat:"［特定權限］：【精神】判定的達成值+2，【幸運】判定的達成值+1。",items:"行動裝置、高級住所、隱藏據點、汽車、包包",desc:"高等的國家公務員。詳細情形需與GM討論來決定。"}]},
{name:"表職業2（神靈、幸御魂）",sheet:[
	{icon:"",name:"土地神",feat:"［信仰的供物］：［遊戲開始］時，能夠獲得1個［價格：200G］以下的［道具：消耗］。",items:"休息領域、靈力轉移、靈光釋放",desc:"在種種經歷下成為了某片土地的土地神的神靈。平時的姿態各式各樣，偶爾也有著以人類姿態適應現代社會的人。"},
	{icon:"",name:"守護神",feat:"［守護神］：【敏捷】及【精神】判定的達成值+2。",items:"休息領域、靈力轉移、靈氣感知",desc:"與特定組織或族群交換盟約，以崇拜自己為條件來守護某片土地、族群或是特定事物的守護神。"},
	{icon:"",name:"大妖怪",feat:"［高等存在］：【體力】及【知性】判定的達成值+2。",items:"休息領域、靈力轉移、靈威衝",desc:"達到神靈領域的強大妖怪。其真面目是經歷了長久年月的動物或植物。"},
	{icon:"",name:"化身",feat:"［永劫存在］：【知性】及【幸運】判定的達成值+2。",items:"休息領域、靈力轉移、靈氣感知",desc:"經歷了長久年月而獲得神格的存在。其真面目是經歷了長久年月的道具、機械等無機物。"},
	{icon:"",name:"架空存在",feat:"［架空的異能］：【體力】、【敏捷】、【知性】、【幸運】判定的達成值+1。",items:"休息領域、靈力轉移、靈威衝",desc:"雖有記載於傳說或書籍裡，但無法確定是否真實存在的神祕存在或都市傳說。"}]},
{name:"表職業3（英魂）",sheet:[
	{icon:"",name:"英雄",feat:"［大力勇猛］：【體力】判定的達成值+3。",items:"休息領域、靈力轉移、靈威衝",desc:"過去在歷史或神話中活躍的英雄。高潔的君王與騎士，或是傳說中的戰士及劍豪即屬於英雄。"},
	{icon:"",name:"指導者",feat:"［人格魅力］：【精神】判定的達成值+3。",items:"休息領域、靈力轉移、靈光釋放",desc:"過去在歷史或神話中引領人們的領導者或領袖人物。被歌頌為名君的王或宗教的教主即屬於指導者。"},
	{icon:"",name:"軍神",feat:"［異能的戰術眼］：【幸運】判定的達成值+3。",items:"休息領域、靈力轉移、靈氣感知",desc:"過去在歷史或神話中有著驚人戰果的將軍或戰士。在歷史留名的戰役中取勝的名將或救國的英雄即屬於軍神。過去歷史的戰爭中活躍的名將或救國的英雄即是軍神。"},
	{icon:"",name:"大魔術師",feat:"［魔導的英知］：【知性】判定的達成值+3。",items:"休息領域、靈力轉移、靈光釋放",desc:"登場於過去的歷史或神話中，使用著強大魔術及咒術的偉大魔術師或咒術師。使用法力或神通力的術者及預言者也包含在此。"},
	{icon:"△",name:"怪物",feat:"［怪物的證明］：【敏捷】判定的達成值+3。",items:"休息領域、靈力轉移、靈威衝",desc:"在傳說中被稱為怪物的存在。聖域的守護者、被視為怪物的英雄、怪人或魔人即屬於怪物。"}]},
{name:"表職業4（稀人）",sheet:[
	{icon:"",name:"超戰士",feat:"［強大的戰士］：【體力】及【知性】判定的達成值+2。",items:"幻影能力、轉移能力、大規模結界",desc:"在異界被稱呼為勇者或魔王，超人般的戰士。"},
	{icon:"",name:"龍殺手",feat:"［特級討伐者］：【敏捷】、【知性】、【精神】、【幸運】判定的達成值+1。",items:"幻影能力、飄浮能力、大規模結界",desc:"在異界曾打倒過龍的戰士、探索者或魔法使。"},
	{icon:"",name:"冒險者",feat:"［冒險］：【敏捷】判定的達成值+2，【知性】及【幸運】判定的達成值+1。",items:"幻影能力、飄浮能力、大規模結界",desc:"在異界承接著各種委託，被稱為冒險者的存在。"},
	{icon:"",name:"魔法研究者",feat:"［魔法研究］：【知性】判定的達成值+2，【精神】及【幸運】判定的達成值+1。",items:"幻影能力、飄浮能力、大規模結界",desc:"在異界研究著高強魔法的偉大魔法使。"},
	{icon:"△",name:"魔法犯罪者",feat:"［禁斷的知識］：【知性】判定的達成值+3，【精神】判定的達成值+1。",items:"幻影能力、轉移能力、大規模結界",desc:"掌握了禁忌的魔法，在異界犯下大罪的高等魔術師。"}]},
{name:"表職業5（幸御魂）",sheet:[
	{icon:"",name:"妖怪",feat:"［本領發揮］：對象的【行動值】+2。",items:"取得任3個［名稱］相異的［道具：常備／價格：非賣品］。",desc:"因某種理由而成為妖怪——精怪的存在。姿態雖各式各樣，但多數為異形。在魔境外會變為動物或人類的姿態來活動。"},
	{icon:"",name:"精靈",feat:"［超自然存在］：對象的【生命力】最大值+4。",items:"取得任3個［名稱］相異的［道具：常備／價格：非賣品］。",desc:"寄宿於各種物體的超自然存在，即是精靈。容貌雖與人類相似，但身為異形這點並無改變，在魔境外會變為動物的姿態。"},
	{icon:"",name:"神使",feat:"［靈主的加護］：對象的［裝甲］及［結界］+1。",items:"取得任3個［名稱］相異的［道具：常備／價格：非賣品］。",desc:"侍奉於高等的神靈或幸御魂等神格、魔境之主的神使。其容貌為穿著衣物，與人同大的動物，在魔境外多會變為人類姿態來活動。"},
	{icon:"",name:"付喪神",feat:"［神威放魂］：對象在［傷害計算］時+1。",items:"取得任3個［名稱］相異的［道具：常備／價格：非賣品］。",desc:"經歷長久年月的機械或物品精怪化的存在，即是付喪神。實際面貌是帶有靈力的物品，在魔境外會變為原本的物品或人類姿態來活動。"},
	{icon:"",name:"守護靈",feat:"［思念的神威］：1場遊戲1次，對象宣言使用《天賦》時消耗3點【靈紋】，獲得1個［超越靈力］。",items:"取得任3個［名稱］相異的［道具：常備／價格：非賣品］。",desc:"為守護特定人物或其血親而精怪化的存在，即是守護靈。實際的容貌各式各樣，在魔境外會變為動物或人類的姿態來活動。"}]},
{name:"表職業6（仿生機械）",sheet:[
	{icon:"□",name:"戰鬥型",feat:"［戰鬥改造］：［傷害計算］時+1。",items:"通信裝置、整備場、護身魔彈銃",desc:"特化於對超常存在戰鬥的仿生人。"},
	{icon:"□",name:"防衛型",feat:"［防衛機能］：［裝甲］及［結界］+1。",items:"通信裝置、整備場、防衛用式神",desc:"特化於守護創造者的保鑣型仿生人。"},
	{icon:"□",name:"偵查型",feat:"［偵查機能］：【幸運】判定的達成值+2。",items:"通信裝置、整備場、電子特裝車",desc:"特化於調查、偵查超常事件的偵查型仿生人。"},
	{icon:"□",name:"秘書型",feat:"［多工處理］：【主能力值】判定的達成值+1。",items:"通信裝置、整備場、靈藥一式",desc:"作為創造者的秘書負責照料日常生活、協助處理事務的特化型仿生人。"},
	{icon:"",name:"擬態型",feat:"從［表職業1］裡選擇1項，記為［擬態型：○○］（○○為表職業的名稱）。",items:"同所選的表職業",desc:"遵照創造者的命令，擬態為一般人來生活的仿生人。"}]},
{name:"表職業7（人造生命）",sheet:[
	{icon:"□",name:"護衛種",feat:"［戰鬥的才能］：［主動判定］的達成值+1。",items:"念話寶石、個人工房、護身魔彈銃",desc:"為守護創造者或解決超常事件而調整為戰鬥用的人造人。"},
	{icon:"□",name:"靈脈種",feat:"［靈脈機能］：【生命力】的最大值+4。",items:"念話寶石、個人工房、防衛用式神",desc:"被用來作為靈脈替代品的靈力特化人造人。"},
	{icon:"□",name:"侍奉種",feat:"［侍奉的心得］：【主能力值】判定的達成值+1。",items:"念話寶石、個人工房、從屬人造人",desc:"為照料創造者日常起居而特化的侍從、侍女型人造人。"},
	{icon:"□",name:"媒介種",feat:"［媒介化］：［魔法傷害］+2。",items:"念話寶石、個人工房、靈藥一式",desc:"為援護創造者行使魔術而調整而成的人造人。"},
	{icon:"",name:"代用種",feat:"從［表職業1］裡選擇1項，記為［代用種：○○］（○○為表職業的名稱）。",items:"同所選的表職業",desc:"遵照創造者的命令，擬態為一般人來生活的人造人。"}]},
];