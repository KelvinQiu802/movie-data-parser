const info = [
  {
    电影详情链接: 'https://movie.douban.com/subject/1292052/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
    影片中文名: '肖申克的救赎',
    影片外国名: '  The Shawshank Redemption',
    评分: '9.7',
    评分数: '2830442',
    概况: '希望让人自由',
    相关信息:
      '导演:弗兰克·德拉邦特FrankDarabont主演:蒂姆·罗宾斯TimRobbins...1994美国犯罪剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291546/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561716440.jpg',
    影片中文名: '霸王别姬',
    影片外国名: ' ',
    评分: '9.6',
    评分数: '2097652',
    概况: '风华绝代',
    相关信息:
      '导演:陈凯歌KaigeChen主演:张国荣LeslieCheung张丰毅FengyiZha...1993中国大陆中国香港剧情爱情同性',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292720/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2372307693.jpg',
    影片中文名: '阿甘正传',
    影片外国名: '  Forrest Gump',
    评分: '9.5',
    评分数: '2119325',
    概况: '一部美国近现代史',
    相关信息:
      '导演:罗伯特·泽米吉斯RobertZemeckis主演:汤姆·汉克斯TomHanks...1994美国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292722/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2889314814.jpg',
    影片中文名: '泰坦尼克号',
    影片外国名: '  Titanic',
    评分: '9.5',
    评分数: '2135656',
    概况: '失去的才是永恒的 ',
    相关信息:
      '导演:詹姆斯·卡梅隆JamesCameron主演:莱昂纳多·迪卡普里奥Leonardo...1997美国墨西哥剧情爱情灾难',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295644/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg',
    影片中文名: '这个杀手不太冷',
    影片外国名: '  Léon',
    评分: '9.4',
    评分数: '2253256',
    概况: '怪蜀黍和小萝莉不得不说的故事',
    相关信息:
      '导演:吕克·贝松LucBesson主演:让·雷诺JeanReno娜塔莉·波特曼...1994法国美国剧情动作犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292063/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2578474613.jpg',
    影片中文名: '美丽人生',
    影片外国名: '  La vita è bella',
    评分: '9.6',
    评分数: '1302657',
    概况: '最美的谎言',
    相关信息:
      '导演:罗伯托·贝尼尼RobertoBenigni主演:罗伯托·贝尼尼RobertoBeni...1997意大利剧情喜剧爱情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291561/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2557573348.jpg',
    影片中文名: '千与千寻',
    影片外国名: '  千と千尋の神隠し',
    评分: '9.4',
    评分数: '2196237',
    概况: '最好的宫崎骏，最好的久石让 ',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:柊瑠美RumiHîragi入野自由Miy...2001日本剧情动画奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295124/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p492406163.jpg',
    影片中文名: '辛德勒的名单',
    影片外国名: "  Schindler's List",
    评分: '9.6',
    评分数: '1085035',
    概况: '拯救一个人，就是拯救整个世界',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:连姆·尼森LiamNeeson...1993美国剧情历史战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1889243/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614988097.jpg',
    影片中文名: '星际穿越',
    影片外国名: '  Interstellar',
    评分: '9.4',
    评分数: '1789684',
    概况: '爱是一种力量，让我们超越时空感知它的存在',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:马修·麦康纳MatthewMc...2014美国英国加拿大剧情科幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3541415/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p513344864.jpg',
    影片中文名: '盗梦空间',
    影片外国名: '  Inception',
    评分: '9.4',
    评分数: '2024102',
    概况: '诺兰给了我们一场无法盗取的梦',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:莱昂纳多·迪卡普里奥Le...2010美国英国剧情科幻悬疑冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292064/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p479682972.jpg',
    影片中文名: '楚门的世界',
    影片外国名: '  The Truman Show',
    评分: '9.4',
    评分数: '1661727',
    概况: '如果再也不能见到你，祝你早安，午安，晚安',
    相关信息:
      '导演:彼得·威尔PeterWeir主演:金·凯瑞JimCarrey劳拉·琳妮Lau...1998美国剧情科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3011091/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2587099240.jpg',
    影片中文名: '忠犬八公的故事',
    影片外国名: "  Hachi: A Dog's Tale",
    评分: '9.4',
    评分数: '1375906',
    概况: '永远都不能忘记你所爱的人',
    相关信息:
      '导演:莱塞·霍尔斯道姆LasseHallström主演:理查·基尔RichardGer...2009美国英国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292001/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2574551676.jpg',
    影片中文名: '海上钢琴师',
    影片外国名: "  La leggenda del pianista sull'oceano",
    评分: '9.3',
    评分数: '1648593',
    概况: '每个人都要走一条自己坚定了的路，就算是粉身碎骨 ',
    相关信息:
      '导演:朱塞佩·托纳多雷GiuseppeTornatore主演:蒂姆·罗斯TimRoth...1998意大利剧情音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3793023/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p579729551.jpg',
    影片中文名: '三傻大闹宝莱坞',
    影片外国名: '  3 Idiots',
    评分: '9.2',
    评分数: '1827162',
    概况: '英俊版憨豆，高情商版谢耳朵',
    相关信息:
      '导演:拉库马·希拉尼RajkumarHirani主演:阿米尔·汗AamirKhan卡...2009印度剧情喜剧爱情歌舞',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291549/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884280708.jpg',
    影片中文名: '放牛班的春天',
    影片外国名: '  Les choristes',
    评分: '9.3',
    评分数: '1288014',
    概况: '天籁一般的童声，是最接近上帝的存在 ',
    相关信息:
      '导演:克里斯托夫·巴拉蒂ChristopheBarratier主演:让-巴蒂斯特·莫尼...2004法国瑞士德国剧情音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2131459/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1461851991.jpg',
    影片中文名: '机器人总动员',
    影片外国名: '  WALL·E',
    评分: '9.3',
    评分数: '1293234',
    概况: '小瓦力，大人生',
    相关信息:
      '导演:安德鲁·斯坦顿AndrewStanton主演:本·贝尔特BenBurtt艾丽...2008美国科幻动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307914/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2564556863.jpg',
    影片中文名: '无间道',
    影片外国名: '  無間道',
    评分: '9.3',
    评分数: '1333785',
    概况: '香港电影史上永不过时的杰作',
    相关信息:
      '导演:刘伟强麦兆辉主演:刘德华AndyLau梁朝伟TonyLeungChiuW...2002中国香港剧情犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25662329/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2614500649.jpg',
    影片中文名: '疯狂动物城',
    影片外国名: '  Zootopia',
    评分: '9.2',
    评分数: '1887254',
    概况: '迪士尼给我们营造的乌托邦就是这样，永远善良勇敢，永远出乎意料',
    相关信息:
      '导演:拜伦·霍华德ByronHoward瑞奇·摩尔RichMoore主演:金妮弗·...2016美国喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1296141/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1505392928.jpg',
    影片中文名: '控方证人',
    影片外国名: '  Witness for the Prosecution',
    评分: '9.6',
    评分数: '537218',
    概况: '比利·怀德满分作品',
    相关信息:
      '导演:比利·怀尔德BillyWilder主演:泰隆·鲍华TyronePower玛琳·...1957美国剧情犯罪悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292213/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2455050536.jpg',
    影片中文名: '大话西游之大圣娶亲',
    影片外国名: '  西遊記大結局之仙履奇緣',
    评分: '9.2',
    评分数: '1505189',
    概况: '一生所爱',
    相关信息:
      '导演:刘镇伟JeffreyLau主演:周星驰StephenChow吴孟达ManTatNg...1995中国香港中国大陆喜剧爱情奇幻古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/5912992/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1363250216.jpg',
    影片中文名: '熔炉',
    影片外国名: '  도가니',
    评分: '9.4',
    评分数: '915923',
    概况: '我们一路奋战不是为了改变世界，而是为了不让世界改变我们',
    相关信息:
      '导演:黄东赫Dong-hyukHwang主演:孔侑YooGong郑有美Yu-miJung...2011韩国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291841/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p616779645.jpg',
    影片中文名: '教父',
    影片外国名: '  The Godfather',
    评分: '9.3',
    评分数: '946624',
    概况: '千万不要记恨你的对手，这样会让你失去理智',
    相关信息:
      '导演:弗朗西斯·福特·科波拉FrancisFordCoppola主演:马龙·白兰度M...1972美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1849031/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614359276.jpg',
    影片中文名: '当幸福来敲门',
    影片外国名: '  The Pursuit of Happyness',
    评分: '9.2',
    评分数: '1492935',
    概况: '平民励志片 ',
    相关信息:
      '导演:加布里尔·穆奇诺GabrieleMuccino主演:威尔·史密斯WillSmith...2006美国剧情传记家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/6786002/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1454261925.jpg',
    影片中文名: '触不可及',
    影片外国名: '  Intouchables',
    评分: '9.3',
    评分数: '1088336',
    概况: '满满温情的高雅喜剧',
    相关信息:
      '导演:奥利维·那卡什OlivierNakache艾力克·托兰达EricToledano主...2011法国剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3319755/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p501177648.jpg',
    影片中文名: '怦然心动',
    影片外国名: '  Flipped',
    评分: '9.1',
    评分数: '1799291',
    概况: '真正的幸福是来自内心深处',
    相关信息:
      '导演:罗伯·莱纳RobReiner主演:玛德琳·卡罗尔MadelineCarroll卡...2010美国剧情喜剧爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291560/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2540924496.jpg',
    影片中文名: '龙猫',
    影片外国名: '  となりのトトロ',
    评分: '9.2',
    评分数: '1241223',
    概况: '人人心中都有个龙猫，童年就永远不会消失',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:日高法子NorikoHidaka坂本千夏Ch...1988日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293172/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p452089833.jpg',
    影片中文名: '末代皇帝',
    影片外国名: '  The Last Emperor',
    评分: '9.3',
    评分数: '860294',
    概况: '“不要跟我比惨，我比你更惨”再适合这部电影不过了',
    相关信息:
      '导演:贝纳尔多·贝托鲁奇BernardoBertolucci主演:尊龙JohnLone陈...1987英国意大利中国大陆法国剧情传记历史',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/20495023/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614500706.jpg',
    影片中文名: '寻梦环游记',
    影片外国名: '  Coco',
    评分: '9.1',
    评分数: '1636675',
    概况: '死亡不是真的逝去，遗忘才是永恒的消亡',
    相关信息:
      '导演:李·昂克里奇LeeUnkrich阿德里安·莫利纳AdrianMolina主演:...2017美国喜剧动画奇幻音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292365/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2597919477.jpg',
    影片中文名: '活着',
    影片外国名: ' ',
    评分: '9.3',
    评分数: '825781',
    概况: '张艺谋最好的电影',
    相关信息:
      '导演:张艺谋YimouZhang主演:葛优YouGe巩俐LiGong姜武WuJiang1994中国大陆中国香港剧情历史家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1851857/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p462657443.jpg',
    影片中文名: '蝙蝠侠：黑暗骑士',
    影片外国名: '  The Dark Knight',
    评分: '9.2',
    评分数: '1035945',
    概况: '无尽的黑暗',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:克里斯蒂安·贝尔Christ...2008美国英国剧情动作科幻犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295038/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2614949805.jpg',
    影片中文名: '哈利·波特与魔法石',
    影片外国名: "  Harry Potter and the Sorcerer's Stone",
    评分: '9.2',
    评分数: '1160267',
    概况: '童话世界的开端',
    相关信息:
      '导演:ChrisColumbus主演:DanielRadcliffeEmmaWatsonRupertGrint2001美国英国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291552/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2642829472.jpg',
    影片中文名: '指环王3：王者无敌',
    影片外国名: '  The Lord of the Rings: The Return of the King',
    评分: '9.3',
    评分数: '787287',
    概况: '史诗的终章',
    相关信息:
      '导演:彼得·杰克逊PeterJackson主演:伊利亚·伍德ElijahWood西恩...2003美国新西兰剧情动作奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1300267/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1963126880.jpg',
    影片中文名: '乱世佳人',
    影片外国名: '  Gone with the Wind',
    评分: '9.3',
    评分数: '677205',
    概况: 'Tomorrow is another day.',
    相关信息:
      '导演:维克多·弗莱明VictorFleming乔治·库克GeorgeCukor主演:费...1939美国剧情历史爱情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26752088/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2561305376.jpg',
    影片中文名: '我不是药神',
    影片外国名: ' ',
    评分: '9.0',
    评分数: '2059136',
    概况: '对我们国家而言，这样的电影多一部是一部',
    相关信息:
      '导演:文牧野MuyeWen主演:徐峥ZhengXu王传君ChuanjunWang周...2018中国大陆剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/21937452/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2118532944.jpg',
    影片中文名: '素媛',
    影片外国名: '  소원',
    评分: '9.3',
    评分数: '673274',
    概况: '受过伤害的人总是笑得最开心，因为他们不愿意让身边的人承受一样的痛苦',
    相关信息:
      '导演:李濬益Jun-ikLee主演:薛景求Kyung-guSol严志媛Ji-wonUhm...2013韩国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2129039/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2363116942.jpg',
    影片中文名: '飞屋环游记',
    影片外国名: '  Up',
    评分: '9.1',
    评分数: '1299255',
    概况: '最后那些最无聊的事情，才是最值得怀念的 ',
    相关信息:
      '导演:彼特·道格特PeteDocter鲍勃·彼德森BobPeterson主演:爱德...2009美国剧情喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293182/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2173577632.jpg',
    影片中文名: '十二怒汉',
    影片外国名: '  12 Angry Men',
    评分: '9.4',
    评分数: '478585',
    概况: '1957年的理想主义 ',
    相关信息:
      '导演:SidneyLumet主演:亨利·方达HenryFonda马丁·鲍尔萨姆Marti...1957美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/30170448/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2555295759.jpg',
    影片中文名: '何以为家',
    影片外国名: '  كفرناحوم',
    评分: '9.1',
    评分数: '1024812',
    概况: '凝视卑弱生命，用电影改变命运',
    相关信息:
      '导演:娜丁·拉巴基NadineLabaki主演:扎因·拉费阿Zainal-Rafeea...2018黎巴嫩美国法国塞浦路斯卡塔尔英国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1308807/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2174346180.jpg',
    影片中文名: '哈尔的移动城堡',
    影片外国名: '  ハウルの動く城',
    评分: '9.1',
    评分数: '1000146',
    概况: '带着心爱的人在天空飞翔',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:倍赏千惠子ChiekoBaishô木村拓...2004日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26387939/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2401676338.jpg',
    影片中文名: '摔跤吧！爸爸',
    影片外国名: '  Dangal',
    评分: '9.0',
    评分数: '1541966',
    概况: '你不是在为你一个人战斗，你要让千千万万的女性看到女生并不是只能相夫教子',
    相关信息:
      '导演:涅提·蒂瓦里NiteshTiwari主演:阿米尔·汗AamirKhan法缇玛...2016印度剧情传记运动家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291858/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2553104888.jpg',
    影片中文名: '鬼子来了',
    影片外国名: ' ',
    评分: '9.3',
    评分数: '614222',
    概况: '对敌人的仁慈，就是对自己残忍',
    相关信息:
      '导演:姜文WenJiang主演:姜文WenJiang香川照之TeruyukiKagawa...2000中国大陆剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3742360/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1512562287.jpg',
    影片中文名: '让子弹飞',
    影片外国名: ' ',
    评分: '9.0',
    评分数: '1665785',
    概况: '你给我翻译翻译，神马叫做TMD的惊喜',
    相关信息:
      '导演:姜文WenJiang主演:姜文WenJiang葛优YouGe周润发Yun-F...2010中国大陆中国香港剧情喜剧动作西部',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1929463/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1784592701.jpg',
    影片中文名: '少年派的奇幻漂流',
    影片外国名: '  Life of Pi',
    评分: '9.1',
    评分数: '1328063',
    概况: '瑰丽壮观、无人能及的冒险之旅',
    相关信息:
      '导演:李安AngLee主演:苏拉·沙玛SurajSharma伊尔凡·可汗Irrfan...2012美国中国台湾英国加拿大剧情奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1305487/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p453924541.jpg',
    影片中文名: '猫鼠游戏',
    影片外国名: '  Catch Me If You Can',
    评分: '9.1',
    评分数: '997406',
    概况: '骗子大师和执著警探的你追我跑故事 ',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:莱昂纳多·迪卡普里奥L...2002美国加拿大传记犯罪剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25958717/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2554525534.jpg',
    影片中文名: '海蒂和爷爷',
    影片外国名: '  Heidi',
    评分: '9.3',
    评分数: '588867',
    概况: '如果生活中有什么使你感到快乐，那就去做吧！不要管别人说什么',
    相关信息:
      '导演:阿兰·葛斯彭纳AlainGsponer主演:阿努克·斯特芬AnukSteffen...2015德国瑞士剧情冒险家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1296736/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1381339291.jpg',
    影片中文名: '钢琴家',
    影片外国名: '  The Pianist',
    评分: '9.3',
    评分数: '621225',
    概况: '音乐能化解仇恨',
    相关信息:
      '导演:罗曼·波兰斯基RomanPolanski主演:艾德里安·布洛迪AdrienBrod...2002英国法国波兰德国剧情传记战争音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1299398/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2561721372.jpg',
    影片中文名: '大话西游之月光宝盒',
    影片外国名: '  西遊記第壹佰零壹回之月光寶盒',
    评分: '9.0',
    评分数: '1198768',
    概况: '旷古烁今',
    相关信息:
      '导演:刘镇伟JeffreyLau主演:周星驰StephenChow吴孟达ManTatNg...1995中国香港中国大陆喜剧爱情奇幻古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291583/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2890142218.jpg',
    影片中文名: '天空之城',
    影片外国名: '  天空の城ラピュタ',
    评分: '9.2',
    评分数: '804307',
    概况: '对天空的追逐，永不停止 ',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:田中真弓MayumiTanaka横泽启子Ke...1986日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291572/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2640236255.jpg',
    影片中文名: '指环王2：双塔奇兵',
    影片外国名: '  The Lord of the Rings: The Two Towers',
    评分: '9.2',
    评分数: '737506',
    概况: '承前启后的史诗篇章',
    相关信息:
      '导演:彼得·杰克逊PeterJackson主演:伊利亚·伍德ElijahWood西恩...2002美国新西兰剧情动作奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1298624/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2550757929.jpg',
    影片中文名: '闻香识女人',
    影片外国名: '  Scent of a Woman',
    评分: '9.1',
    评分数: '862915',
    概况: '史上最美的探戈',
    相关信息:
      '导演:马丁·布莱斯MartinBrest主演:阿尔·帕西诺AlPacino克里斯...1992美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291828/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2653054340.jpg',
    影片中文名: '天堂电影院',
    影片外国名: '  Nuovo Cinema Paradiso',
    评分: '9.2',
    评分数: '669359',
    概况: '那些吻戏，那些青春，都在影院的黑暗里被泪水冲刷得无比清晰',
    相关信息:
      '导演:朱塞佩·托纳多雷GiuseppeTornatore主演:菲利普·努瓦雷Philipp...1988意大利法国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293839/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2189265085.jpg',
    影片中文名: '罗马假日',
    影片外国名: '  Roman Holiday',
    评分: '9.1',
    评分数: '933220',
    概况: '爱情哪怕只有一天',
    相关信息:
      '导演:威廉·惠勒WilliamWyler主演:奥黛丽·赫本AudreyHepburn格...1953美国喜剧剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291548/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575465690.jpg',
    影片中文名: '死亡诗社',
    影片外国名: '  Dead Poets Society',
    评分: '9.2',
    评分数: '706826',
    概况: '当一个死水般的体制内出现一个活跃的变数时，所有的腐臭都站在了光明的对面',
    相关信息:
      '导演:彼得·威尔PeterWeir主演:罗宾·威廉姆斯RobinWilliams罗伯...1989美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/27060077/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2531065411.jpg',
    影片中文名: '绿皮书',
    影片外国名: '  Green Book',
    评分: '8.9',
    评分数: '1612442',
    概况: '去除成见，需要勇气',
    相关信息:
      '导演:彼得·法雷里PeterFarrelly主演:维果·莫腾森ViggoMortensen...2018美国中国大陆剧情喜剧传记音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1418019/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2184505167.jpg',
    影片中文名: '大闹天宫',
    影片外国名: ' ',
    评分: '9.4',
    评分数: '426699',
    概况: '经典之作，历久弥新',
    相关信息:
      '导演:万籁鸣LaimingWan主演:邱岳峰YuefengQiu富润生RunshengFu...1961(中国大陆)1964(中国大陆)1978(中国大陆)中国大陆剧情动画奇幻古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291571/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2197698335.jpg',
    影片中文名: '指环王1：护戒使者',
    影片外国名: '  The Lord of the Rings: The Fellowship of the Ring',
    评分: '9.1',
    评分数: '829907',
    概况: '传说的开始',
    相关信息:
      '导演:彼得·杰克逊PeterJackson主演:伊利亚·伍德ElijahWood西恩...2001新西兰美国剧情动作奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291843/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p451926968.jpg',
    影片中文名: '黑客帝国',
    影片外国名: '  The Matrix',
    评分: '9.1',
    评分数: '822259',
    概况: '视觉革命',
    相关信息:
      '导演:安迪·沃卓斯基AndyWachowski拉娜·沃卓斯基LanaWachowski主...1999美国动作科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1299131/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2194138787.jpg',
    影片中文名: '教父2',
    影片外国名: '  The Godfather: Part II',
    评分: '9.3',
    评分数: '540017',
    概况: '优雅的孤独',
    相关信息:
      '导演:弗朗西斯·福特·科波拉FrancisFordCoppola主演:阿尔·帕西诺A...1974美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1301753/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p726659067.jpg',
    影片中文名: '狮子王',
    影片外国名: '  The Lion King',
    评分: '9.1',
    评分数: '820919',
    概况: '动物版《哈姆雷特》',
    相关信息:
      '导演:RogerAllers罗伯·明可夫RobMinkoff主演:乔纳森·泰勒·托马...1994美国动画冒险歌舞',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/21937445/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2158166535.jpg',
    影片中文名: '辩护人',
    影片外国名: '  변호인',
    评分: '9.2',
    评分数: '579795',
    概况: '电影的现实意义大过电影本身',
    相关信息:
      '导演:杨宇硕Woo-seokYang主演:宋康昊Kang-hoSong金英爱Yeong-ae...2013韩国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291818/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910899751.jpg',
    影片中文名: '饮食男女',
    影片外国名: '  飲食男女',
    评分: '9.2',
    评分数: '608106',
    概况: '人生不能像做菜，把所有的料都准备好了才下锅',
    相关信息:
      '导演:李安AngLee主演:郎雄SihungLung杨贵媚Kuei-MeiYang吴...1994中国台湾美国剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292000/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910931622.jpg',
    影片中文名: '搏击俱乐部',
    影片外国名: '  Fight Club',
    评分: '9.0',
    评分数: '830783',
    概况: '邪恶与平庸蛰伏于同一个母体，在特定的时间互相对峙',
    相关信息:
      '导演:大卫·芬奇DavidFincher主演:爱德华·诺顿EdwardNorton布拉...1999美国德国意大利剧情动作悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1306029/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1665997400.jpg',
    影片中文名: '美丽心灵',
    影片外国名: '  A Beautiful Mind',
    评分: '9.1',
    评分数: '755051',
    概况: '爱是一切逻辑和原由',
    相关信息:
      '导演:朗·霍华德RonHoward主演:罗素·克劳RussellCrowe艾德·哈...2001美国传记剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1485260/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2192535722.jpg',
    影片中文名: '本杰明·巴顿奇事',
    影片外国名: '  The Curious Case of Benjamin Button',
    评分: '9.0',
    评分数: '965039',
    概况: '在时间之河里感受溺水之苦',
    相关信息:
      '导演:大卫·芬奇DavidFincher主演:凯特·布兰切特CateBlanchett...2008美国剧情爱情奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3008247/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1473670352.jpg',
    影片中文名: '穿条纹睡衣的男孩',
    影片外国名: '  The Boy in the Striped Pajamas',
    评分: '9.2',
    评分数: '551295',
    概况: '尽管有些不切实际的幻想，这部电影依旧是一部感人肺腑的佳作',
    相关信息:
      '导演:马克·赫尔曼MarkHerman主演:阿萨·巴特菲尔德AsaButterfield...2008英国美国剧情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1900841/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1808872109.jpg',
    影片中文名: '窃听风暴',
    影片外国名: '  Das Leben der Anderen',
    评分: '9.2',
    评分数: '554273',
    概况: '别样人生',
    相关信息:
      '导演:弗洛里安·亨克尔·冯·多纳斯马尔克FlorianHenckelvonDonnersmarck&n...2006德国剧情悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292220/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2648230660.jpg',
    影片中文名: '情书',
    影片外国名: '  Love Letter',
    评分: '8.9',
    评分数: '1088276',
    概况: '暗恋的极致',
    相关信息:
      '导演:岩井俊二ShunjiIwai主演:中山美穗MihoNakayama丰川悦司Ets...1995日本剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293350/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792443418.jpg',
    影片中文名: '两杆大烟枪',
    影片外国名: '  Lock, Stock and Two Smoking Barrels',
    评分: '9.1',
    评分数: '585186',
    概况: '4个臭皮匠顶个诸葛亮，盖·里奇果然不是盖的',
    相关信息:
      '导演:GuyRitchie主演:JasonFlemyngDexterFletcherNickMoran1998英国剧情喜剧犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292402/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2441988159.jpg',
    影片中文名: '西西里的美丽传说',
    影片外国名: '  Malèna',
    评分: '8.9',
    评分数: '956809',
    概况: '美丽无罪',
    相关信息:
      '导演:朱塞佩·托纳多雷GiuseppeTornatore主演:莫妮卡·贝鲁奇Monica...2000意大利美国剧情战争情色',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1294408/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p453788577.jpg',
    影片中文名: '音乐之声',
    影片外国名: '  The Sound of Music',
    评分: '9.1',
    评分数: '589839',
    概况: '用音乐化解仇恨，让歌声串起美好',
    相关信息:
      '导演:罗伯特·怀斯RobertWise主演:朱莉·安德鲁斯JulieAndrews克...1965美国剧情传记爱情歌舞',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26580232/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2498971355.jpg',
    影片中文名: '看不见的客人',
    影片外国名: '  Contratiempo',
    评分: '8.8',
    评分数: '1231904',
    概况: '你以为你以为的就是你以为的',
    相关信息:
      '导演:奥里奥尔·保罗OriolPaulo主演:马里奥·卡萨斯MarioCasas阿...2016西班牙剧情犯罪悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1652587/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2180085848.jpg',
    影片中文名: '阿凡达',
    影片外国名: '  Avatar',
    评分: '8.8',
    评分数: '1395846',
    概况: '绝对意义上的美轮美奂',
    相关信息:
      '导演:詹姆斯·卡梅隆JamesCameron主演:萨姆·沃辛顿SamWorthington...2009美国动作科幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292849/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1014542496.jpg',
    影片中文名: '拯救大兵瑞恩',
    影片外国名: '  Saving Private Ryan',
    评分: '9.1',
    评分数: '635022',
    概况: '美利坚精神输出大片No1.',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:汤姆·汉克斯TomHanks...1998美国剧情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292224/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792238287.jpg',
    影片中文名: '飞越疯人院',
    影片外国名: "  One Flew Over the Cuckoo's Nest",
    评分: '9.1',
    评分数: '537519',
    概况: '自由万岁',
    相关信息:
      '导演:米洛斯·福尔曼MilošForman主演:杰克·尼科尔森JackNichols...1975美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1303021/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2165511465.jpg',
    影片中文名: '小鞋子',
    影片外国名: '  بچه های آسمان',
    评分: '9.2',
    评分数: '403170',
    概况: '奔跑的孩子是天使',
    相关信息:
      '导演:马基德·马基迪MajidMajidi主演:默罕默德·阿米尔·纳吉Mohamma...1997伊朗剧情儿童家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3011235/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p917846733.jpg',
    影片中文名: '哈利·波特与死亡圣器(下)',
    影片外国名: '  Harry Potter and the Deathly Hallows: Part 2',
    评分: '9.0',
    评分数: '812448',
    概况: '10年的完美句点',
    相关信息:
      '导演:大卫·叶茨DavidYates主演:丹尼尔·雷德克里夫DanielRadcliffe...2011美国英国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293544/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1593414327.jpg',
    影片中文名: '沉默的羔羊',
    影片外国名: '  The Silence of the Lambs',
    评分: '8.9',
    评分数: '869943',
    概况: '安东尼·霍普金斯的顶级表演',
    相关信息:
      '导演:乔纳森·戴米JonathanDemme主演:朱迪·福斯特JodieFoster安...1991美国剧情犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/11525673/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2178872593.jpg',
    影片中文名: '布达佩斯大饭店',
    影片外国名: '  The Grand Budapest Hotel',
    评分: '8.9',
    评分数: '908907',
    概况: '小清新的故事里注入了大历史的情怀',
    相关信息:
      '导演:韦斯·安德森WesAnderson主演:拉尔夫·费因斯RalphFiennes...2014美国德国英国剧情喜剧冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2334904/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p450262388.jpg',
    影片中文名: '禁闭岛',
    影片外国名: '  Shutter Island',
    评分: '8.9',
    评分数: '954104',
    概况: '昔日翩翩少年，今日大腹便便',
    相关信息:
      '导演:MartinScorsese主演:莱昂纳多·迪卡普里奥LeonardoDiCaprio...2010美国剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292343/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2209066019.jpg',
    影片中文名: '蝴蝶效应',
    影片外国名: '  The Butterfly Effect',
    评分: '8.9',
    评分数: '918433',
    概况: '人的命运被自己瞬间的抉择改变',
    相关信息:
      '导演:埃里克·布雷斯EricBressJ·麦基·格鲁伯J.MackyeGruber主...2004美国加拿大剧情悬疑科幻惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1780330/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p480383375.jpg',
    影片中文名: '致命魔术',
    影片外国名: '  The Prestige',
    评分: '8.9',
    评分数: '840564',
    概况: '孪生蝙蝠侠大战克隆金刚狼',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:休·杰克曼HughJackman...2006英国美国剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291543/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2219011938.jpg',
    影片中文名: '功夫',
    影片外国名: ' ',
    评分: '8.8',
    评分数: '1096370',
    概况: '警恶惩奸，维护世界和平这个任务就交给你了，好吗？',
    相关信息:
      '导演:周星驰StephenChow主演:周星驰StephenChow元秋QiuYuen...2004中国大陆中国香港动作喜剧犯罪奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3442220/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2559579779.jpg',
    影片中文名: '海豚湾',
    影片外国名: '  The Cove',
    评分: '9.3',
    评分数: '352849',
    概况: '海豚的微笑，是世界上最高明的伪装',
    相关信息:
      "导演:路易·西霍尤斯LouiePsihoyos主演:RichardO'Barry路易·西霍...2009美国纪录片",
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292656/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p480965695.jpg',
    影片中文名: '心灵捕手',
    影片外国名: '  Good Will Hunting',
    评分: '8.9',
    评分数: '695692',
    概况: '人生中应该拥有这样的一段豁然开朗',
    相关信息:
      '导演:格斯·范·桑特GusVanSant主演:马特·达蒙MattDamon罗宾·...1997美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291832/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1910902213.jpg',
    影片中文名: '低俗小说',
    影片外国名: '  Pulp Fiction',
    评分: '8.9',
    评分数: '817477',
    概况: '故事的高级讲法',
    相关信息:
      '导演:昆汀·塔伦蒂诺QuentinTarantino主演:约翰·特拉沃尔塔JohnTra...1994美国剧情喜剧犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292262/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p477229647.jpg',
    影片中文名: '美国往事',
    影片外国名: '  Once Upon a Time in America',
    评分: '9.2',
    评分数: '404098',
    概况: '往事如烟，无处祭奠',
    相关信息:
      '导演:赛尔乔·莱翁内SergioLeone主演:罗伯特·德尼罗RobertDeNiro...1984美国意大利犯罪剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292679/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p465939041.jpg',
    影片中文名: '春光乍泄',
    影片外国名: '  春光乍洩',
    评分: '9.0',
    评分数: '620564',
    概况: '爱情纠缠，男女一致',
    相关信息:
      '导演:王家卫KarWaiWong主演:张国荣LeslieCheung梁朝伟TonyLeu...1997中国香港日本韩国剧情爱情同性',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291544/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910812549.jpg',
    影片中文名: '哈利·波特与阿兹卡班的囚徒',
    影片外国名: '  Harry Potter and the Prisoner of Azkaban',
    评分: '8.9',
    评分数: '708180',
    概况: '不一样的导演，不一样的哈利·波特',
    相关信息:
      '导演:AlfonsoCuarón主演:丹尼尔·雷德克里夫DanielRadcliffeEmma...2004英国美国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1294371/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2263408369.jpg',
    影片中文名: '摩登时代',
    影片外国名: '  Modern Times',
    评分: '9.3',
    评分数: '294216',
    概况: '大时代中的人生，小人物的悲喜',
    相关信息:
      '导演:查理·卓别林CharlesChaplin主演:查理·卓别林CharlesChaplin...1936美国剧情喜剧爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/5322596/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1305562621.jpg',
    影片中文名: '超脱',
    影片外国名: '  Detachment',
    评分: '9.0',
    评分数: '580285',
    概况: '穷尽一生，我们要学会的，不过是彼此拥抱',
    相关信息:
      '导演:托尼·凯耶TonyKaye主演:艾德里安·布洛迪AdrienBrody马西...2011美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1302425/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2579932167.jpg',
    影片中文名: '喜剧之王',
    影片外国名: '  喜劇之王',
    评分: '8.8',
    评分数: '949832',
    概况: '我是一个演员',
    相关信息:
      '导演:周星驰StephenChow李力持Lik-ChiLee主演:周星驰StephenCh...1999中国香港喜剧剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297192/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2558364386.jpg',
    影片中文名: '致命ID',
    影片外国名: '  Identity',
    评分: '8.9',
    评分数: '805219',
    概况: '最不可能的那个人永远是最可能的',
    相关信息:
      '导演:詹姆斯·曼高德JamesMangold主演:约翰·库萨克JohnCusack雷...2003美国剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292223/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2219586434.jpg',
    影片中文名: '七宗罪',
    影片外国名: '  Se7en',
    评分: '8.8',
    评分数: '927392',
    概况: '警察抓小偷，老鼠玩死猫',
    相关信息:
      '导演:大卫·芬奇DavidFincher主演:摩根·弗里曼MorganFreeman布...1995美国剧情犯罪悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1300299/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1633113220.jpg',
    影片中文名: '杀人回忆',
    影片外国名: '  살인의 추억',
    评分: '8.9',
    评分数: '696335',
    概况: '关于连环杀人悬案的集体回忆',
    相关信息:
      '导演:奉俊昊Joon-hoBong主演:宋康昊Kang-hoSong金相庆Sang-kyun...2003韩国剧情动作犯罪悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1865703/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p456825720.jpg',
    影片中文名: '红辣椒',
    影片外国名: '  パプリカ',
    评分: '9.1',
    评分数: '451403',
    概况: '梦的勾结',
    相关信息:
      '导演:今敏SatoshiKon主演:林原惠美MegumiHayashibara江守彻Toru...2006日本动画悬疑科幻惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1298070/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1596085504.jpg',
    影片中文名: '加勒比海盗',
    影片外国名: '  Pirates of the Caribbean: The Curse of the Black Pearl',
    评分: '8.8',
    评分数: '840807',
    概况: '约翰尼·德普的独角戏',
    相关信息:
      '导演:戈尔·维宾斯基GoreVerbinski主演:约翰尼·德普JohnnyDepp...2003美国动作冒险奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1296996/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1082651990.jpg',
    影片中文名: '哈利·波特与密室',
    影片外国名: '  Harry Potter and the Chamber of Secrets',
    评分: '8.8',
    评分数: '735443',
    概况: '魔法的密室之门已打开...',
    相关信息:
      '导演:ChrisColumbus主演:丹尼尔·雷德克里夫DanielRadcliffe艾玛...2002英国美国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/6985810/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1546987967.jpg',
    影片中文名: '狩猎',
    影片外国名: '  Jagten',
    评分: '9.1',
    评分数: '381016',
    概况: '人言可畏',
    相关信息:
      '导演:托马斯·温特伯格ThomasVinterberg主演:麦斯·米科尔森MadsMik...2012丹麦瑞典剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292434/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2567845803.jpg',
    影片中文名: '一一',
    影片外国名: ' ',
    评分: '9.1',
    评分数: '381726',
    概况: '我们都曾经是一一',
    相关信息:
      '导演:杨德昌EdwardYang主演:吴念真李凯莉KellyLee金燕玲Elai...2000中国台湾日本剧情爱情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1787291/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p884763596.jpg',
    影片中文名: '被嫌弃的松子的一生',
    影片外国名: '  嫌われ松子の一生',
    评分: '8.9',
    评分数: '692464',
    概况: '以戏谑来戏谑戏谑',
    相关信息:
      '导演:中岛哲也TetsuyaNakashima主演:中谷美纪MikiNakatani瑛太E...2006日本剧情歌舞',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10777687/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1816276065.jpg',
    影片中文名: '7号房的礼物',
    影片外国名: '  7번방의 선물',
    评分: '8.9',
    评分数: '546870',
    概况: '《我是山姆》的《美丽人生》',
    相关信息:
      '导演:李焕庆Hwan-kyeongLee主演:柳承龙Seung-yongRyoo朴信惠Shi...2013韩国剧情喜剧家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1306249/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2357915564.jpg',
    影片中文名: '唐伯虎点秋香',
    影片外国名: '  唐伯虎點秋香',
    评分: '8.7',
    评分数: '1056320',
    概况: '华太师是黄霑，吴镇宇四大才子之一',
    相关信息:
      '导演:李力持Lik-ChiLee主演:周星驰StephenChow巩俐LiGong陈...1993中国香港喜剧爱情古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26799731/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2505525050.jpg',
    影片中文名: '请以你的名字呼唤我',
    影片外国名: '  Call Me by Your Name',
    评分: '8.9',
    评分数: '706726',
    概况: '沉醉在电影的情感和视听氛围中无法自拔',
    相关信息:
      '导演:卢卡·瓜达尼诺LucaGuadagnino主演:艾米·汉莫ArmieHammer...2017意大利法国巴西美国剧情爱情同性',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1418834/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2604889017.jpg',
    影片中文名: '断背山',
    影片外国名: '  Brokeback Mountain',
    评分: '8.8',
    评分数: '696422',
    概况: '每个人心中都有一座断背山',
    相关信息:
      '导演:李安AngLee主演:希斯·莱杰HeathLedger杰克·吉伦哈尔Jake...2005美国加拿大剧情爱情同性家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292370/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p480956937.jpg',
    影片中文名: '剪刀手爱德华',
    影片外国名: '  Edward Scissorhands',
    评分: '8.7',
    评分数: '1019759',
    概况: '浪漫忧郁的成人童话',
    相关信息:
      '导演:蒂姆·波顿TimBurton主演:约翰尼·德普JohnnyDepp薇诺娜·...1990美国剧情奇幻爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1294639/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2004174709.jpg',
    影片中文名: '勇敢的心',
    影片外国名: '  Braveheart',
    评分: '8.9',
    评分数: '551900',
    概况: '史诗大片的典范',
    相关信息:
      '导演:梅尔·吉布森MelGibson主演:梅尔·吉布森MelGibson苏菲·玛...1995美国动作传记剧情历史战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2149806/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2707581855.jpg',
    影片中文名: '入殓师',
    影片外国名: '  おくりびと',
    评分: '8.9',
    评分数: '651558',
    概况: '死可能是一道门，逝去并不是终结，而是超越，走向下一程',
    相关信息:
      '导演:泷田洋二郎YôjirôTakita主演:本木雅弘MasahiroMotoki...2008日本剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1296339/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2555762374.jpg',
    影片中文名: '爱在黎明破晓前',
    影片外国名: '  Before Sunrise',
    评分: '8.8',
    评分数: '665501',
    概况: '缘分是个连绵词，最美不过一瞬',
    相关信息:
      '导演:理查德·林克莱特RichardLinklater主演:伊桑·霍克EthanHawke...1995美国奥地利瑞士剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297630/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2220184425.jpg',
    影片中文名: '第六感',
    影片外国名: '  The Sixth Sense',
    评分: '8.9',
    评分数: '545103',
    概况: '深入内心的恐怖，出人意料的结局',
    相关信息:
      '导演:M·奈特·沙马兰M.NightShyamalan主演:布鲁斯·威利斯BruceWi...1999美国剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291999/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p792381411.jpg',
    影片中文名: '重庆森林',
    影片外国名: '  重慶森林',
    评分: '8.8',
    评分数: '793903',
    概况: '寂寞没有期限',
    相关信息:
      '导演:王家卫KarWaiWong主演:林青霞BrigitteLin金城武TakeshiK...1994中国香港剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3395373/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1706428744.jpg',
    影片中文名: '蝙蝠侠：黑暗骑士崛起',
    影片外国名: '  The Dark Knight Rises',
    评分: '8.8',
    评分数: '704948',
    概况: '诺兰就是保证',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:克里斯蒂安·贝尔Christ...2012美国英国剧情动作科幻犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297359/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1613191025.jpg',
    影片中文名: '幽灵公主',
    影片外国名: '  もののけ姫',
    评分: '8.9',
    评分数: '513402',
    概况: '人与自然的战争史诗',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:松田洋治YôjiMatsuda石田百合...1997日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/11026735/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2614500883.jpg',
    影片中文名: '超能陆战队',
    影片外国名: '  Big Hero 6',
    评分: '8.7',
    评分数: '991731',
    概况: 'Balalala~~~',
    相关信息:
      '导演:唐·霍尔DonHall克里斯·威廉姆斯ChrisWilliams主演:斯科特...2014美国喜剧动作科幻动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293359/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2620392435.jpg',
    影片中文名: '菊次郎的夏天',
    影片外国名: '  菊次郎の夏',
    评分: '8.9',
    评分数: '583376',
    概况: '从没见过那么流氓的温柔，从没见过那么温柔的流氓',
    相关信息:
      '导演:北野武TakeshiKitano主演:北野武TakeshiKitano关口雄介Yus...1999日本剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291990/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561542458.jpg',
    影片中文名: '爱在日落黄昏时',
    影片外国名: '  Before Sunset',
    评分: '8.9',
    评分数: '546310',
    概况: '九年后的重逢是世俗和责任的交叠，没了悸动和青涩，沧桑而温暖',
    相关信息:
      '导演:理查德·林克莱特RichardLinklater主演:伊桑·霍克EthanHawke...2004美国法国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1305164/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2223011274.jpg',
    影片中文名: '甜蜜蜜',
    影片外国名: ' ',
    评分: '8.9',
    评分数: '536828',
    概况: '相逢只要一瞬间，等待却像是一辈子',
    相关信息:
      '导演:陈可辛PeterChan主演:黎明LeonLai张曼玉MaggieCheung...1996中国香港剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292215/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2447590313.jpg',
    影片中文名: '天使爱美丽',
    影片外国名: "  Le fabuleux destin d'Amélie Poulain",
    评分: '8.7',
    评分数: '945110',
    概况: '法式小清新 ',
    相关信息:
      '导演:让-皮埃尔·热内Jean-PierreJeunet主演:奥黛丽·塔图AudreyTau...2001法国德国剧情喜剧爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291875/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2564685215.jpg',
    影片中文名: '阳光灿烂的日子',
    影片外国名: ' ',
    评分: '8.9',
    评分数: '603799',
    概况: '一场华丽的意淫',
    相关信息:
      '导演:姜文WenJiang主演:夏雨YuXia宁静JingNing陶虹HongTao1994中国大陆中国香港剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25814705/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2564498893.jpg',
    影片中文名: '小森林 夏秋篇',
    影片外国名: '  リトル・フォレスト 夏・秋',
    评分: '9.0',
    评分数: '417902',
    概况: '那些静得只能听见呼吸的日子里，你明白孤独即生活',
    相关信息:
      '导演:森淳一JunichiMori主演:桥本爱AiHashimoto三浦贵大Takahir...2014日本剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1300992/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2190556408.jpg',
    影片中文名: '完美的世界',
    影片外国名: '  A Perfect World',
    评分: '9.1',
    评分数: '308214',
    概况: '坏人的好总是比好人的好来得更感人',
    相关信息:
      '导演:克林特·伊斯特伍德ClintEastwood主演:凯文·科斯特纳KevinCos...1993美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4202302/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p617533616.jpg',
    影片中文名: '借东西的小人阿莉埃蒂',
    影片外国名: '  借りぐらしのアリエッティ',
    评分: '8.9',
    评分数: '541479',
    概况: '曾经的那段美好会沉淀为一辈子的记忆',
    相关信息:
      '导演:米林宏昌HiromasaYonebayashi主演:志田未来MiraiShida神木...2010日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292337/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p661160053.jpg',
    影片中文名: '无人知晓',
    影片外国名: '  誰も知らない',
    评分: '9.1',
    评分数: '311754',
    概况: '我的平常生活就是他人的幸福',
    相关信息:
      '导演:是枝裕和HirokazuKoreeda主演:柳乐优弥YûyaYagira北浦爱...2004日本剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/21318488/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2221768894.jpg',
    影片中文名: '消失的爱人',
    影片外国名: '  Gone Girl',
    评分: '8.7',
    评分数: '914983',
    概况: '年度最佳date movie',
    相关信息:
      '导演:大卫·芬奇DavidFincher主演:本·阿弗莱克BenAffleck罗莎蒙...2014美国剧情犯罪悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297447/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2414157745.jpg',
    影片中文名: '倩女幽魂',
    影片外国名: ' ',
    评分: '8.8',
    评分数: '722129',
    概况: '两张绝世的脸 ',
    相关信息:
      '导演:程小东Siu-TungChing主演:张国荣LeslieCheung王祖贤JoeyW...1987中国香港爱情奇幻武侠古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/27010768/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2561439800.jpg',
    影片中文名: '寄生虫',
    影片外国名: '  기생충',
    评分: '8.8',
    评分数: '1342910',
    概况: ' ',
    相关信息:
      '导演:奉俊昊Joon-hoBong主演:宋康昊Kang-hoSong李善均Seon-gyun...2019韩国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297052/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p456692072.jpg',
    影片中文名: '侧耳倾听',
    影片外国名: '  耳をすませば',
    评分: '8.9',
    评分数: '452852',
    概况: '少女情怀总是诗',
    相关信息:
      '导演:近藤喜文YoshifumiKondo主演:本名阳子YoukoHonna小林桂树K...1995日本剧情爱情动画',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25814707/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2215147728.jpg',
    影片中文名: '小森林 冬春篇',
    影片外国名: '  リトル・フォレスト 冬・春',
    评分: '9.0',
    评分数: '373173',
    概况: '尊敬他人，尊敬你生活的这片土地，明白孤独是人生的常态',
    相关信息:
      '导演:森淳一JunichiMori主演:桥本爱AiHashimoto三浦贵大Takahir...2015日本剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10577869/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2070153774.jpg',
    影片中文名: '时空恋旅人',
    影片外国名: '  About Time',
    评分: '8.8',
    评分数: '649086',
    概况: '把每天当作最后一天般珍惜度过，积极拥抱生活，就是幸福',
    相关信息:
      '导演:理查德·柯蒂斯RichardCurtis主演:多姆纳尔·格里森DomhnallGl...2013英国喜剧爱情奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292274/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p854757687.jpg',
    影片中文名: '幸福终点站',
    影片外国名: '  The Terminal',
    评分: '8.8',
    评分数: '557912',
    概况: '有时候幸福需要等一等 ',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:汤姆·汉克斯TomHanks...2004美国喜剧剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2353023/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p490385643.jpg',
    影片中文名: '驯龙高手',
    影片外国名: '  How to Train Your Dragon',
    评分: '8.8',
    评分数: '742081',
    概况: '和谐的生活离不开摸头与被摸头',
    相关信息:
      '导演:迪恩·德布洛斯DeanDeBlois克里斯·桑德斯ChrisSanders主演:...2010美国动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1294240/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2169664351.jpg',
    影片中文名: '教父3',
    影片外国名: '  The Godfather: Part III',
    评分: '9.0',
    评分数: '365477',
    概况: '任何信念的力量，都无法改变命运',
    相关信息:
      '导演:弗朗西斯·福特·科波拉FrancisFordCoppola主演:阿尔·帕西诺A...1990美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/5989818/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1675053073.jpg',
    影片中文名: '萤火之森',
    影片外国名: '  蛍火の杜へ',
    评分: '8.9',
    评分数: '526139',
    概况: '触不到的恋人',
    相关信息:
      '导演:大森贵弘TakahiroOmori主演:佐仓绫音AyaneSakura内山昂辉K...2011日本剧情爱情动画奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26628357/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2406624993.jpg',
    影片中文名: '一个叫欧维的男人决定去死',
    影片外国名: '  En man som heter Ove',
    评分: '8.9',
    评分数: '466277',
    概况: '惠及一生的美丽',
    相关信息:
      '导演:汉内斯·赫尔姆HannesHolm主演:罗夫·拉斯加德RolfLassgård...2015瑞典剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1395091/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1351050722.jpg',
    影片中文名: '未麻的部屋',
    影片外国名: '  Perfect Blue',
    评分: '9.1',
    评分数: '322715',
    概况: '好的剧本是，就算你猜到了结局也猜不到全部',
    相关信息:
      '导演:今敏SatoshiKon主演:岩男润子JunkoIwao松本梨香RicaMatsu...1997日本动画奇幻惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291579/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2513247938.jpg',
    影片中文名: '怪兽电力公司',
    影片外国名: '  Monsters, Inc.',
    评分: '8.8',
    评分数: '655226',
    概况: '不要给它起名字，起了名字就有感情了',
    相关信息:
      '导演:彼特·道格特PeteDocter大卫·斯沃曼DavidSilverman主演:约...2001美国儿童喜剧动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1309055/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p735391084.jpg',
    影片中文名: '哈利·波特与火焰杯',
    影片外国名: '  Harry Potter and the Goblet of Fire',
    评分: '8.8',
    评分数: '641460',
    概况: ' ',
    相关信息:
      '导演:迈克·内威尔MikeNewell主演:丹尼尔·雷德克里夫DanielRadclif...2005英国美国悬疑奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1858711/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1283675359.jpg',
    影片中文名: '玩具总动员3',
    影片外国名: '  Toy Story 3',
    评分: '8.9',
    评分数: '503619',
    概况: '跨度十五年的欢乐与泪水',
    相关信息:
      '导演:李·昂克里奇LeeUnkrich主演:汤姆·汉克斯TomHanks蒂姆·艾...2010美国喜剧动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1418200/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2016401659.jpg',
    影片中文名: '傲慢与偏见',
    影片外国名: '  Pride & Prejudice',
    评分: '8.7',
    评分数: '780393',
    概况: '爱是摈弃傲慢与偏见之后的曙光',
    相关信息:
      '导演:乔·怀特JoeWright主演:凯拉·奈特莉KeiraKnightley马修·...2005法国英国美国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25986180/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2360940399.jpg',
    影片中文名: '釜山行',
    影片外国名: '  부산행',
    评分: '8.6',
    评分数: '1175490',
    概况: '揭露人性的丧尸题材力作',
    相关信息:
      '导演:延尚昊Sang-hoYeon主演:孔侑YooGong郑有美Yu-miJung马...2016韩国动作惊悚灾难',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10437779/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1903379979.jpg',
    影片中文名: '新世界',
    影片外国名: '  신세계',
    评分: '8.9',
    评分数: '420355',
    概况: '要做就做得狠一点，这样才能活下去',
    相关信息:
      '导演:朴勋政Hoon-jungPark主演:李政宰Jung-JaeLee崔岷植Min-sik...2013韩国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3287562/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792776858.jpg',
    影片中文名: '神偷奶爸',
    影片外国名: '  Despicable Me',
    评分: '8.7',
    评分数: '931236',
    概况: "Mr. I Don't Care其实也有Care的时候",
    相关信息:
      '导演:皮艾尔·柯芬PierreCoffin克里斯·雷纳德ChrisRenaud主演:...2010美国法国喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3072124/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p488255145.jpg',
    影片中文名: '玛丽和马克思',
    影片外国名: '  Mary and Max',
    评分: '9.0',
    评分数: '416721',
    概况: '你是我最好的朋友，你是我唯一的朋友 ',
    相关信息:
      '导演:亚当·艾略特AdamElliot主演:托妮·科莱特ToniCollette菲利...2009澳大利亚美国剧情喜剧动画',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/6307447/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1800813767.jpg',
    影片中文名: '被解救的姜戈',
    影片外国名: '  Django Unchained',
    评分: '8.8',
    评分数: '596861',
    概况: '热血沸腾，那个低俗、性感的无耻混蛋又来了',
    相关信息:
      '导演:昆汀·塔伦蒂诺QuentinTarantino主演:杰米·福克斯JamieFoxx...2012美国剧情动作西部冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4268598/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p689520756.jpg',
    影片中文名: '告白',
    影片外国名: ' ',
    评分: '8.8',
    评分数: '661896',
    概况: '没有一人完全善，也没有一人完全恶',
    相关信息:
      '导演:中岛哲也TetsuyaNakashima主演:松隆子TakakoMatsu冈田将生...2010日本剧情悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291545/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p692813374.jpg',
    影片中文名: '大鱼',
    影片外国名: '  Big Fish',
    评分: '8.8',
    评分数: '559520',
    概况: '抱着梦想而活着的人是幸福的，怀抱梦想而死去的人是不朽的',
    相关信息:
      '导演:蒂姆·波顿TimBurton主演:伊万·麦克格雷格EwanMcGregor阿...2003美国剧情家庭奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307315/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2532803206.jpg',
    影片中文名: '哪吒闹海',
    影片外国名: ' ',
    评分: '9.2',
    评分数: '253405',
    概况: '想你时你在闹海',
    相关信息:
      '导演:王树忱ShuchenWang严定宪DingxianYan主演:梁正晖Zhenghui...1979中国大陆冒险动画奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1316510/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2609063922.jpg',
    影片中文名: '射雕英雄传之东成西就',
    影片外国名: '  射鵰英雄傳之東成西就',
    评分: '8.7',
    评分数: '624322',
    概况: '百看不厌 ',
    相关信息:
      '导演:刘镇伟JeffreyLau主演:梁朝伟TonyLeungChiuWai林青霞Bri...1993中国香港喜剧奇幻武侠古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4920389/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516578307.jpg',
    影片中文名: '头号玩家',
    影片外国名: '  Ready Player One',
    评分: '8.7',
    评分数: '1343413',
    概况: '写给影迷，动漫迷和游戏迷的一封情书',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:泰伊·谢里丹TyeSheri...2018美国动作科幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10463953/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2255040492.jpg',
    影片中文名: '模仿游戏',
    影片外国名: '  The Imitation Game',
    评分: '8.8',
    评分数: '634160',
    概况: '他给机器起名“克里斯托弗”，因为这是他初恋的名字',
    相关信息:
      '导演:莫滕·泰杜姆MortenTyldum主演:本尼迪克特·康伯巴奇BenedictC...2014英国美国剧情传记战争同性',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4917726/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1374786017.jpg',
    影片中文名: '阳光姐妹淘',
    影片外国名: '  써니',
    评分: '8.8',
    评分数: '582927',
    概况: '再多各自牛逼的时光，也比不上一起傻逼的岁月 ',
    相关信息:
      '导演:姜炯哲Hyeong-CheolKang主演:沈恩京Eun-kyungShim闵孝琳Hy...2011韩国剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1303037/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2249048907.jpg',
    影片中文名: '喜宴',
    影片外国名: '  囍宴',
    评分: '9.0',
    评分数: '353482',
    概况: '中国家庭的喜怒哀乐忍',
    相关信息:
      '导演:李安AngLee主演:赵文瑄WinstonChao归亚蕾Ya-leiKuei郎...1993中国台湾美国剧情喜剧爱情同性家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1306861/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p652417775.jpg',
    影片中文名: '我是山姆',
    影片外国名: '  I Am Sam',
    评分: '9.0',
    评分数: '331516',
    概况: '爱并不需要智商 ',
    相关信息:
      '导演:杰茜·尼尔森JessieNelson主演:SeanPennDakotaFanningMi...2001美国剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/21360417/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2016930906.jpg',
    影片中文名: '恐怖直播',
    影片外国名: '  더 테러 라이브',
    评分: '8.7',
    评分数: '640217',
    概况: '恐怖分子的“秋菊打官司”',
    相关信息:
      '导演:金秉祐Byeong-wooKim主演:河正宇Jung-wooHa李璟荣Kyeong-y...2013韩国剧情犯罪悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26325320/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2398141939.jpg',
    影片中文名: '血战钢锯岭',
    影片外国名: '  Hacksaw Ridge',
    评分: '8.7',
    评分数: '770860',
    概况: '优秀的战争片不会美化战场，不会粉饰死亡，不会矮化敌人，不会无视常识，最重要的，不会宣扬战争',
    相关信息:
      '导演:梅尔·吉布森MelGibson主演:安德鲁·加菲尔德AndrewGarfield...2016澳大利亚美国剧情传记历史战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291557/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910828286.jpg',
    影片中文名: '花样年华',
    影片外国名: '  花樣年華',
    评分: '8.7',
    评分数: '593125',
    概况: '偷情本没有这样美',
    相关信息:
      '导演:王家卫KarWaiWong主演:梁朝伟TonyLeungChiuWai张曼玉Ma...2000中国香港剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297518/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p648370300.jpg',
    影片中文名: '九品芝麻官',
    影片外国名: ' ',
    评分: '8.7',
    评分数: '658976',
    概况: ' ',
    相关信息:
      '导演:王晶JingWong主演:周星驰StephenChow吴孟达ManTatNg...1994中国香港中国大陆剧情喜剧古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295399/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215886505.jpg',
    影片中文名: '七武士',
    影片外国名: '  七人の侍',
    评分: '9.3',
    评分数: '193449',
    概况: '时代悲歌',
    相关信息:
      '导演:黑泽明AkiraKurosawa主演:三船敏郎ToshirôMifune志村乔...1954日本动作冒险剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1461403/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2528965424.jpg',
    影片中文名: '茶馆',
    影片外国名: ' ',
    评分: '9.5',
    评分数: '136425',
    概况: ' ',
    相关信息:
      '导演:谢添TianXie主演:于是之ShizhiYu郑榕RongZhen蓝天野T...1982(中国大陆)中国大陆剧情历史',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10533913/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2266293606.jpg',
    影片中文名: '头脑特工队',
    影片外国名: '  Inside Out',
    评分: '8.8',
    评分数: '597476',
    概况: '愿我们都不用长大，每一座城堡都能永远存在',
    相关信息:
      '导演:彼特·道格特PeteDocter罗纳尔多·德尔·卡门RonaldoDelCarmen&nb...2015美国喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1828115/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p453716305.jpg',
    影片中文名: '色，戒',
    影片外国名: ' ',
    评分: '8.6',
    评分数: '780777',
    概况: '假戏真情，爱欲深海',
    相关信息:
      '导演:李安AngLee主演:梁朝伟TonyLeungChiuWai汤唯WeiTang...2007中国台湾中国大陆美国中国香港剧情爱情情色',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1302467/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461818.jpg',
    影片中文名: '黑客帝国3：矩阵革命',
    影片外国名: '  The Matrix Revolutions',
    评分: '8.8',
    评分数: '438661',
    概况: '不得不说，《黑客帝国》系列是商业片与科幻、哲学完美结合的典范',
    相关信息:
      '导演:拉娜·沃卓斯基LanaWachowski莉莉·沃卓斯基LillyWachowski...2003美国动作科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293181/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1021883305.jpg',
    影片中文名: '惊魂记',
    影片外国名: '  Psycho',
    评分: '9.0',
    评分数: '284675',
    概况: '故事的反转与反转，分裂电影的始祖',
    相关信息:
      '导演:阿尔弗雷德·希区柯克AlfredHitchcock主演:安东尼·博金斯Antho...1960美国悬疑惊悚恐怖',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26683290/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2395733377.jpg',
    影片中文名: '你的名字。',
    影片外国名: '  君の名は。',
    评分: '8.5',
    评分数: '1378948',
    概况: '穿越错位的时空，仰望陨落的星辰，你没留下你的名字，我却无法忘记那句“我爱你”',
    相关信息:
      '导演:新海诚MakotoShinkai主演:神木隆之介RyûnosukeKamiki上...2016日本剧情爱情动画',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1417598/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p726839485.jpg',
    影片中文名: '电锯惊魂',
    影片外国名: '  Saw',
    评分: '8.8',
    评分数: '520716',
    概况: '真相就在眼前',
    相关信息:
      '导演:詹姆斯·温JamesWan主演:雷·沃纳尔LeighWhannell加利·艾...2004美国悬疑惊悚恐怖',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26611804/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2510081688.jpg',
    影片中文名: '三块广告牌',
    影片外国名: '  Three Billboards Outside Ebbing, Missouri',
    评分: '8.7',
    评分数: '806419',
    概况: '怼天怼地，你走后，她与世界为敌',
    相关信息:
      '导演:马丁·麦克唐纳MartinMcDonagh主演:弗兰西斯·麦克多蒙德France...2017英国美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1793929/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2166160837.jpg',
    影片中文名: '达拉斯买家俱乐部',
    影片外国名: '  Dallas Buyers Club',
    评分: '8.8',
    评分数: '444392',
    概况: 'Jared Leto的腿比女人还美！',
    相关信息:
      '导演:让-马克·瓦雷Jean-MarcVallée主演:马修·麦康纳MatthewMcCon...2013美国剧情传记同性',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1907966/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1867084027.jpg',
    影片中文名: '疯狂原始人',
    影片外国名: '  The Croods',
    评分: '8.7',
    评分数: '823889',
    概况: '老少皆宜，这就是好莱坞动画的魅力',
    相关信息:
      '导演:科克·德·米科KirkDeMicco克里斯·桑德斯ChrisSanders主演...2013美国喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25917973/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2276780256.jpg',
    影片中文名: '心迷宫',
    影片外国名: ' ',
    评分: '8.7',
    评分数: '508829',
    概况: '荒诞讽刺，千奇百巧，抽丝剥茧，百转千回',
    相关信息:
      '导演:忻钰坤YukunXin主演:霍卫民WeiminHuo王笑天XiaotianWang...2014中国大陆剧情犯罪悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291822/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p470419493.jpg',
    影片中文名: '卢旺达饭店',
    影片外国名: '  Hotel Rwanda',
    评分: '8.9',
    评分数: '323395',
    概况: '当这个世界闭上双眼，他却敞开了怀抱',
    相关信息:
      '导演:特瑞·乔治TerryGeorge主演:唐·钱德尔DonCheadle苏菲·奥...2004英国南非意大利美国剧情传记历史战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292208/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p455677490.jpg',
    影片中文名: '上帝之城',
    影片外国名: '  Cidade de Deus',
    评分: '9.0',
    评分数: '296697',
    概况: '被上帝抛弃了的上帝之城',
    相关信息:
      '导演:费尔南多·梅里尔斯FernandoMeirelles卡迪亚·兰德KátiaLund&nbsp...2002巴西法国犯罪剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1578507/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792223507.jpg',
    影片中文名: '谍影重重3',
    影片外国名: '  The Bourne Ultimatum',
    评分: '8.8',
    评分数: '410039',
    概况: '像吃了苏打饼一样干脆的电影',
    相关信息:
      '导演:保罗·格林格拉斯PaulGreengrass主演:马特·达蒙MattDamon...2007美国德国法国英国动作悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297574/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504997087.jpg',
    影片中文名: '英雄本色',
    影片外国名: ' ',
    评分: '8.6',
    评分数: '528303',
    概况: '英雄泪短，兄弟情长 ',
    相关信息:
      '导演:吴宇森JohnWoo主演:周润发Yun-FatChow狄龙LungTi张国...1986中国香港剧情动作犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295409/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2597918718.jpg',
    影片中文名: '纵横四海',
    影片外国名: '  緃横四海',
    评分: '8.8',
    评分数: '416335',
    概况: '香港浪漫主义警匪动作片的巅峰之作',
    相关信息:
      '导演:吴宇森JohnWoo主演:周润发Yun-FatChow张国荣LeslieCheung...1991中国香港剧情喜剧动作犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291585/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1917567652.jpg',
    影片中文名: '风之谷',
    影片外国名: '  風の谷のナウシカ',
    评分: '8.9',
    评分数: '348473',
    概况: '动画片的圣经',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:岛本须美SumiShimamoto松田洋治Y...1984日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25895901/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2603364117.jpg',
    影片中文名: '海街日记',
    影片外国名: '  海街diary',
    评分: '8.8',
    评分数: '438037',
    概况: '是枝裕和的家庭习作',
    相关信息:
      '导演:是枝裕和HirokazuKoreeda主演:绫濑遥HarukaAyase长泽雅美M...2015日本剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/10808442/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2074715729.jpg',
    影片中文名: '爱在午夜降临前',
    影片外国名: '  Before Midnight',
    评分: '8.9',
    评分数: '391165',
    概况: '所谓爱情，就是话唠一路，都不会心生腻烦，彼此嫌弃',
    相关信息:
      '导演:理查德·林克莱特RichardLinklater主演:伊桑·霍克EthanHawke...2013美国希腊剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1300374/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p767586451.jpg',
    影片中文名: '绿里奇迹',
    影片外国名: '  The Green Mile',
    评分: '8.9',
    评分数: '321832',
    概况: '天使暂时离开',
    相关信息:
      '导演:弗兰克·德拉邦特FrankDarabont主演:汤姆·汉克斯TomHanks...1999美国犯罪剧情奇幻悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1304447/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p641688453.jpg',
    影片中文名: '记忆碎片',
    影片外国名: '  Memento',
    评分: '8.7',
    评分数: '590069',
    概况: '一个针管引发的血案',
    相关信息:
      '导演:克里斯托弗·诺兰ChristopherNolan主演:盖·皮尔斯GuyPearce...2000美国犯罪剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3792799/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p456666151.jpg',
    影片中文名: '岁月神偷',
    影片外国名: '  歲月神偷',
    评分: '8.7',
    评分数: '567186',
    概况: '岁月流逝，来日可追',
    相关信息:
      '导演:罗启锐AlexLaw主演:吴君如SandraNg任达华SimonYam钟绍...2010中国香港中国大陆剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1959195/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2603716224.jpg',
    影片中文名: '忠犬八公物语',
    影片外国名: '  ハチ公物語',
    评分: '9.2',
    评分数: '191534',
    概况: '养狗三日，便会对你终其一生',
    相关信息:
      '导演:SeijirôKôyama主演:山本圭KeiYamamoto井川比佐志Hisa...1987日本剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/24750126/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2584519452.jpg',
    影片中文名: '荒蛮故事',
    影片外国名: '  Relatos salvajes',
    评分: '8.8',
    评分数: '435065',
    概况: '始于荒诞，止于更荒诞',
    相关信息:
      '导演:达米安·斯兹弗隆DamiánSzifron主演:达里奥·葛兰帝内提Darío...2014阿根廷西班牙剧情喜剧犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1862151/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p712241453.jpg',
    影片中文名: '疯狂的石头',
    影片外国名: ' ',
    评分: '8.6',
    评分数: '803618',
    概况: '中国版《两杆大烟枪》',
    相关信息:
      '导演:宁浩HaoNing主演:郭涛TaoGuo刘桦HuaLiu连晋TeddyLin2006中国大陆中国香港喜剧犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293460/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1612355875.jpg',
    影片中文名: '雨中曲',
    影片外国名: "  Singin' in the Rain",
    评分: '9.1',
    评分数: '219063',
    概况: '骨灰级歌舞片',
    相关信息:
      '导演:斯坦利·多南StanleyDonen吉恩·凯利GeneKelly主演:吉恩·...1952美国喜剧歌舞爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/27622447/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.jpg',
    影片中文名: '小偷家族',
    影片外国名: '  万引き家族',
    评分: '8.7',
    评分数: '799520',
    概况: '我们组成了家',
    相关信息:
      '导演:是枝裕和HirokazuKoreeda主演:中川雅也LilyFranky安藤樱Sa...2018日本剧情犯罪家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25773932/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2220776342.jpg',
    影片中文名: '爆裂鼓手',
    影片外国名: '  Whiplash',
    评分: '8.7',
    评分数: '576056',
    概况: '这个世界从不善待努力的人，努力了也不一定会成功，但是知道自己在努力，就是活下去的动力',
    相关信息:
      '导演:达米恩·查泽雷DamienChazelle主演:迈尔斯·特勒MilesTeller...2014美国剧情音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/6534248/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1735642656.jpg',
    影片中文名: '无敌破坏王',
    影片外国名: '  Wreck-It Ralph',
    评分: '8.7',
    评分数: '526164',
    概况: '迪士尼和皮克斯拿错剧本的产物',
    相关信息:
      '导演:瑞奇·莫尔RichMoore主演:约翰·C·赖利JohnC.Reilly萨拉...2012美国喜剧动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307856/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2505048077.jpg',
    影片中文名: '背靠背，脸对脸',
    影片外国名: ' ',
    评分: '9.5',
    评分数: '127163',
    概况: ' ',
    相关信息:
      '导演:黄建新JianxinHuang杨亚洲YazhouYang主演:牛振华ZhenhuaN...1994中国大陆中国香港剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292226/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2560717825.jpg',
    影片中文名: '2001太空漫游',
    影片外国名: '  2001: A Space Odyssey',
    评分: '8.9',
    评分数: '317263',
    概况: '现代科幻电影的开山之作，最伟大导演的最伟大影片',
    相关信息:
      '导演:斯坦利·库布里克StanleyKubrick主演:凯尔·杜拉KeirDullea...1968英国美国科幻惊悚冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/27119724/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2567198874.jpg',
    影片中文名: '小丑',
    影片外国名: '  Joker',
    评分: '8.7',
    评分数: '985338',
    概况: ' ',
    相关信息:
      '导演:托德·菲利普斯ToddPhillips主演:杰昆·菲尼克斯JoaquinPhoeni...2019美国加拿大剧情犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2209573/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2434249040.jpg',
    影片中文名: '贫民窟的百万富翁',
    影片外国名: '  Slumdog Millionaire',
    评分: '8.6',
    评分数: '733635',
    概况: '上帝之城+猜火车+阿甘正传+开心辞典=山寨富翁',
    相关信息:
      '导演:丹尼·鲍尔DannyBoyle洛芙琳·坦丹LoveleenTandan主演:戴夫...2008英国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307106/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p958008320.jpg',
    影片中文名: '无间道2',
    影片外国名: '  無間道II',
    评分: '8.7',
    评分数: '465944',
    概况: ' ',
    相关信息:
      '导演:刘伟强麦兆辉主演:陈冠希EdisonChen余文乐ShawnYue曾...2003中国香港剧情犯罪惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291578/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1910895719.jpg',
    影片中文名: '冰川时代',
    影片外国名: '  Ice Age',
    评分: '8.6',
    评分数: '600864',
    概况: '松鼠才是角儿',
    相关信息:
      '导演:卡洛斯·沙尔丹哈CarlosSaldanha克里斯·韦奇ChrisWedge主演...2002美国喜剧动画冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292328/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1982176012.jpg',
    影片中文名: '东邪西毒',
    影片外国名: '  東邪西毒',
    评分: '8.6',
    评分数: '567014',
    概况: '电影诗',
    相关信息:
      '导演:王家卫KarWaiWong主演:张国荣LeslieCheung林青霞Brigitte...1994中国香港中国台湾剧情动作爱情武侠古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3011051/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p462470694.jpg',
    影片中文名: '恐怖游轮',
    影片外国名: '  Triangle',
    评分: '8.5',
    评分数: '841869',
    概况: '不要企图在重复中寻找已经失去的爱',
    相关信息:
      '导演:克里斯托弗·史密斯ChristopherSmith主演:梅利莎·乔治Melissa...2009英国澳大利亚剧情悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/24733428/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2626308994.jpg',
    影片中文名: '心灵奇旅',
    影片外国名: '  Soul',
    评分: '8.7',
    评分数: '954278',
    概况: ' ',
    相关信息:
      '导演:彼特·道格特PeteDocter凯普·鲍尔斯KempPowers主演:杰米·...2020美国动画奇幻音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292329/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p848381236.jpg',
    影片中文名: '牯岭街少年杀人事件',
    影片外国名: '  牯嶺街少年殺人事件',
    评分: '8.9',
    评分数: '290880',
    概况: '弱者送给弱者的一刀',
    相关信息:
      '导演:杨德昌EdwardYang主演:张震ChenChang杨静怡LisaYang张...1991中国台湾剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292401/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p475600770.jpg',
    影片中文名: '真爱至上',
    影片外国名: '  Love Actually',
    评分: '8.6',
    评分数: '721885',
    概况: '爱，是个动词',
    相关信息:
      '导演:理查德·柯蒂斯RichardCurtis主演:休·格兰特HughGrant柯林...2003英国美国法国喜剧剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4848115/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2554167519.jpg',
    影片中文名: '你看起来好像很好吃',
    影片外国名: '  おまえうまそうだな',
    评分: '8.9',
    评分数: '327101',
    概况: '感情不分食草或者食肉',
    相关信息:
      '导演:藤森雅也MasayaFujimori主演:山口胜平KappeiYamaguchi爱河...2010日本剧情动画儿童',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1867345/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2676812053.jpg',
    影片中文名: '遗愿清单',
    影片外国名: '  The Bucket List',
    评分: '8.7',
    评分数: '449027',
    概况: '用剩余不多的时间，去燃烧整个生命',
    相关信息:
      '导演:罗伯·莱纳RobReiner主演:杰克·尼科尔森JackNicholson摩根...2007美国冒险喜剧剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307811/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p456676352.jpg',
    影片中文名: '魔女宅急便',
    影片外国名: '  魔女の宅急便',
    评分: '8.7',
    评分数: '449310',
    概况: '宫崎骏的电影总让人感觉世界是美好的，阳光明媚的',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:高山南MinamiTakayama佐久间玲Re...1989日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1310177/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p456703618.jpg',
    影片中文名: '东京教父',
    影片外国名: '  東京ゴッドファーザーズ',
    评分: '9.0',
    评分数: '222216',
    概况: ' ',
    相关信息:
      '导演:今敏SatoshiKon主演:江守彻ToruEmori梅垣义明YoshiakiUme...2003日本剧情喜剧动画',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1978709/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2549648344.jpg',
    影片中文名: '黑天鹅',
    影片外国名: '  Black Swan',
    评分: '8.6',
    评分数: '769085',
    概况: '黑暗之美',
    相关信息:
      '导演:达伦·阿罗诺夫斯基DarrenAronofsky主演:娜塔莉·波特曼Natalie...2010美国剧情惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/27059130/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2505928032.jpg',
    影片中文名: '大佛普拉斯',
    影片外国名: ' ',
    评分: '8.7',
    评分数: '443140',
    概况: '人们可以登上月球，却永远无法探索人们内心的宇宙',
    相关信息:
      '导演:黄信尧Hsin-yaoHuang主演:庄益增YizengZhuang陈竹昇Chu-sh...2017中国台湾剧情喜剧',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1308857/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2363208684.jpg',
    影片中文名: '可可西里',
    影片外国名: ' ',
    评分: '8.9',
    评分数: '297281',
    概况: '坚硬的信仰',
    相关信息:
      '导演:陆川ChuanLu主演:多布杰Duobujie张磊LeiZhang亓亮QiL...2004中国大陆中国香港剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293908/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2170238828.jpg',
    影片中文名: '城市之光',
    影片外国名: '  City Lights',
    评分: '9.3',
    评分数: '142477',
    概况: '永远的小人物，伟大的卓别林',
    相关信息:
      '导演:CharlesChaplin主演:查理·卓别林CharlesChaplin弗吉尼亚·...1931美国喜剧剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291870/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2353324612.jpg',
    影片中文名: '雨人',
    影片外国名: '  Rain Man',
    评分: '8.7',
    评分数: '396685',
    概况: '生活在自己的世界里，也可以让周围的人显得可笑和渺小',
    相关信息:
      '导演:巴瑞·莱文森BarryLevinson主演:达斯汀·霍夫曼DustinHoffman...1988美国剧情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3075287/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p988260245.jpg',
    影片中文名: '源代码',
    影片外国名: '  Source Code',
    评分: '8.5',
    评分数: '819826',
    概况: '邓肯·琼斯继《月球》之后再度奉献出一部精彩绝伦的科幻佳作',
    相关信息:
      '导演:邓肯·琼斯DuncanJones主演:杰克·吉伦哈尔JakeGyllenhaal...2011美国加拿大科幻悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1309163/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p483604864.jpg',
    影片中文名: '恋恋笔记本',
    影片外国名: '  The Notebook',
    评分: '8.5',
    评分数: '657216',
    概况: '爱情没有那么多借口，如果不能圆满，只能说明爱的不够 ',
    相关信息:
      '导演:尼克·卡索维茨NickCassavetes主演:瑞恩·高斯林RyanGosling...2004美国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25980443/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2421855655.jpg',
    影片中文名: '海边的曼彻斯特',
    影片外国名: '  Manchester by the Sea',
    评分: '8.6',
    评分数: '521116',
    概况: '我们都有权利不与自己的过去和解',
    相关信息:
      '导演:肯尼斯·罗纳根KennethLonergan主演:卡西·阿弗莱克CaseyAffle...2016美国剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/4739952/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1505312273.jpg',
    影片中文名: '初恋这件小事',
    影片外国名: '  สิ่งเล็กเล็กที่เรียกว่า...รัก',
    评分: '8.5',
    评分数: '966814',
    概况: '黑小鸭速效美白记',
    相关信息:
      '导演:普特鹏·普罗萨卡·那·萨克那卡林PuttipongPromsakaNaSakolnakorn华森·波克彭...2010泰国剧情喜剧爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1302827/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p792257137.jpg',
    影片中文名: '人工智能',
    影片外国名: '  Artificial Intelligence: AI',
    评分: '8.7',
    评分数: '436288',
    概况: '对爱的执着，可以超越一切',
    相关信息:
      '导演:史蒂文·斯皮尔伯格StevenSpielberg主演:海利·乔·奥斯蒙Haley...2001美国英国剧情科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1296909/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2399597512.jpg',
    影片中文名: '虎口脱险',
    影片外国名: '  La grande vadrouille',
    评分: '8.9',
    评分数: '251085',
    概况: '永远看不腻的喜剧',
    相关信息:
      '导演:杰拉尔·乌里GérardOury主演:路易·德·菲耐斯LouisdeFunès...1966法国英国喜剧战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/5300054/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg',
    影片中文名: '波西米亚狂想曲',
    影片外国名: '  Bohemian Rhapsody',
    评分: '8.6',
    评分数: '590884',
    概况: ' ',
    相关信息:
      '导演:布莱恩·辛格BryanSinger主演:拉米·马雷克RamiMalek本·哈...2018英国美国剧情传记同性音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1303394/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2570901292.jpg',
    影片中文名: '青蛇',
    影片外国名: ' ',
    评分: '8.6',
    评分数: '513070',
    概况: '人生如此，浮生如斯谁人言，花彼岸，此生情长意短谁都是不懂爱的罢了',
    相关信息:
      '导演:徐克HarkTsui主演:张曼玉MaggieCheung王祖贤JoeyWang...1993中国香港中国大陆剧情爱情奇幻古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291844/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910909085.jpg',
    影片中文名: '终结者2：审判日',
    影片外国名: '  Terminator 2: Judgment Day',
    评分: '8.8',
    评分数: '335199',
    概况: '少见的超越首部的续集，动作片中的经典',
    相关信息:
      '导演:詹姆斯·卡梅隆JamesCameron主演:阿诺·施瓦辛格ArnoldSchwarz...1991美国法国动作科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291879/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1598883511.jpg',
    影片中文名: '罗生门',
    影片外国名: '  羅生門',
    评分: '8.8',
    评分数: '307572',
    概况: '人生的N种可能性',
    相关信息:
      '导演:黑泽明AkiraKurosawa主演:三船敏郎ToshirôMifune京町子...1950日本剧情犯罪悬疑',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293318/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2237136718.jpg',
    影片中文名: '萤火虫之墓',
    影片外国名: '  火垂るの墓',
    评分: '8.7',
    评分数: '399336',
    概况: '幸福是生生不息，却难以触及的远 ',
    相关信息:
      '导演:高畑勋IsaoTakahata主演:辰己努白石绫乃志乃原良子1988日本动画剧情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3592854/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2236181653.jpg',
    影片中文名: '疯狂的麦克斯4：狂暴之路',
    影片外国名: '  Mad Max: Fury Road',
    评分: '8.7',
    评分数: '516241',
    概况: '“多么美好的一天！”轰轰轰砰咚，啪哒哒哒轰隆隆，磅~',
    相关信息:
      '导演:乔治·米勒GeorgeMiller主演:汤姆·哈迪TomHardy查理兹·塞...2015澳大利亚美国动作科幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1292287/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1421018669.jpg',
    影片中文名: '新龙门客栈',
    影片外国名: '  新龍門客棧',
    评分: '8.7',
    评分数: '433932',
    概况: '嬉笑怒骂，调风动月',
    相关信息:
      '导演:李惠民RaymondLee主演:张曼玉MaggieCheung林青霞Brigitte...1992中国香港中国大陆动作爱情武侠古装',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1300117/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2195672555.jpg',
    影片中文名: '千钧一发',
    影片外国名: '  Gattaca',
    评分: '8.8',
    评分数: '289874',
    概况: '一部能引人思考的科幻励志片',
    相关信息:
      '导演:安德鲁·尼科尔AndrewNiccol主演:伊桑·霍克EthanHawke乌玛...1997美国剧情科幻惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26787574/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg',
    影片中文名: '奇迹男孩',
    影片外国名: '  Wonder',
    评分: '8.6',
    评分数: '543471',
    概况: '世界不完美，爱会有奇迹',
    相关信息:
      '导演:斯蒂芬·卓博斯基StephenChbosky主演:雅各布·特伦布莱JacobTr...2017美国中国香港剧情儿童家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1438652/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1086394013.jpg',
    影片中文名: '无耻混蛋',
    影片外国名: '  Inglourious Basterds',
    评分: '8.6',
    评分数: '464997',
    概况: '昆汀同学越来越变态了，比北野武还杜琪峰',
    相关信息:
      '导演:昆汀·塔伦蒂诺QuentinTarantino主演:布拉德·皮特BradPitt...2009德国美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1959877/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2627847859.jpg',
    影片中文名: '崖上的波妞',
    影片外国名: '  崖の上のポニョ',
    评分: '8.6',
    评分数: '482446',
    概况: ' ',
    相关信息:
      '导演:宫崎骏HayaoMiyazaki主演:奈良柚莉爱YuriaNara土井洋辉Hir...2008日本动画奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/26430107/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2457609817.jpg',
    影片中文名: '二十二',
    影片外国名: ' ',
    评分: '8.7',
    评分数: '287554',
    概况: '有一些东西不应该被遗忘',
    相关信息: '导演:郭柯KeGuo主演:2015中国大陆纪录片',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1291992/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p1910924635.jpg',
    影片中文名: '末路狂花',
    影片外国名: '  Thelma & Louise',
    评分: '8.9',
    评分数: '244878',
    概况: '没有了退路，只好飞向自由',
    相关信息:
      '导演:雷德利·斯科特RidleyScott主演:吉娜·戴维斯GeenaDavis苏...1991美国英国法国犯罪剧情惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25807345/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2187896734.jpg',
    影片中文名: '彗星来的那一夜',
    影片外国名: '  Coherence',
    评分: '8.5',
    评分数: '564051',
    概况: '小成本大魅力',
    相关信息:
      '导演:詹姆斯·沃德·布柯特JamesWardByrkit主演:艾米丽·芭尔多尼Em...2013美国英国科幻悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1304141/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443461390.jpg',
    影片中文名: '黑客帝国2：重装上阵',
    影片外国名: '  The Matrix Reloaded',
    评分: '8.7',
    评分数: '398252',
    概况: '一个精彩的世界观正在缓缓建立',
    相关信息:
      '导演:拉娜·沃卓斯基LanaWachowski莉莉·沃卓斯基LillyWachowski...2003美国动作科幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1428175/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1244017073.jpg',
    影片中文名: '血钻',
    影片外国名: '  Blood Diamond',
    评分: '8.7',
    评分数: '372552',
    概况: '每个美丽事物背后都是滴血的现实',
    相关信息:
      '导演:爱德华·兹威克EdwardZwick主演:莱昂纳多·迪卡普里奥Leonardo...2006美国德国英国剧情惊悚冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25724855/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2259715855.jpg',
    影片中文名: '房间',
    影片外国名: '  Room',
    评分: '8.8',
    评分数: '363340',
    概况: '被偷走的岁月，被伤害的生命，被禁锢的灵魂，终将被希望和善意救赎',
    相关信息:
      '导演:伦尼·阿伯拉罕森LennyAbrahamson主演:布丽·拉尔森BrieLarson...2015爱尔兰加拿大英国美国剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/34874432/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2868462052.jpg',
    影片中文名: '花束般的恋爱',
    影片外国名: '  花束みたいな恋をした',
    评分: '8.6',
    评分数: '592309',
    概况: ' ',
    相关信息:
      '导演:土井裕泰NobuhiroDoi主演:菅田将晖MasakiSuda有村架纯Kasu...2021日本剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25934014/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2395517414.jpg',
    影片中文名: '爱乐之城',
    影片外国名: '  La La Land',
    评分: '8.4',
    评分数: '873494',
    概况: ' ',
    相关信息:
      '导演:达米恩·查泽雷DamienChazelle主演:瑞恩·高斯林RyanGosling...2016美国剧情爱情歌舞',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1419936/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p792282381.jpg',
    影片中文名: '战争之王',
    影片外国名: '  Lord of War',
    评分: '8.7',
    评分数: '360638',
    概况: '做一颗让别人需要你的棋子',
    相关信息:
      '导演:安德鲁·尼科尔AndrewNiccol主演:尼古拉斯·凯奇NicolasCage...2005法国德国美国剧情犯罪',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2222996/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2375245718.jpg',
    影片中文名: '步履不停',
    影片外国名: '  歩いても 歩いても',
    评分: '8.8',
    评分数: '273446',
    概况: '日本的家庭电影已经是世界巅峰了，步履不停是巅峰中的佳作',
    相关信息:
      '导演:是枝裕和HirokazuKoreeda主演:阿部宽HiroshiAbe夏川结衣Yu...2008日本剧情家庭',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1293964/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2351134499.jpg',
    影片中文名: '魂断蓝桥',
    影片外国名: '  Waterloo Bridge',
    评分: '8.8',
    评分数: '272632',
    概况: '中国式内在的美国电影',
    相关信息:
      '导演:茂文·勒鲁瓦MervynLeRoy主演:费雯·丽VivienLeigh罗伯特·...1940美国剧情爱情战争',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/25864085/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2280097442.jpg',
    影片中文名: '火星救援',
    影片外国名: '  The Martian',
    评分: '8.5',
    评分数: '711005',
    概况: ' ',
    相关信息:
      '导演:雷德利·斯科特RidleyScott主演:马特·达蒙MattDamon杰西卡...2015英国美国匈牙利约旦剧情科幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1297880/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2575337180.jpg',
    影片中文名: '芙蓉镇',
    影片外国名: ' ',
    评分: '9.3',
    评分数: '129577',
    概况: ' ',
    相关信息:
      '导演:谢晋JinXie主演:刘晓庆XiaoqingLiu姜文WenJiang郑在石...1987中国大陆剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2051007/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p719849995.jpg',
    影片中文名: '哈利·波特与死亡圣器(上)',
    影片外国名: '  Harry Potter and the Deathly Hallows: Part 1',
    评分: '8.5',
    评分数: '557413',
    概况: '最忠于原著的一部',
    相关信息:
      '导演:大卫·叶茨DavidYates主演:丹尼尔·雷德克里夫DanielRadcliffe...2010英国美国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1308767/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p667644866.jpg',
    影片中文名: '谍影重重2',
    影片外国名: '  The Bourne Supremacy',
    评分: '8.7',
    评分数: '344930',
    概况: '谁说王家卫镜头很晃？',
    相关信息:
      '导演:保罗·格林格拉斯PaulGreengrass主演:马特·达蒙MattDamon...2004美国德国动作悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1307394/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2215102596.jpg',
    影片中文名: '千年女优',
    影片外国名: '  千年女優',
    评分: '8.8',
    评分数: '259392',
    概况: '爱情是一场没有尽头的虚幻追逐',
    相关信息:
      '导演:今敏SatoshiKon主演:庄司美代子MiyokoShôji小山茉美Mam...2001日本动画剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1305690/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2525770523.jpg',
    影片中文名: '阿飞正传',
    影片外国名: '  阿飛正傳',
    评分: '8.5',
    评分数: '500932',
    概况: '王家卫是一种风格，张国荣是一个代表',
    相关信息:
      '导演:王家卫KarWaiWong主演:张国荣LeslieCheung张曼玉MaggieC...1990中国香港犯罪剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1295865/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2797313535.jpg',
    影片中文名: '燃情岁月',
    影片外国名: '  Legends of the Fall',
    评分: '8.8',
    评分数: '281355',
    概况: '传奇，不是每个人都可以拥有',
    相关信息:
      '导演:爱德华·兹威克EdwardZwick主演:布拉德·皮特BradPitt安东...1994美国剧情爱情战争西部',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3552028/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2577248102.jpg',
    影片中文名: '弱点',
    影片外国名: '  The Blind Side',
    评分: '8.7',
    评分数: '299424',
    概况: '拍掉身上的悲伤，从今天开始重新踏上追梦之旅',
    相关信息:
      '导演:约翰·李·汉考克JohnLeeHancock主演:桑德拉·布洛克SandraBu...2009美国剧情家庭传记运动',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1304102/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p1597183981.jpg',
    影片中文名: '谍影重重',
    影片外国名: '  The Bourne Identity',
    评分: '8.6',
    评分数: '416622',
    概况: '哗啦啦啦啦，天在下雨，哗啦啦啦啦，云在哭泣……找自己',
    相关信息:
      '导演:道格·里曼DougLiman主演:马特·达蒙MattDamon弗兰卡·波坦...2002美国德国捷克动作悬疑惊悚',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2213597/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p1140984198.jpg',
    影片中文名: '朗读者',
    影片外国名: '  The Reader',
    评分: '8.6',
    评分数: '447533',
    概况: '当爱情跨越年龄的界限，它似乎能变得更久远一点，成为一种责任，一种水到渠成的相濡以沫 ',
    相关信息:
      '导演:史蒂芬·戴德利StephenDaldry主演:凯特·温丝莱特KateWinslet...2008美国德国剧情爱情',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/6874403/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2250287733.jpg',
    影片中文名: '再次出发之纽约遇见你',
    影片外国名: '  Begin Again',
    评分: '8.6',
    评分数: '419717',
    概况: '爱我就给我看你的播放列表',
    相关信息:
      '导演:约翰·卡尼JohnCarney主演:凯拉·奈特莉KeiraKnightley马克...2013美国喜剧爱情音乐',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1760622/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2571500223.jpg',
    影片中文名: '香水',
    影片外国名: '  Perfume: The Story of a Murderer',
    评分: '8.5',
    评分数: '535563',
    概况: '一个单凭体香达到高潮的男人',
    相关信息:
      '导演:汤姆·提克威TomTykwer主演:本·卫肖BenWhishaw艾伦·瑞克...2006德国法国西班牙美国比利时剧情犯罪奇幻',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1457217/',
    图片链接:
      'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p443403700.jpg',
    影片中文名: '哈利·波特与凤凰社',
    影片外国名: '  Harry Potter and the Order of the Phoenix',
    评分: '8.5',
    评分数: '549378',
    概况: ' ',
    相关信息:
      '导演:大卫·叶茨DavidYates主演:丹尼尔·雷德克里夫DanielRadcliffe...2007英国美国奇幻冒险',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/3443389/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2559581324.jpg',
    影片中文名: '海洋',
    影片外国名: '  Océans',
    评分: '9.1',
    评分数: '154911',
    概况: '大海啊，不全是水',
    相关信息:
      '导演:雅克·贝汉JacquesPerrin雅克·克鲁奥德JacquesCluzaud主演:...2009法国瑞士西班牙美国阿联酋摩纳哥纪录片',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/1937946/',
    图片链接:
      'https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2079334286.jpg',
    影片中文名: '穿越时空的少女',
    影片外国名: '  時をかける少女',
    评分: '8.6',
    评分数: '375123',
    概况: '爱上未来的你 ',
    相关信息:
      '导演:细田守MamoruHosoda主演:仲里依纱RiisaNaka石田卓也Takuya...2006日本剧情爱情科幻动画',
  },
  {
    电影详情链接: 'https://movie.douban.com/subject/2133323/',
    图片链接:
      'https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2160195181.jpg',
    影片中文名: '白日梦想家',
    影片外国名: '  The Secret Life of Walter Mitty',
    评分: '8.6',
    评分数: '451247',
    概况: ' ',
    相关信息:
      '导演:本·斯蒂勒BenStiller主演:本·斯蒂勒BenStiller克里斯汀·...2013美国英国剧情喜剧冒险',
  },
];

module.exports = info;
