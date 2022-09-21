// ミドル
const MIDDLE_GAMES = [		
	{
		id: 'pokinawa5',
		shortName: '沖海5',
		name: 'Pスーパー海物語 IN 沖縄5',
		border: 17.9,
		info: '大当り確率: 1/319.6, ST突入率: 60%, <br>ボーダー:17.9',
		yuTime: false,
	},	
	{
		id: 'oumi4sp',
		shortName: '大海4SP',
		name: 'P大海物語4スペシャル',
		border: 18.5,
		info: '大当り確率: 1/319.69, ST突入率: 52%, <br>ボーダー:18.5',
		yuTime: false,
	},		
	{
		id: 'shinikki',
		shortName: '一騎当千',
		name: 'P真・一騎当千',
		border: 17.0,
		info: '大当り確率: 1/319.7, ST突入率: 73.2%, ST継続率: 約80.0%<br>',
		yuTime: false,
	},	
	{
		id: 'karakuri',
		shortName: 'からくり',
		name: 'Pフィーバーからくりサーカス',
		border: 17.0,
		info: '大当り確率: 1/319.0, ST突入率: 75%, ST継続率: 60%,上位ST継続率: 81%',
		yuTime: false,
	},	
	{
		id: 'yaseinooukoku289',
		shortName: '野生の王国',
		name: 'P野生の王国5 M-T YT800',
		border: 19.0,
		info: '大当り確率: 1/289.98, 確変突入率: 70%',
		yuTime: false,
	},	
	{
		id: 'bakabon',
		shortName: 'バカボン',
		name: 'P神・天才バカボン～神SPEC～',
		border: 17.1,
		info: '大当り確率: 1/319.7, ST突入率: 75%, ST継続率: 約64.6%<br>上位ラッシュ継続率: 81.2%',
		yuTime: false,
	},
	{
		id: 'eva15',
		shortName: 'エヴァ15',
		name: '新世紀エヴァンゲリオン～未来への咆哮～',
		border: 17.5,
		info: '大当り確率: 1/319.7, ST突入率: 70%, ST継続率: 約81%',
		yuTime: false,
	},		
	{
		id: 'umichosenpu319',
		shortName: '海超旋風319',
		name: 'Pスーパー海物語 IN 沖縄5 夜桜超旋風',
		border: 19.9,
		info: '大当り確率: 1/319.68, ST突入率: 100%, ST継続率: 約90%',
		yuTime: false,
	},	
	{
		id: 'baki319',
		shortName: 'バキ319',
		name: 'Pバキ 319ver',
		border: 17.9,
		info: '大当り確率: 1/319.6, ST突入率: 51.2%, ST継続率: 約85%<br>',
		yuTime: false,
	},	
	{
		id: 'initialD',
		shortName: 'イニD',
		name: 'P頭文字D',
		border: 19.4,
		info: '大当り確率: 1/256.0, ST突入率: 50%, ST継続率: 約93%<br>',
		yuTime: false,
	},	
	{
		id: 'rezero',
		shortName: 'Re:ゼロ',
		name: 'Ｐ Re:ゼロから始める異世界生活 鬼がかりver．',
		border: 16.7,
		info: '大当り確率: 1/319.6, RUSH突入率: 55%<br>RUSH継続率: 77%',
		yuTime: false,
	},		
	{
		id: 'devilman',
		shortName: 'デビルマン',
		name: 'Pデビルマン～疾風迅雷～',
		border: 19.0,
		info: '大当り確率: 1/319.69, ST突入率: 60%, 継続率: 93.2%, <br>ボーダー:19.0',
		yuTime: false,
	},
	{
		id: 'genidaten',
		shortName: 'P源さん318',
		name: 'P大工の源さん超韋駄天',
		border: 20.0,
		info: '大当り確率: 1/318.13, 超源RUSH突入率: 60.2%',
		yuTime: false,
	},
	{
		id: 'toaru',
		shortName: 'Pとある',
		name: 'Pとある魔術の禁書目録',
		border: 17.4,
		info: '大当り確率: 1/319.68, ST突入率: 100%, 最大ST継続率: 79%',
		yuTime: true,
	},		
	{
		id: 'kyozin',
		shortName: 'P巨人の星',
		name: 'P巨人の星 一球入魂3000',
		border: 18.5,
		info: '大当り確率: 1/319.68, ST突入率: 55%, 最大ST継続率: 77%',
		yuTime: true,
	},		
	{
		id: 'jaws3',
		shortName: 'P JAWS3',
		name: 'P JAWS3 SHARK PANIC～深淵～',
		border: 17.9,
		info: '大当り確率: 1/319.6, ST突入率: 51%, ST継続率: 80%',
		yuTime: true,
	},
	{
		id: 'tarou2',
		shortName: 'P タロウ2',
		name: 'ぱちんこ ウルトラマンタロウ2',
		border: 18.7,
		info: '大当り確率: 1/319.9, ST突入率: 50%, ST継続率: 81%',
		yuTime: true,
	},
	{
		id: 'garogekkou',
		shortName: 'P 牙狼月虹',
		name: 'P牙狼月虹ノ旅人',
		border: 18.1,
		info: '大当り確率: 1/319.68, ST突入率: 50%, ST継続率: 81%',
		yuTime: true,
	},
	{
		id: 'hokuto8',
		shortName: 'P北斗8',
		name: 'P北斗の拳8 救世主',
		border: 17.7,
		info: '大当り確率: 1/319.7, ST突入率: 50.2%, ST継続率: 84%',
		yuTime: true,
	},
	{
		id: 'hokutomuso3',
		shortName: '北斗無双3',
		name: 'P真・北斗無双 第3章',
		border: 18.9,
		info: '大当り確率: 1/319.7, ST突入率: 56.9%, ST継続率: 90%',
		yuTime: true,
	},
	{
		id: 'verselk',
		shortName: 'ベルセルク',
		name: 'Pベルセルク無双',
		border: 17.7,
		info: '大当り確率: 1/319.7, ST突入率: 75%, ST継続率: 75%',
		yuTime: false,
	},
];