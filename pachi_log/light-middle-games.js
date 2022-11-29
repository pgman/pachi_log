// ライトミドル
const LIGHT_MIDDLE_GAMES = [
	{
		id: 'kuroumi199',
		shortName: '黒海199',
		name: 'P大海物語4スペシャル BLACK',
		border: 17.6,
		info: '大当り確率: 1/199.8, ST突入率: 100%, ST継続率: 72%',
		yuTime: false,
		link: '',
	},
	{
		id: 'kinfuji199',
		shortName: '金富士199',
		name: 'Pスーパー海物語 IN JAPAN2 金富士 はんなり199バージョン',
		border: 18.1,
		info: '大当り確率: 1/199.8, ST突入率: 100%, ST継続率: 75%',
		yuTime: false,
		link: 'https://mattunn.jp/umimonogatari-japan2-kinnhuzi-199-kugi-tome/',
	},
	{
		id: 'psakura199',
		shortName: 'P桜199',
		name: 'Pスーパー海物語IN沖縄5 桜ver.（199ver.）',
		border: 17.8,
		info: '大当り確率: 1/199.8, ST突入率: 100%, ST継続率: 約75.1%',
		yuTime: false,
	},	
	{
		id: 'shinfogia3',
		shortName: 'シンフォ3',
		name: 'Pフィーバー戦姫絶唱シンフォギア3黄金絶唱',
		border: 16.8,
		info: '大当り確率: 1/199.8, ST突入率: 63%, ST継続率: 82%',
		yuTime: false,
	},		
	{
		id: 'koumonkamimori2',
		shortName: '黄門神盛2',
		name: 'P黄門ちゃま 神盛2',
		border: 18.0,
		info: '大当り確率: 1/199.8, ST突入率: 58%, ST継続率: 72%',
		yuTime: false,
	},	
	{
		id: 'darumash2',
		shortName: 'ダルマッシュ2',
		name: 'Pだるまっしゅ2',
		border: 19.4,
		info: '大当り確率: 1/225.98, 合算ST突入率: 45.9%, ST継続率: 約91%',
		yuTime: false,
	},	
	{
		id: 'piramiden',
		shortName: 'ピラミッ伝',
		name: 'P一球魂GOLDピラミッ伝',
		border: 18.3,
		info: '大当り確率: 1/179.5, ST突入率: 50.5%, ST継続率: 約75.2%',
		yuTime: false,
	},	
	{
		id: 'yamato199',
		shortName: 'ヤマト199',
		name: 'P宇宙戦艦ヤマト2202 -ONLY ONE-',
		border: 17.2,
		info: '大当り確率: 1/199.8, ST突入率: 60%, ST継続率: 約93%<br>金ヤマトRUSH継続率: 78%',
		yuTime: false,
	},	
	{
		id: 'baki199',
		shortName: 'バキ199',
		name: 'Pバキ 199ver',
		border: 17.7,
		info: '大当り確率: 1/199.8, ST突入率: 50.6%, ST継続率: 約90%<br>',
		yuTime: false,
	},	
	{
		id: '009199',
		shortName: '009199',
		name: 'P009 RE: CYBORG ACCELERATOR EDITION',
		border: 18.8,
		info: '大当り確率: 1/199.8, ST突入率: 41%, ST回数100回<br>',
		yuTime: false,
	},	
	{
		id: 'jagi199',
		shortName: 'ジャギ199',
		name: 'P真・北斗無双 第3章 ジャギの逆襲',
		border: 17.5,
		info: '大当り確率: 1/199.8, RUSH突入率: 1/2.86<br>RUSH継続率: 81%',
		yuTime: false,
	},	
	{
		id: 'shikkoku199',
		shortName: '慶次漆黒199',
		name: 'P真・花の慶次2 漆黒の衝撃 EXTRA RUSH',
		border: 15.7,
		info: '大当り確率: 1/199.8, RUSH突入率: 37%<br>RUSH継続率: 81%',
		yuTime: false,
	},	
	{
		id: 'strikewitches2',
		shortName: 'パンツ源',
		name: 'Pストライクウィッチーズ2',
		border: 19.4,
		info: '大当り確率: 1/229.1, ST突入率: 58%, 継続率: 90%, <br>ボーダー:19.4',
		yuTime: false,
	},	
	{
		id: 'sympho2',
		shortName: 'シンフォ2',
		name: 'Pフィーバー戦姫絶唱シンフォギア2',
		border: 18.4,
		info: '大当り確率: 1/199.8, ST突入率: 51%, ST継続率: 82%',
		yuTime: true,
	},
	{
		id: 'ginpara199',
		shortName: 'Pギンパラ199',
		name: 'Pギンギラパラダイス 夢幻カーニバル 199ver.',
		border: 19.3,
		info: '大当り確率: 1/199.8, Rush突入率: 50%, Rush継続率: 80%',
		yuTime: true,
	},
	{
		id: 'aria',
		shortName: 'Pアリア',
		name: 'P緋弾のアリア 緋弾覚醒編',
		border: 19.2,
		info: '大当り確率: 1/199.1, 強襲任務突入率: 50%',
		yuTime: true,
	},
	{
		id: 'garupan',
		shortName: 'Pガルパン',
		name: 'Pガールズ&パンツァー 劇場版',
		border: 17.6,
		info: '大当り確率: 1/199.8, 戦車道突入率: 54%',
		yuTime: true,
	},
	{
		id: 'otome6',
		shortName: 'P乙女6',
		name: 'P戦国乙女6 暁の関ヶ原',
		border: 18.0,
		info: '大当り確率: 1/222.9, 戦RUSH突入率: 50%',
		yuTime: true,
	},
	{
		id: 'patrushgreen',
		shortName: 'PパトラッシュV GREEN',
		name: 'PパトラッシュV GREEN',
		border: 18.9,
		info: '大当り確率: 1/199.8, RUSH突入率: 55%, RUSH継続率: 91%',
		yuTime: true,
	},
	{
		id: 'vivid',
		shortName: 'Pビビッド',
		name: 'Pビビッドレッドオペレーション',
		border: 17.7,
		info: '大当り確率: 1/219.91, ST直突入率: 50%, <br>時短中の当たり確率: 36%, ST継続率: 75%',
		yuTime: true,
	},
	{
		id: 'soutentenkoku',
		shortName: 'P蒼天',
		name: 'P蒼天の拳 天刻',
		border: 17.1,
		info: '大当り確率: 1/199.8, ST突入率: 54%, ST継続率: 83%',
		yuTime: true,
	},	
	{
		id: 'umi-light-middle',
		shortName: '海ライトミドル',
		name: '海系 - ライトミドル',
		border: 20.0,
		info: 'メモを書き込んでください',
		yuTime: false,
	},
	{
		id: 'else-light-middle',
		shortName: '他ライトミドル',
		name: '他 - ライトミドル',
		border: 20.0,
		info: 'メモを書き込んでください',
		yuTime: false,
	},
];
