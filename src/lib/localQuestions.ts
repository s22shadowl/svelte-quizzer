import { questionType } from '../constants';
import type { questionsData } from '../constants';

export const localQuestions: questionsData = {
	groups: [
		{
			id: 0,
			title: 'Holo',
			questions: [
				{
					title:
						'白上吹雪著名的迷因影片《We Are Japanese Goblin》中使用的背景音樂取自東方Project的同人歌曲，請問這首歌的原曲出處是？（回答曲名、角色、哪一代皆可）',
					id: 0,
					defaultScore: 2,
					type: questionType.shortAnswer,
					options: [],
					image_url: 'https://i.imgur.com/I2hQMm9.jpg'
				},
				{
					title:
						'請問 Hololive 2023 年 Youtube 總直播時數最低的 Vtuber 是哪位？（扣除長休的哈洽馬和新人Regloss）',
					id: 1,
					defaultScore: 2,
					type: questionType.select,
					options: ['Gawr Gura', '百鬼綾目', '拉普拉斯‧達克尼斯', '星街彗星'],
					image_url: 'https://i.imgur.com/aYsHKZo.jpg'
				},
				{
					title: '以下何者不是儒烏風亭螺鈿目前曾直播過的主題？',
					id: 2,
					defaultScore: 2,
					type: questionType.select,
					options: ['落語', '美術介紹', '大喜利', '麻將'],
					image_url: 'https://i.imgur.com/TciDLGH.jpg'
				},
				{
					title: '請回答出兩名具有程式設計能力的 Hololive 成員',
					id: 3,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/emgRfYx.jpg'
				},
				{
					title: '請寫出任一以下成員的全名：山田、Biboo、Bae',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/xClK0sq.jpg'
				}
			]
		},
		{
			id: 1,
			title: '新番',
			questions: [
				{
					title:
						'四月新番《我推的孩子》原著赤坂明是一名以沉迷 Apex 聞名的漫畫家，更曾參加第四屆 CR 杯比賽，請問他在 Apex 中取得的最高牌位是？（順帶一提他是手把玩家）',
					id: 0,
					defaultScore: 2,
					type: questionType.select,
					options: ['大師', '鑽石', '白金', '金牌'],
					image_url: 'https://i.imgur.com/nwpdszJ.jpg'
				},
				{
					title: '四月新番《無神世界中的神明活動》第一話中使用的標題是？',
					id: 1,
					defaultScore: 2,
					type: questionType.select,
					options: [
						'恐呼尊名 御靈之神 請懲奸除惡 尊貴的御靈 不勝感激 不勝感激',
						'恐呼尊名 御靈之神 請懲奸除惡 尊貴的御靈 不勝感激 不勝感激',
						'恐呼尊名 御靈大神 大神御前 誠惶誠恐 大神福澤 除凶破惡 護佑蒼生 平安行事 神跡降世 祛除災厄 永尊神位 福澤遍世 竭心拜謁 當下未來 皆承神恩 大神福澤',
						'恐呼尊名 御靈大神 禍津日屬 無垢無傷 甲乙丙丁 戊己庚辛 一二三四五六七八九十 誠惶誠恐 戰戰兢兢 如此祈祝 御國之本 唯一之神 天地之御魂尊神 懇聽吾請 誠惶誠恐'
					],
					image_url: 'https://imgur.com/EFSLKCE.jpg'
				},
				{
					title: '《葬送的芙莉蓮》中，登場人物的姓名皆取自德文單詞，請問修爾塔克的名字意涵是？',
					id: 2,
					defaultScore: 2,
					type: questionType.select,
					options: ['堅硬的', '石頭的', '強的', '勇敢的'],
					image_url: 'https://i.imgur.com/9tyDloa.jpg'
				},
				{
					title:
						'《水星的魔女》中，有人物與部分機體的名稱是取自莎劇《暴風雨》，請問以下何者並不是出自此典故？',
					id: 3,
					defaultScore: 2,
					type: questionType.select,
					options: [
						'米奧琳涅（Miorine）',
						'風靈（Aerial）',
						'異靈（Calibarn）',
						'普羅斯佩拉（Prospera）'
					],
					image_url: 'https://imgur.com/uWdYgU2.jpg'
				},
				{
					title: '2023日本動畫電影台灣票房冠軍是？',
					id: 4,
					defaultScore: 2,
					type: questionType.select,
					options: ['灌籃高手', '鈴芽之旅', '名偵探柯南：黑鐵的魚影', '蒼鷺與少年'],
					image_url: ''
				}
			]
		},
		{
			id: 2,
			title: '少歌',
			questions: [
				{
					title: '請問華戀喜歡的這隻吉祥物原型是參考自現實中的哪種動物？(@milkpurin3718)',
					id: 0,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://imgur.com/ydVb7uV.jpg'
				},
				{
					title: '在劇場版中，此背版上的運動何者並沒有實際在 Revue 中出現？',
					id: 1,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/WrGBQgj.png'
				},
				{
					title: '此LIVE片段中，正在表演的是哪首歌曲？',
					id: 2,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://media.giphy.com/media/qxrGKCBWiwuRDuVVHA/giphy.gif'
				},
				{
					title: '露崎真晝所持武器的名稱是？',
					id: 3,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/weNQGXt.png'
				},
				{
					title: '少女歌劇總集篇劇場版和新劇場版在台灣上映的日期分別是？',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: ''
				}
			]
		},
		{
			id: 3,
			title: '大選',
			questions: [
				{
					title: '柯文哲喜好以中國皇帝形容自己，請問目前哪位皇帝尚未獲得文哲大人的垂青？',
					id: 0,
					defaultScore: 2,
					type: questionType.select,
					options: ['唐太宗', '漢高祖', '明成祖', '清世宗（雍正）'],
					image_url: 'https://i.imgur.com/HTtaaVI.jpg'
				},
				{
					title:
						'趙少康心繫中華民國，過去曾多次喊出「中華民國要滅亡了」口號，請問他第一次說出這句話的時間和指控對象分別是？',
					id: 1,
					defaultScore: 2,
					type: questionType.select,
					options: ['1990 年，李登輝', '1992 年，李登輝', '1994 年，陳水扁', '1996 年，陳水扁'],
					image_url: 'https://imgur.com/frHtNHA.jpg'
				},
				{
					title:
						'賴清德與蕭美琴在政治人物中都是知名的棒球迷，且兩人支持的中職球隊是同一支，請問這隻球隊是？',
					id: 2,
					defaultScore: 2,
					type: questionType.select,
					options: ['富邦悍將', '統一獅', '中信兄弟（兄弟象）', '味全龍'],
					image_url: 'https://i.imgur.com/fPu3R8s.jpg'
				},
				{
					title:
						'阿喆是文化大學的新生，他在學校附近看上了侯友誼出租的大群館宿舍，請問根據最新的價格，如果他想入住單人宿舍（5.5坪）大約需要月付多少房租？',
					id: 3,
					defaultScore: 2,
					type: questionType.select,
					options: ['8000元', '12000元', '16000元', '20000元'],
					image_url: 'https://i.imgur.com/wROKMiI.png'
				},
				{
					title:
						'前總統參選人郭台銘上月大動作開箱君悅飯店頂級套房2538房，令民眾大開眼界，請問這間套房的坪數有多大？',
					id: 4,
					defaultScore: 2,
					type: questionType.select,
					options: ['37坪', '67坪', '97坪', '127坪'],
					image_url: 'https://i.imgur.com/sVDDsKk.jpg'
				}
			]
		},
		{
			id: 4,
			title: '迷因',
			questions: [
				{
					title: '著名的迷因阿扁巴巴大俠原片出自哪部作品？',
					id: 0,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/aqj0WLF.png'
				},
				{
					title: '「金珂拉，好處都有啥，誰說對了就給他：」請填空以下台詞（共九字）',
					id: 1,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/h91FZ9T.jpg'
				},
				{
					title:
						'《山道猴子的一生》中使用的人物造型出自網路迷因 Wojak，請問 Wojak 最早來自哪個國家？',
					id: 2,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/ZQMyjlU.png'
				},
				{
					title:
						'兒童節目《花園寶寶》中台詞「晚安，瑪卡巴卡」在今年意外爆紅，請問「瑪卡巴卡」是什麼意思？',
					id: 3,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/ulzbkMj.jpg'
				},
				{
					title: '請填空圖中缺少的《刃牙》台詞（五字）',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/eWfQ357.jpg'
				}
			]
		},
		{
			id: 5,
			title: 'Vocaloid',
			questions: [
				{
					title: '前奏',
					id: 0,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://www.youtube.com/embed/phnfz7d3qq0'
				},
				{
					title: '主歌',
					id: 1,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://www.youtube.com/embed/GYJqhKVKV3E'
				},
				{
					title: '副歌',
					id: 2,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://www.youtube.com/embed/kftMl5xxCMc'
				},
				{
					title: '間奏',
					id: 3,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://www.youtube.com/embed/yBSofnWpdKA'
				},
				{
					title: '尾奏',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					video_url: 'https://www.youtube.com/embed/NLUT6UYRc3U'
				}
			]
		},
		{
			id: 6,
			title: '爛片',
			questions: [
				{
					title:
						'《RRR 鐵血雙雄》中，兩大主角的故事皆取材自印度歷史上真實的同名人物，請問以下電影中關於警察拉朱(Raju)的描述何者與現實中有出入：',
					id: 0,
					defaultScore: 2,
					type: questionType.select,
					options: [
						'革命期間，拉朱有次在神廟中祭祀女神時受到英國警察的偷襲，並且他從中活了下來。',
						'拉朱曾經襲擊警局從中繳獲大量的現代軍火供革命軍使用。',
						'拉朱有一名愛慕的對象是他童年認識的女孩西塔(Sita)。',
						'在展開革命前，拉朱曾經擔任過警察。'
					],
					image_url: 'https://i.imgur.com/jtN9x5N.jpg'
				},
				{
					title: '在《台北物語》中，林秋紅總共環遊世界了幾次才把財產花光？',
					id: 1,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/uYkizBS.jpg'
				},
				{
					title:
						'富山春居圖中，志玲姐姐的百變造型是本片的一大賣點，請問一下那個造型並沒有在片中登場？',
					id: 2,
					defaultScore: 2,
					type: questionType.select,
					options: ['忍者', '護士', '尼姑', '空姐'],
					image_url: 'https://i.imgur.com/lVKxcUO.jpg'
				},
				{
					title:
						'爛片之王尼可拉斯凱吉曾經憑藉多部電影入圍金酸梅獎，請問截至目前，凱吉哥總共得獎過幾次？',
					id: 3,
					defaultScore: 2,
					type: questionType.select,
					options: ['0次', '1次', '3次', '5次'],
					image_url: 'https://i.imgur.com/sZmqa6J.jpg'
				},
				{
					title:
						'台灣經典靠片大俠梅花鹿中，有以下經典場景，請問狐狸精要梅花鹿千萬不要學人類做什麼？',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/VFa4kSb.png'
				}
			]
		},
		{
			id: 7,
			title: '新番時光機',
			questions: [
				{
					title:
						'富樫以其著名的休刊頻率在漫畫界為人所知，請問在 2013 年的少年 Jump 上，獵人總共的連載話數是？（JUMP 一年約出版 52期）',
					id: 0,
					defaultScore: 2,
					type: questionType.select,
					options: ['11話', '7 話', '4 話', '0 話'],
					image_url: 'https://i.imgur.com/wPFtqac.jpg'
				},
				{
					title:
						'2013 年播出的《有頂天家族》中，出現了一款參考現實世界名酒「電器白蘭」的夢幻之酒，這款酒的名字是？',
					id: 1,
					defaultScore: 2,
					type: questionType.select,
					options: ['真電氣白蘭', '真電氣白蘭', '電氣白蘭改', '電氣白蘭紅玉'],
					image_url: 'https://i.imgur.com/x5srQ4N.jpg'
				},
				{
					title:
						'2023 年，FAKER 拿下了英雄聯盟  S13 的世界冠軍，成為相隔他的首冠十年後的第四冠，對於他的冠軍造型選擇，原本風聲傾向十年前被官方婉拒的阿璃，但如今似乎又有了變數，請問 2013 年時，在阿璃被打槍後，FAKER 最終選擇了什麼英雄的冠軍造型？',
					id: 2,
					defaultScore: 2,
					type: questionType.select,
					options: ['卡莎碧雅', '阿祈爾', '劫', '雷茲'],
					image_url: 'https://i.imgur.com/3QsEgi0.jpg'
				},
				{
					title: '登上 2013 年日本紅白歌合戰的 ACG 歌曲是？',
					id: 3,
					defaultScore: 2,
					type: questionType.select,
					options: [
						'千本櫻（初音未來）',
						'紅蓮の弓矢（進擊的巨人）',
						'それは僕たちの奇跡（Lovelive!）',
						'ようかい体操第一（妖怪手錶）'
					],
					image_url: 'https://i.imgur.com/D1Ebcg3.jpg'
				},
				{
					title: '2013 年上傳的宣導影片《如果早知道 男生也會被性侵》中，阿偉一開始在玩的遊戲是？',
					id: 4,
					defaultScore: 2,
					type: questionType.select,
					options: ['爆爆王', '楓之谷', '英雄聯盟', 'CS online'],
					image_url: 'https://i.imgur.com/r0IQPoL.jpg'
				}
			]
		},
		{
			id: 8,
			title: '男童',
			questions: [
				{
					title:
						'根據著名男童翔寶的理論， 雌小鬼的劇情大抵都能分為三階段「__->__->__」，少了任何一階段都是不完整的，請問這三階段分別是？',
					id: 0,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/8YIGpfa.png'
				},
				{
					title: '請問離男童公寓最近的日式拉麵店叫什麼名字？',
					id: 1,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/5x6hOUr.png'
				},
				{
					title: '在阿文舉辦的異世界轉生殺人事件LARP中，出現的宗教組織全名叫什麼？',
					id: 2,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/nnPNaNK.png'
				},
				{
					title:
						'在2023寒假小接《永──永字八法》首家中，重華和主角提到，若他的暴露狂行為被警衛發現，他的蛋蛋會發生什麼事？',
					id: 3,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/cMiBhsR.png'
				},
				{
					title: '請問男童公寓爛片趴 2023 年第一次播映的電影是什麼（不一定是爛片）？',
					id: 4,
					defaultScore: 2,
					type: questionType.shortAnswer,
					image_url: 'https://i.imgur.com/WV67IT5.jpg'
				}
			]
		}
	]
};
