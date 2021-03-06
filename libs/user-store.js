"use strict";

var querystring = require('querystring');
var request = require('request');
var config = require("../libs/config.js");

var userDetails = {
    "carina_ding": {
        "id": 12,
        "name": "Carina 丁澄澄",
        "username": "carina_ding",
        "avatar_template": "/images/avatar/carina_ding.png",
        "bio": "辅导人数150+\n世界500强公司讲师\n国际英文演讲俱乐部资深会员\n热爱旅游  羽毛球\n",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "演讲人教练总监"
    },
    "Cloe": {
        "id": 17,
        "name": "李昕",
        "username": "Cloe",
        "avatar_template": "/images/avatar/Cloe.png",
        "card_background": "/uploads/default/original/1X/7eb49d5fe40ba370f88f4a045a807e0f5e427c16.jpg",
        "bio": "爱吃，爱玩，爱公益，射手座。作为CPT（Community Parter Team)头目，和团队伙伴们一同致力于为TEDxSuzhou的观众提供更好的活动体验，为合作伙伴提供一个更广阔的展示与互动的平台。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "thisiscloeli",
        "email": "cloe.li@tedxsuzhou.com",
        "title": "社区总监"
    },
    "LisaQ": {
        "id": 7,
        "name": "Lisa Qin",
        "username": "LisaQ",
        "avatar_template": "/images/avatar/LisaQ.png",
        "bio": "巨蟹女，关注创新、关注学习与人才发展的可持续性, 组织行为。2014年发起TEDxSuzhouWomen, 喜欢冒险旅行，哲学思考，心理洞察，欣赏艺术。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 40,
                "name": "First Mention",
                "description": "Mentioned a user in a Post",
                "icon": "fa-certificate",
                "type": 3
            },
            {
                "id": 41,
                "name": "First Emoji",
                "description": "Used an Emoji in a Post",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "linkedin": "https://www.linkedin.com/in/lisa-qin-8500aa29?trk=nav_responsive_tab_profile_pic",
        "weibo": "http://weibo.com/1600116827/profile?topnav=1&wvr=6&is_all=1",
        "wechat": "qinli0702",
        "email": "lisa@tedxsuzhou.com",
        "title": "制作总监"
    },
    "jade": {
        "id": 2,
        "name": "Jade",
        "username": "jade",
        "avatar_template": "/images/avatar/jade.png",
        "card_background": "/uploads/default/original/1X/da78c48921c07e08757a23ab7c8646300551c485.jpg",
        "bio": "一个未来学习者，始终保持好奇心，热爱科技、教育，认为TEDx是未来学习的最好实践。",
        "website": "http://tedxsuzhou.com",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/jade-zhao-2b33a611",
        "weibo": "http://weibo.com/1857972832/profile?topnav=1&wvr=6&is_all=1",
        "wechat": "jade4095936",
        "email": "jade@tedxsuzhou.com",
        "title": "TEDxSuzhou发起人"
    },
    "maohuicoco": {
        "id": 31,
        "name": "毛惠Coco Mao",
        "username": "maohuicoco",
        "avatar_template": "/images/avatar/maohuicoco.png",
        "bio": "TEDxSuzhou演讲人助理。苏州大学会计学在读，“外研社”杯英语演讲大赛国奖，2015APEC峰会中国青年代表。曾公派赴哈佛学习。不能更典型水瓶座，对真善美永保热忱。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/maohuicoco",
        "weibo": "http://weibo.com/u/2065752875",
        "wechat": "maohuicocomao",
        "email": "maohuicoco@163.com",
        "title": "演讲人助理"
    },
    "Leo": {
        "id": 40,
        "name": "Leo Zhao",
        "username": "Leo",
        "avatar_template": "/images/avatar/Leo.png",
        "bio": "西交利物浦大学 城市规划与设计在读研究生一枚 爱好国画、摄影、设计、阅读以及视频编排制作",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "weibo": "http://weibo.com/2250716851/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1",
        "wechat": "zyyleo1992",
        "email": "Leo.Zhao@TEDxSuzhou.com",
        "title": "设计师 "
    },
    "maschenxi": {
        "id": 19,
        "name": "Matthew Chen",
        "username": "maschenxi",
        "avatar_template": "/images/avatar/maschenxi.png",
        "card_background": "/uploads/default/original/1X/4874138bacc75ccac559843975d4a5c632a17a52.jpeg",
        "bio": "天秤座，逻辑控，不知何时起对于生活产生了这样一种理念\"to live is to see this world\"。目前深耕于制造业，虽谈不上不喜欢，但深信制造业的价值被这个膨胀的社会所忽视。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "linkedin": "http://www.linkedin.com/in/wenfeng-chen-487a4a68?trk=nav_responsive_tab_profile_pic",
        "wechat": "maschenxi",
        "title": "演讲人教练"
    },
    "Liana": {
        "id": 16,
        "name": "Liana Liang",
        "username": "Liana",
        "avatar_template": "/images/avatar/Liana.png",
        "bio": "HR，热爱教育，社会公益与组织人力发展，关注女性及性少数的发展。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 41,
                "name": "First Emoji",
                "description": "Used an Emoji in a Post",
                "icon": "fa-certificate",
                "type": 3
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "title": "团队管理总监"
    },
    "sunny_pan": {
        "id": 10,
        "name": "Sunny Pan",
        "username": "sunny_pan",
        "avatar_template": "/images/avatar/sunny_pan.png",
        "bio": "TEDxSuzhou团队管理总监，营销学博士，擅长数据分析和心理学，禅修推动者和修习者，致力于通过商业手段解决社会问题",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 41,
                "name": "First Emoji",
                "description": "Used an Emoji in a Post",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "title": "团队管理总监"
    },
    "Wensi": {
        "id": 6,
        "name": "Wensi Zhang",
        "username": "Wensi",
        "avatar_template": "/images/avatar/Wensi.png",
        "bio": "爱设计且爱自由的外星人幸运地在包容心巨大的TEDxSuzhou找到了栖身之所。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "title": "品牌营销总监"
    },
    "Alex": {
        "id": 28,
        "name": "Alex He",
        "username": "Alex",
        "avatar_template": "/images/avatar/Alex.png",
        "bio": "TED OTP项目志愿者，热衷于MOOC学习，了解新鲜事物。爱好阅读，徒步运动，平时有空也会看看美剧，美式脱口秀。玩玩桌游。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/alexhosuzhou",
        "email": "839975402@qq.com",
        "title": "制作助理"
    },
    "alan.zhao": {
        "id": 11,
        "name": "赵博",
        "username": "alan.zhao",
        "avatar_template": "/images/avatar/alan.zhao.png",
        "bio": "世界那么大，人生那么短，令自己处于开心的状态，选择一个不累的生活态度吧!",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 42,
                "name": "First Onebox",
                "description": "Posted a link that was oneboxed",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "wechat": "333509128",
        "email": "alan.zhao@tedxsuzhou.com",
        "title": "品牌与市场部总监"
    },
    "FrancisLiu": {
        "id": 43,
        "name": "刘鹏",
        "username": "FrancisLiu",
        "avatar_template": "/images/avatar/FrancisLiu.png",
        "bio": "EHS工程师，环保主义实践者，美食狂热爱好者，爱旅行，爱潜水，爱这个枝繁叶茂的美好世界，世界那么大，定要好好地去看看！",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "Leoliupeng ",
        "title": "活动助理"
    },
    "ziheng.zhang": {
        "id": 51,
        "name": "Ziheng Zhang",
        "username": "ziheng.zhang",
        "avatar_template": "/images/avatar/ziheng.zhang.png",
        "bio": "西交利物浦大二计算机专业学生，热爱生活，热爱TED，希望可以通过TEDxYouth的平台传播出更多有价值的思想！",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "https://www.linkedin.com/profile/view?id=379548121",
        "weibo": "http://weibo.com/u/2921440265",
        "wechat": "zhangziheng0925",
        "email": "ziheng.zhang@tedxsuzhou.com",
        "title": "TEDxYouth@Suzhou联合策展人"
    },
    "JessicaJ": {
        "id": 44,
        "name": "Jessica Jiang",
        "username": "JessicaJ",
        "avatar_template": "/images/avatar/JessicaJ.png",
        "bio": "爱书爱旅行爱音乐剧。身处俗世，心系诗和远方。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "市场助理"
    },
    "aegean_xia": {
        "id": 38,
        "name": "夏仲文 Aegean Xia",
        "username": "aegean_xia",
        "avatar_template": "/images/avatar/aegean_xia.png",
        "bio": "TEDxSuzhou物料管理和国际组成员，曾在挪威就读工业物流理学硕士学位，致力于本地海归社区的发展。高级企业风险内控师，热爱瑜伽、旅游",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "email": "aegean.xia@tedxsuzhou.com",
        "title": "社区主管"
    },
    "a369369": {
        "id": 32,
        "name": "陈宇哲 Evan ",
        "username": "a369369",
        "avatar_template": "/images/avatar/a369369.png",
        "bio": "主修给排水科学与工程专业。大二曾创办并运营针对大学生的“璞真青年游学营”。喜欢游泳，旅行，看电影，对未来充满希望,希望每天都生活的多姿多彩。\n",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "cyz-511",
        "email": "740821877@qq.com",
        "title": "运营助理"
    },
    "lulia": {
        "id": 49,
        "name": "陆晓曈Lulia Lu",
        "username": "lulia",
        "avatar_template": "/images/avatar/lulia.png",
        "bio": "苏州大学信息资源管理专业二年级，文字上的杂食动物，图像里的素食主义。正在关注亚文化领域，努力做出一条与众不同的小裙子。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            },
            {
                "id": 41,
                "name": "First Emoji",
                "description": "Used an Emoji in a Post",
                "icon": "fa-certificate",
                "type": 3
            }
        ],
        "title": "演讲人助理"
    },
    "Alice": {
        "id": 48,
        "name": "Alice Yu",
        "username": "Alice",
        "avatar_template": "/images/avatar/Alice.png",
        "bio": "专注未来活在当下的理想主义现实者, 游走于理性和感性中的自由思考者, 践行纳新融旧的乐活传播者",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "Alice.Yu@ul.com",
        "wechat": "Reimagination",
        "email": "Redmission2013@yahoo.com",
        "title": "活动主管"
    },
    "Coney": {
        "id": 34,
        "name": "Coney Sun",
        "username": "Coney",
        "avatar_template": "/images/avatar/Coney.png",
        "bio": "热爱旅行，公益与分享。在外企从事人力资源工作。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "招聘助理"
    },
    "Flora": {
        "id": 22,
        "name": "Flora Pang",
        "username": "Flora",
        "avatar_template": "/images/avatar/Flora.png",
        "bio": "外企HR，人力资源管理师\n爱旅游美食\n喜欢用创新思维点亮生活 \n\n",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "演讲人助理"
    },
    "SherryWoo": {
        "id": 33,
        "name": "吴启梦",
        "username": "SherryWoo",
        "avatar_template": "/images/avatar/SherryWoo.png",
        "bio": "TEDxSuzhou市场助理，曾在美国就读会计及市场营销双学位，热爱电影、原声配乐及摄影。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "市场助理"
    },
    "fangyu": {
        "id": 50,
        "name": "Fangyu Wu",
        "username": "fangyu",
        "avatar_template": "/images/avatar/fangyu.png",
        "bio": "励志成为一名优秀的程序媛同时也是TEDxYouth@Suzhou策展人，我相信青年的力量是无穷的，我们可以改变世界！",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/芳宇-武-245396117",
        "weibo": "http://weibo.com/u/2407534093",
        "wechat": "Q110437",
        "email": "fangyu.wu@tedxsuzhou.com",
        "title": "TEDxYouth@Suzhou策展人"
    },
    "dongda": {
        "id": 27,
        "name": "董达",
        "username": "dongda",
        "avatar_template": "/images/avatar/dongda.png",
        "bio": "拥有一颗好奇心; 在TEDxSuzhou, 同大家一起知行合一，体会分享之美；",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/da-dong-81a80770",
        "email": "dong.da@tedxsuzhou.com",
        "title": " 制作主管"
    },
    "Sheldon": {
        "id": 37,
        "name": "Sheldon Tang",
        "username": "Sheldon",
        "avatar_template": "/images/avatar/Sheldon.png",
        "bio": "人力资源管理专业二年级在读，粗通摄影，没事踢踢球。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "weibo": "http://weibo.com/2582884084/profile?topnav=1&wvr=6&is_all=1",
        "wechat": "Sheldon_Tang1996",
        "email": "sheldon.tang@tedxsuzhou.com",
        "title": "市场助理"
    },
    "Gary": {
        "id": 36,
        "name": "余康睿",
        "username": "Gary",
        "avatar_template": "/images/avatar/Gary.png",
        "bio": "TEDxSuzhou 设计师\n\n设计学硕士，主修视觉传达设计和城市景观设计专业。因为对诸多领域有所了解，所以追求的是爱好广泛和体验多元的生活。\n",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "Gary159_Yukangrui",
        "email": "kangrui.yu@tedxsuzhou.com",
        "title": "总设计师"
    },
    "Lucy": {
        "id": 35,
        "name": "Lucy 陈现在",
        "username": "Lucy",
        "avatar_template": "/images/avatar/Lucy.png",
        "card_background": "/uploads/default/original/1X/048bdf9b8546361ae4fcc5df88ab57273888f136.jpeg",
        "bio": "不增不减，慢慢儿的，活在当下",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "Chenyuehoglucy ",
        "title": "招聘主管"
    },
    "Jackygu": {
        "id": 30,
        "name": "Jacky Gu",
        "username": "Jackygu",
        "avatar_template": "/images/avatar/Jackygu.png",
        "bio": "\nTEDxSuzhou团队管理中负责流程管理，外企从事物流管理工作，同时经营着一家苏帮菜馆，励志把苏帮菜做到极致。爱吃，爱聊，爱生活，这就是我。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "http://www.linkedin.com/home?trk=nav_responsive_tab_home",
        "wechat": "105934438",
        "email": "jacky.gu@tedxsuzhou.com",
        "title": "流程改进主管"
    },
    "Cynthia": {
        "id": 24,
        "name": "Cynthia Zheng",
        "username": "Cynthia",
        "avatar_template": "/images/avatar/Cynthia.png",
        "bio": "一名在自我认知和探索的路上探寻着的普通人,一个想给这个世界传递一份爱的人,一个对世界充满了好奇的人.\n目前是TedxSUZHOU的coach,为社区成员提供公益教练服务.\n",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "http://www.linkedin.com/profile/view?id=AAIAAALkSYYB8ZIfGzAJv-EEAto1lzGdv4kybhQ&trk=nav_responsive_tab_profile",
        "wechat": "cynthia_suzhou",
        "email": "zhenghong0716@126.com",
        "title": "教练"
    },
    "RyanYan": {
        "id": 25,
        "name": "Ryan严燕青",
        "username": "RyanYan",
        "avatar_template": "/images/avatar/RyanYan.png",
        "bio": "作为TEDxSuzhou Operation Team头目，致力于提高TEDx活动的参与感。目前在国内某大数据公司负责市场，热爱新鲜事物，坚持读书与慢跑，希望成为一个深刻而有趣的人。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "title": "运营总监"
    },
    "MelodyLi": {
        "id": 41,
        "name": "Melody Li",
        "username": "MelodyLi",
        "avatar_template": "/images/avatar/MelodyLi.png",
        "bio": "和君商学院学员，新能源行业Salesforce系统顾问兼项目推广人，业余爱好：阅读、旅游。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "mlinlin79",
        "email": "melody.li@tedxsuzhou.com",
        "title": "社区助理  "
    },
    "George": {
        "id": 9,
        "name": "张雉浪",
        "username": "George",
        "avatar_template": "/images/avatar/George.png",
        "card_background": "/uploads/default/original/1X/530d7b379729f5f2e91456b02c7a1442678f0bb8.jpg",
        "bio": "喜欢做公益，创业者，CPT（Community Parter Team）主管，和团队伙伴为TEDxSuzhou的每次活动举办提供坚强的后盾，打造基于本地的全球化社区。",
        "badges": [
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "wechat": "zhangzhilangqh929",
        "email": "george@tedxsuzhou.com",
        "title": "社区主管"
    },
    "CiciTsai": {
        "id": 39,
        "name": "Cici Tsai",
        "username": "CiciTsai",
        "avatar_template": "/images/avatar/CiciTsai.png",
        "card_background": "/uploads/default/original/1X/ad1547ab6ed55a055f136d44e97fd7a45a2246bf.jpg",
        "bio": "TEDxSuzhou 社区主管（社区合作伙伴组）社区赞助商接洽以及关系维护。 \n射手座，热爱生活，积极向上。立志做个小太阳，照亮身边的小伙伴。\n同时，也是 GDG Suzhou 组织者之一。( GDG＝Google Developer Group )",
        "badges": [
            {
                "id": 102,
                "name": "GDG",
                "description": "This guy is a GDG (Google Developer Groups) member.",
                "icon": "fa-google",
                "type": 1
            },
            {
                "id": 100,
                "name": "TEDx 组织者",
                "description": "TEDx 组织者",
                "icon": "fa-users",
                "type": 1
            }
        ],
        "linkedin": "https://cn.linkedin.com/in/tsaicici",
        "weibo": "http://weibo.com/tsaicici",
        "wechat": "cici250684795",
        "email": "tsaicici@tedxsuzhou.com",
        "title": "社区主管"
    }
};
var exportV = {userDetails : userDetails};


module.exports = exportV;