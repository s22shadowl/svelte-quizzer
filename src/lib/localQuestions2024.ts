import { questionType } from '../constants';
import type { questionsData2024 } from '../constants';

export const localQuestions: questionsData2024 = [
	{
		title: '君日本語本當上手',
		id: 0,
		data: {
			description:
				'日文五十音隨著時代演變，有些假名漸漸地不再使用或被合併，請問根據考據，片假名「ヰ」當初正確的發音是？',
			defaultScore: 2,
			type: questionType.select,
			options: ['YE', 'YI', 'WI', 'WE', 'I'],
			image_url: 'https://i.imgur.com/QtzypzS.jpeg'
		}
	},
	{
		title: '南霸天',
		id: 1,
		data: {
			description:
				'南部知名手搖杯「茶の魔手」成立於1993年，在近兩年終於在台北展店，請問其LOGO中黃色的圖案所代表的是什麼？',
			defaultScore: 2,
			type: questionType.select,
			options: ['麥稈', '魔手', '太陽', '筆墨', '沒有意義'],
			image_url: 'https://i.imgur.com/0HrExW5.png'
		}
	},
	{
		title: '太離譜了！！！！！',
		id: 2,
		data: {
			description:
				'知名立法委員黃國昌的綽號在近年變得越來越長，請問以下何者稱號指涉的對象並沒有「直接」負面含意？',
			defaultScore: 2,
			type: questionType.select,
			options: [
				'公理的馬奇諾防線',
				'智慧的巴特農神殿',
				'釋迦牟尼的現世護法',
				'法律與道德的不敗天秤',
				'自由的燈塔'
			],
			image_url: 'https://i.imgur.com/zdN0rN5.jpeg'
		}
	},
	{
		title: '太太我喜歡你啊',
		id: 3,
		data: {
			description:
				'日系 ACG 作品中，因留有以下髮型的母親角色時常在劇情中遭遇不幸，此髮型又被稱之為死亡髮型。事實上，此髮型的設計其實源自於一種日本傳統藝術中的表現方法「病鉢巻」，請問這種傳統藝術是？',
			defaultScore: 2,
			type: questionType.select,
			options: ['歌舞伎', '能劇', '紙芝居', '神樂', '盆踊'],
			image_url: 'https://i.imgur.com/bMN42B7.jpeg'
		}
	},
	{
		title: '5月29日下午18時14分',
		id: 4,
		data: {
			description: '請問在《刀劍神域》SAO篇中，第一位向桐人告白的角色是？',
			defaultScore: 2,
			type: questionType.select,
			options: ['亞斯娜', '克萊茵', '莉茲貝特', '西利卡', '艾基爾'],
			image_url: 'https://i.imgur.com/lgIKgKX.png'
		}
	},
	{
		title: '所謂的「普通」和「理所當然」到底是什麼',
		id: 5,
		data: {
			description: `請問《BanG Dream! It's MyGO!!!!!》中，以下台詞是由誰說出來的？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['立希', '燈', '祥子', '愛音', '爽世'],
			image_url: 'https://i.imgur.com/SOaoqui.png'
		}
	},
	{
		title: '一時復活一時爽、一直復活一直爽',
		id: 6,
		data: {
			description: `知名網頁遊戲 Unlight Revive 版於今年再次登陸 STEAM，引起大量老人回鍋，請問途中登入畫面中的角色身分為何？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['火焰聖女', '大小姐(玩家)', '聖女的侍者', '未實裝的戰士(角色)', '以上皆非'],
			image_url: 'https://i.imgur.com/QQthsDz.jpeg'
		}
	},
	{
		title: '喔喔喔喔喔～喔喔喔喔喔～',
		id: 7,
		data: {
			description: `台灣隊在 2024 年第三屆世界棒球12強賽中擊敗日本首次拿下冠軍，請問擔任台灣隊隊長並奪下賽事MVP的選手「四爺」陳傑憲在本次比賽中，出場時的守備位置是？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['右外野手', '中外野手', '游擊手', '二壘手', '投手'],
			image_url: 'https://i.imgur.com/QQthsDz.jpeg'
		}
	},
	{
		title: '再、再一局……',
		id: 8,
		data: {
			description: `於2024年入圍TGA GOTY且奪得最佳獨立遊戲獎的《Balatro 小丑牌》成為今年遊戲界的最大贏家之一，請問在遊戲啟動畫面中，登場的這張小丑牌叫做甚麼名字？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/u04tw9k.png'
		}
	},
	{
		title: '汪汪！喵喵！哞哞！',
		id: 9,
		data: {
			description: `2024年發售的台灣獨立遊戲活俠傳中，主角趙活在遊戲中存在各式各樣的死法可以解鎖，其中許多死法與女角們有關，請問以下哪種死法的觸發與遊戲中的女角「沒有」明確關聯？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['被蛇咬死', '被豬拱死', '被馬踩死', '被海盜餵魚死', '被雞腿殺死'],
			image_url: 'https://i.imgur.com/8zB1h1I.jpeg'
		}
	},
	{
		title: 'Deus Ex Machina',
		id: 10,
		data: {
			description: `台灣獨立樂團珂拉琪於 2024 年年底發佈的新專輯《機械降神 Deus Ex Machina》由部分舊曲目及全新曲目組合而成，請問此專輯中最舊的曲目是？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['徒花水月', '紅弁慶', '機械降神', '蓮花空行', '謀殺石蓮'],
			image_url: 'https://i.imgur.com/RNKbyzS.jpeg'
		}
	},
	{
		title: '你就是這點不行啊！',
		id: 11,
		data: {
			description: `《敗北女角太多了》中，女主角八奈見杏菜以驚人的食量獲得廣大觀眾的喜好，請問根據官方統計，在十二集的動畫，八奈見總共攝取了多少大卡的熱量？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/tl7CtTU.jpeg'
		}
	},
	{
		title: '你被叔叔和房仲騙了吧？',
		id: 12,
		data: {
			description: `《敗北女角太多了》中，女主角八奈見杏菜以驚人的食量獲得廣大觀眾的喜好，請問根據官方統計，在十二集的動畫，八奈見總共攝取了多少大卡的熱量？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['東京', '埼玉', '神奈川', '千葉', '茨城'],
			image_url: 'https://i.imgur.com/K0LLONF.png'
		}
	},
	{
		title: '輪到我鯊魚大俠出場啦！',
		id: 13,
		data: {
			description: `藤本樹的短篇作品《驀然回首》其原名 LOOK BACK 是出自於哪隻樂隊的經典歌曲？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['披頭四', '皇后合唱團', '齊柏林飛船', '綠洲合唱團', '布勒'],
			image_url: 'https://i.imgur.com/Yg9Hb54.jpeg'
		}
	},
	{
		title: '剩下的時間要做什麼呢？',
		id: 14,
		data: {
			description: `Hololive 所屬 vtuber 儒烏風亭らでん今年以一系列菇類主題的舞蹈短影片爆紅達成了百萬訂閱，請問以下何種菇類並沒有在她的短片中登場過？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['火焰茸', '香菇', '杏鮑菇', '松茸', '洋菇'],
			image_url: 'https://i.imgur.com/HeXnDsR.png'
		}
	},
	{
		title: '還算可愛......吧',
		id: 15,
		data: {
			description: `以下是 2024 巴黎奧運的吉祥物，請問其造型設計原型是出自什麼？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/p1GKfc9.png'
		}
	},
	{
		title: '追不上我的速度吧阿嘎',
		id: 16,
		data: {
			description: `全台灣各處監獄都有其暢銷的受刑人商品，請問根據校正署網站，台北監獄在 2024 年最受歡迎的品項是什麼？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['豆干', '奶油酥條', '鳳梨酥', '巧克力杏仁餅', '桃酥'],
			image_url: 'https://i.imgur.com/eBKayG8.jpeg'
		}
	},
	{
		title: '最高的山、最長的河',
		id: 17,
		data: {
			description: `2024年，Faker 李相赫再次奪得英雄聯盟世界賽冠軍，這是他的第五座冠軍獎盃，請問在賽前的訪問中 ，Faker 表示這一冠是為了誰而戰？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['粉絲', '奶奶', '隊友', '自己', '教練'],
			image_url: 'https://i.imgur.com/6hQeaMB.jpeg'
		}
	},
	{
		title: '這次不當假老二了',
		id: 18,
		data: {
			description: `前台北市長柯文哲於 2024年底因京華城容積爭議被台北地檢署以多項罪名起訴，於本問答大賽截稿前，其交保的交保金 7000 萬元已經突破台灣過往政治人物的最高交保金額紀錄強勢登頂第一，請問在柯文哲以前，此項紀錄的保持人是？（不只計算政治人物的話，該紀錄的保持人是趙藤雄的 5.5 億，文哲大仔還要再努力）`,
			defaultScore: 2,
			type: questionType.select,
			options: ['顏寬恆', '林益世', '劉泰英', '鄭文燦', '賴素如'],
			image_url: 'https://i.imgur.com/jE4ooPW.jpeg'
		}
	},
	{
		title: '為什麼台灣做不出黑悟空？',
		id: 19,
		data: {
			description: `2024年發售的台灣獨立遊戲《九日》中，官方加入了大量獨特的「太陽語」詞彙，請問在遊戲中，「甩隱 Suâ ìng」一詞是什麼意思？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/aJunp3H.png'
		}
	},
	{
		title: 'We Are Happy',
		id: 20,
		data: {
			description: `Ninomae Ina'nis 在今年的 GTA 聯動企劃中駕駛著她的 Peel P50 小車車到處出任務，請問 INA 將這台可愛的小車車取名為什麼？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['花生君', '葡萄君', '章魚君', '茄子君', '香蕉君'],
			image_url: 'https://i.imgur.com/rfJfDW6.jpeg'
		}
	},
	{
		title: '宇宙邦無敵的吧',
		id: 21,
		data: {
			description: `2024 新番《勇氣爆發 BANG BRAVERN》中，主角在第三集使出的必殺技（見下圖），招式全名是？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/TlqqYJs.png'
		}
	},
	{
		title: '是你说的，王爵和使徒永远一起战斗。',
		id: 22,
		data: {
			description: `《爵跡2：冷血狂宴》拍攝期間，在第一集飾演重要女角的演員范冰冰因涉及逃稅案引起巨大爭議，請問在續集完成後，范冰冰的角色受到了怎樣的影響？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['角色被刪除', '戲份被大砍', '演員被更換', '角色被換臉', '沒有影響'],
			image_url: 'https://i.imgur.com/wJz43Ui.jpeg'
		}
	},
	{
		title: '你是……的哥哥',
		id: 23,
		data: {
			description: `在《妹！せいかつ～ファンタジー～》(黑白妹2) 中，開場時可以透過測驗隨機取得稱號，請問以下哪個稱號詞條無法增加初始信賴值？`,
			defaultScore: 2,
			type: questionType.select,
			options: ['熊頭(クマヘッド)', '天才', '脫糞', '帥哥(イケメン)', '溫柔(優しい)'],
			image_url: 'https://i.imgur.com/hOTb8to.jpeg'
		}
	},
	{
		title: '今年一定倒',
		id: 24,
		data: {
			description: `2024 年，知名手遊《少女☆歌劇Revue Starlight -Re LIVE-》結束了它罪惡的一生，請問從發佈到結束營運，它總共活過多少個日子？`,
			defaultScore: 2,
			type: questionType.shortAnswer,
			image_url: 'https://i.imgur.com/QCCBamZ.jpeg'
		}
	}
];
