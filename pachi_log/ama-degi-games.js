// 甘デジ
const AMA_DEGI_GAMES = [
	{
		id: 'shinumi',
		shortName: '新海物語',
		name: 'PA新海物語',
		border: 16.5,
		info: '大当り確率: 1/99.9, ST突入率: 100%, ST継続率: 41.3%',
		yuTime: false,
	},	
	{
		id: 'wanwan',
		shortName: 'Pわんパラ',
		name: 'PAわんわんパラダイスV',
		border: 16.8,
		info: '大当り確率: 1/99.9, ST突入率: 42%, ST継続率: 80%, <br>15回回れば、天井まで200で期待値プラス',
		yuTime: true,
	},			
	{
		id: 'ranma-ama',
		shortName: 'らんま甘',
		name: 'Pらんま1/2 熱血格闘遊戯 99Ver.',
		border: 18.0,
		info: '大当り確率: 1/99.9, ST突入率: 100%, ST継続率(2回目以降): 80%, 平均連荘: 8.2',
		yuTime: false,
	},		
	{
		id: 'aimarin99',
		shortName: 'アイマリン99',
		name: 'PAスーパー海物語 IN 沖縄5 with アイマリン',
		border: 17.9,
		info: '大当り確率: 1/99.9, ST突入率: 100%<br>ST中大当り発生率: 41%, 時短引き戻し率: 14-59%<br>1R103ならボーダー17.5 20ちょい/1kだと日当二万円らしい',
		yuTime: false,
	},	
	{
		id: 'agunes99',
		shortName: 'アグネス99',
		name: 'PA大海物語4スペシャル Withアグネス・ラム',
		border: 18.3,
		info: '大当り確率: 1/99.9, ST突入率: 100%<br>ST中大当り発生率: 41%, 時短引き戻し率: 14-59%<br>1R101.6ならボーダー17.5',
		yuTime: false,
	},	
	{
		id: 'inuyasya2',
		shortName: '犬夜叉2',
		name: 'P犬夜叉2',
		border: 16.8,
		info: '大当り確率: 1/99.9, 最終決戦成功率: 約28%, ST継続率: 79%, 最終決戦成功率約28%で算出',
		yuTime: false,
	},		
	{
		id: 'kinnikuman3meat',
		shortName: 'キン肉マン3ミート',
		name: 'ぱちんこキン肉マン3 キン肉星王位争奪編 特盛ミートくんver. ',
		border: 17.2,
		info: '大当り確率: 1/99.9, ST突入率: 50%, ST継続率: 90% or 95%',
		yuTime: false,
	},		
	{
		id: 'cinderella',
		shortName: 'シンブレ',
		name: 'Pシンデレラブレイド',
		border: 16.5,
		info: `大当り確率: 1/141.1, ST突入率: 40%, <br>
		おしりペンペンタイムBONUS: 継続率: 約91%, <br>BATTLE MODE勝率: 約65%`,
		yuTime: false,
	},		
	{
		id: 'shingaro77',
		shortName: '真・牙狼77',
		name: 'P激デジ真・牙狼',
		border: 14.9,
		info: '大当り確率: 1/77.74, ST突入率: 51.1%, ST継続率: 77%,<br>残176打ち始めサポ抜け即やめの場合等価ボーダーは13.6となる',
		yuTime: false,
	},		
	{
		id: 'kinfuji99',
		shortName: '金富士99',
		name: 'PAスーパー海物語IN JAPAN2 金富士99バージョン',
		border: 17.7,
		info: '大当り確率: 1/99.9, ST突入率: 100%, ST回数30回',
		yuTime: false,
	},	
	{
		id: 'taikoumi99',
		shortName: '海太鼓99',
		name: 'PAスーパー海物語 IN JAPAN2 with 太鼓の達人',
		border: 17.7,
		info: '大当り確率: 1/99.9, 確変突入率: 55%',
		yuTime: false,
	},
	{
		id: 'ginpara99',
		shortName: 'ギンパラ99',
		name: 'PAギンギラパラダイス 夢幻カーニバル 強99ver.',
		border: 17.4,
		info: '大当り確率: 1/99.9, RUSH突入率: 41%<br>RUSH継続率: 77%',
		yuTime: false,
	},	
	{
		id: 'nobuna99',
		shortName: '信奈99',
		name: 'P織田信奈の野望 全国版GC250Aa',
		border: 15.6,
		info: '大当り確率: 1/99.90, RUSH突入率: 100%<br>RUSH継続率: 72%, 遊タイム: 大当り間250回',
		yuTime: false,
	},		
	{
		id: 'vvvama',
		shortName: 'VVV甘',
		name: 'Pフィーバー革命機ヴァルヴレイヴ2 Lightver.',
		border: 17.2,
		info: '大当り確率: 1/77, ST突入率: 28.5%, 継続率: 83%, <br>ボーダー:17.2 このボーダーは怪しい',
		yuTime: false,
	},	
	{
		id: 'salesama',
		shortName: '笑う甘',
		name: 'PA笑ゥせぇるすまん 最後の忠告',
		border: 16,
		info: '大当り確率: 1/77.74, ST突入率: 100%, 継続率: 62.3%, <br>ボーダー:16',
		yuTime: false,
	},	
	{
		id: 'norimono99',
		shortName: 'PA乗物娘',
		name: 'PA乗物娘',
		border: 18.2,
		info: '大当り確率: 1/77.10, ST突入率: 100%, 継続率: 約53.2%, <br>ボーダー:18.2',
		yuTime: false,
	},	
	{
		id: 'hanamankai99',
		shortName: 'P花満開99',
		name: 'P花満開 月光 THE FINAL GCA(甘デジ)',
		border: 18.1,
		info: '大当り確率: 1/99.90, ST突入率: 約71%, 継続率: 約71%, <br>ボーダー:18.1',
		yuTime: false,
	},
	{
		id: 'eurekaama',
		shortName: 'PAエウレカ甘',
		name: 'デジハネPA交響詩篇エウレカセブン HIｰEVOLUTION ZERO',
		border: 17.1,
		info: '大当り確率: 1/99.9',
		yuTime: true,
	},
	{
		id: 'koumonnama',
		shortName: 'P黄門ちゃま甘',
		name: 'P真・黄門ちゃま 甘デジ',
		border: 18.0,
		info: '大当り確率: 1/99.9→1/59.5, 時短50回, ST100回',
		yuTime: true,
	},
	{
		id: 'akb',
		shortName: 'P AKB甘',
		name: 'ぱちんこ AKB48 桜 LIGHT ver.',
		border: 17.0,
		info: '大当り確率: 1/99.9, ST突入率: 50%, ST継続率: 93%',
		yuTime: true,
	},
	{
		id: 'huyusonaama',
		shortName: 'P 冬ソナ甘',
		name: 'Pぱちんこ 冬のソナタ Remember Sweet Version',
		border: 21.2,
		info: '大当り確率: 1/99.9, ST突入率: 58%, ST継続率: 60%, <br>STにもれたら時短30回',
		yuTime: false,
	},
	{
		id: 'goonlight',
		shortName: 'Pライダー甘',
		name: 'ぱちんこ仮面ライダー GO-ON LIGHT',
		border: 15.4,
		info: '大当り確率: 1/99.9',
		yuTime: true,
	},
	{
		id: 'momokyunlight',
		shortName: 'Pモモキュン甘',
		name: 'PモモキュンソードGC250A',
		border: 16.5,
		info: '大当り確率: 1/89.9, 戦RUSH突入率: 45%',
		yuTime: true,
	},
	{
		id: 'otome6ama',
		shortName: 'P乙女6甘',
		name: 'P戦国乙女6 暁の関ヶ原 甘デジ',
		border: 17.9,
		info: '大当り確率: 1/99.9, 戦RUSH突入率: 44.5%',
		yuTime: true,
	},
	{
		id: 'genidatenlight',
		shortName: 'P源さんLIGHT',
		name: 'P大工の源さん超韋駄天LIGHT',
		border: 20.0,
		info: '大当り確率: 1/129.51, 超源RUSH突入率: 50.1%',
		yuTime: false,
	},
	{
		id: 'umi-ama',
		shortName: '甘海',
		name: '海系 - 甘デジ',
		border: 20.0,
		info: 'メモを書き込んでください',
		yuTime: false,
	},
	{
		id: 'else-ama',
		shortName: '甘他',
		name: '他 - 甘デジ',
		border: 20.0,
		info: 'メモを書き込んでください',
		yuTime: false,
	},
];
