// 今日美食
const foods = {
    mu: {
        recomList: ['青菜', '菠菜', '韭菜', '苹果', '绿豆', '葡萄', '梨', '西兰花', '绿茶', '小麦', '香蕉', '芹菜'],
        effectList: ['养肝', '明目', '疏风', '活血', '解毒']
    },
    huo: {
        recomList: ['红豆', '胡萝卜', '番茄', '红枣', '草莓', '红辣椒', '樱桃', '红心火龙果', '枸杞', '西红柿', '桃子', '辣椒'],
        effectList: ['养心', '暖身', '提神', '助睡', '活络']
    },
    tu: {
        recomList: ['土豆', '南瓜', '芋头', '黄豆', '玉米', '红薯', '花生', '大麦', '小米', '莲藕', '板栗', '香菇'],
        effectList: ['健脾', '补中', '养血', '和胃', '除湿']
    },
    jin: {
        recomList: ['白菜', '大白菜', '萝卜', '梨', '百合', '银耳', '白木耳', '莲子', '冬瓜', '大蒜', '洋葱', '菜花'],
        effectList: ['润肺', '清热', '宣肺气', '降火', '排毒']
    },
    shui: {
        recomList: ['黑豆', '黑米', '黑芝麻', '海带', '海苔', '紫菜', '黑木耳', '桑葚', '蓝莓', '水蜜桃', '黑莓', '龙眼'],
        effectList: ['养肾', '滋阴', '排毒', '润燥', '强身']
    }
};
// 沟通指南
const communicates = [
    '我来carry全场',
    '任务完成·下班',
    '一言不合就开会',
    '碰壁了，求支援',
    '给我3分钟, 展现真技术',
    '别急，我正在加速',
    '全员冲刺，目标看齐',
    '拒绝虚假，我来实锤',
    '有问题？来找我',
    '汇报进度，保持联络',
    '收到，立刻执行',
    '求助信号，发送中',
    '头脑风暴，现在开始',
    '团队集结，准备出发',
    '灵感来了，速速记录',
    '目标明确',
    '决策驱动',
    '节约时刻',
    '创意无限',
    '快速响应'
];
// 今日适宜
const suitables = {
    mu: [
        {
            recommend: '做手工',
            effectList: ['调节生活情趣', '创造高质量作品']
        },
        {
            recommend: '做眼保健操',
            effectList: ['护眼大使', '休息一刻']
        },
        {
            recommend: '练习书法',
            effectList: ['提升审美', '稳定情绪']
        },
        {
            recommend: '户外散步',
            effectList: ['接触自然', '舒缓压力']
        },
        {
            recommend: '观赏绿植',
            effectList: ['净化空气', '美化环境']
        },
        {
            recommend: '练习太极',
            effectList: ['身心平衡', '增强体魄']
        },
        {
            recommend: '户外活动',
            effectList: ['享受大自然', '放松心情']
        },
        {
            recommend: '团队建设',
            effectList: ['增强团队', '合作精神']
        },
        {
            recommend: '健康检查',
            effectList: ['关注身体健康', '预防疾病']
        },
        {
            recommend: '体育锻炼',
            effectList: ['增强体质', '释放压力']
        },
        {
            recommend: '整理规划',
            effectList: ['提升效率', '完成棘手任务']
        },
        {
            recommend: '细致复盘',
            effectList: ['确保每一个细节', '得到充分准备']
        },
        {
            recommend: '目标规划',
            effectList: ['清晰的目标', '有效完成任务']
        },
        {
            recommend: '瑜伽练习',
            effectList: ['提高柔韧', '心灵平和']
        },
        {
            recommend: '园艺活动',
            effectList: ['亲近土地', '减压养心']
        },
        {
            recommend: '烹饪美食',
            effectList: ['享受美味', '增进家庭和睦']
        },
        {
            recommend: '收集标本',
            effectList: ['增长见识', '锻炼观察能力']
        }
    ],
    huo: [
        {
            recommend: '社交活动',
            effectList: ['拓宽人际', '增进友谊']
        },
        {
            recommend: '听音乐',
            effectList: ['放松心情', '激发灵感']
        },
        {
            recommend: '参加舞蹈',
            effectList: ['身体协调', '情绪释放']
        },
        {
            recommend: '瑜伽练习',
            effectList: ['提高柔韧', '心灵平和']
        },
        {
            recommend: '晒太阳',
            effectList: ['补充维D', '增强骨骼']
        },
        {
            recommend: '情感交流',
            effectList: ['让每一次相遇', '都成为美好的经历']
        },
        {
            recommend: '品茗赏茶',
            effectList: ['提神醒脑', '享受生活']
        },
        {
            recommend: '创新探求',
            effectList: ['发挥想象力', '探索应对之道']
        },
        {
            recommend: '交流探讨',
            effectList: ['与同行交流心得', '相互学习进步']
        },
        {
            recommend: '志愿服务',
            effectList: ['奉献爱心', '体验助人之乐']
        },
        {
            recommend: '积极表现',
            effectList: ['创意和想法', '易得到支持']
        }
    ],
    tu: [
        {
            recommend: '园艺活动',
            effectList: ['亲近土地', '减压养心']
        },
        {
            recommend: '制作陶艺',
            effectList: ['手工艺术', '情感寄托']
        },
        {
            recommend: '烹饪美食',
            effectList: ['享受美味', '增进家庭和睦']
        },
        {
            recommend: '写日记',
            effectList: ['自我反省', '记录生活']
        },
        {
            recommend: '阅读书籍',
            effectList: ['知识增长', '心灵滋养']
        },
        {
            recommend: '种植蔬菜',
            effectList: ['享受收获', '健康饮食']
        },
        {
            recommend: '家庭团聚',
            effectList: ['共度愉快时光', '增进亲情']
        }
    ],
    jin: [
        {
            recommend: '练习呼吸法',
            effectList: ['肺部锻炼', '气血流通']
        },
        {
            recommend: '秋季登山',
            effectList: ['呼吸新鲜空气', '促进血液循环']
        },
        {
            recommend: '收集标本',
            effectList: ['增长见识', '锻炼观察能力']
        },
        {
            recommend: '观察天象',
            effectList: ['拓展视野', '理解自然规律']
        },
        {
            recommend: '清洁整理',
            effectList: ['环境美化', '心情愉悦']
        },
        {
            recommend: '练习吹奏乐器',
            effectList: ['呼吸控制', '艺术享受']
        },
        {
            recommend: '探索',
            effectList: ['尝试新鲜事物', '拓展视野']
        },
        {
            recommend: '技能训练',
            effectList: ['提升专业水准', '占据竞争优势']
        },
        {
            recommend: '新挑战',
            effectList: ['促进个人成长', '助力职业发展']
        },
        {
            recommend: '尝试新事物',
            effectList: ['为生活', '添上一件新体验']
        }
    ],
    shui: [
        {
            recommend: '游泳锻炼',
            effectList: ['增强体质', '促进血液循环']
        },
        {
            recommend: '冥想放松',
            effectList: ['心灵深处的平静', '提升专注力']
        },
        {
            recommend: '夜间散步',
            effectList: ['安静思考', '释放压力']
        },
        {
            recommend: '钓鱼活动',
            effectList: ['耐心修炼', '享受宁静']
        },
        {
            recommend: '水疗SPA',
            effectList: ['身体放松', '美容养颜']
        },
        {
            recommend: '水疗SPA',
            effectList: ['拓展知识领域', '提升专业技能']
        },
        {
            recommend: '观赏鱼缸',
            effectList: ['视觉享受', '心情平和']
        },
        {
            recommend: '理财规划',
            effectList: ['合理分配', '为未来做好准备']
        },
        {
            recommend: '练习呼吸法',
            effectList: ['肺部锻炼', '气血流通']
        }
    ]
};
// 今日忌讳
const toboos = {
    mu: [
        {
            recommend: '剧烈运动',
            effectList: ['易导致身体过劳', '而后疲惫不堪']
        },
        {
            recommend: '过度用脑',
            effectList: ['思维负担加重', '难以安心休息']
        },
        {
            recommend: '深夜加班',
            effectList: ['损害肝气', '影响第二日状态']
        },
        {
            recommend: '快速决策',
            effectList: ['未经深思熟虑', '可能后悔莫及']
        },
        {
            recommend: '频繁社交',
            effectList: ['消耗心神', '易感疲惫']
        },
        {
            recommend: '冷食冷饮',
            effectList: ['伤及脾胃', '导致消化不良']
        },
        {
            recommend: '搬家',
            effectList: ['易受外界干扰', '加强稳定性']
        },
        {
            recommend: '剧烈运动',
            effectList: ['易导致肝气过盛', '反而伤及筋骨']
        },
        {
            recommend: '表白',
            effectList: ['注意情绪波动大', '导致反而疏远']
        },
        {
            recommend: '固步自封',
            effectList: ['勇于尝试', '看看新的方法！']
        },
        {
            recommend: '过度工作',
            effectList: ['肝气郁滞', '站起来活动活动']
        }
    ],
    huo: [
        {
            recommend: '高强度辩论',
            effectList: ['情绪易激动', '火上浇油']
        },
        {
            recommend: '午后小睡',
            effectList: ['打乱生物钟', '夜晚难以入睡']
        },
        {
            recommend: '过量饮酒',
            effectList: ['损伤心脏', '情绪失控']
        },
        {
            recommend: '暴晒于阳光下',
            effectList: ['火气上升', '皮肤受损']
        },
        {
            recommend: '辛辣食物',
            effectList: ['刺激胃黏膜', '加剧内火']
        },
        {
            recommend: '情绪压抑',
            effectList: ['内心烦躁', '影响身心健康']
        },
        {
            recommend: '轻信他人',
            effectList: ['警惕', '可能存在小人']
        },
        {
            recommend: '强行谈判',
            effectList: ['改日再谈', '会有更好的结果']
        },
        {
            recommend: '刷淘宝',
            effectList: ['避免不必要的开支', '节约大使！']
        },
        {
            recommend: '牢骚大侠',
            effectList: ['拒绝负能量', '提升合作氛围']
        }
    ],
    tu: [
        {
            recommend: '贪吃零食',
            effectList: ['伤害脾胃', '导致消化不良']
        },
        {
            recommend: '久坐不动',
            effectList: ['气血不畅', '增加体重负担']
        },
        {
            recommend: '过度节食',
            effectList: ['营养不足', '身体虚弱']
        },
        {
            recommend: '拖延病情',
            effectList: ['错过治疗时机', '病情加重']
        },
        {
            recommend: '忽视家人',
            effectList: ['家庭关系疏远', '心灵缺失支柱']
        },
        {
            recommend: '过度消费',
            effectList: ['经济压力大', '心理负担重']
        },
        {
            recommend: '长时间静坐',
            effectList: ['易生湿', '身体受损']
        },
        {
            recommend: '忽略家庭',
            effectList: ['记得注重归属', '提防关系变得疏远']
        },
        {
            recommend: '冷战',
            effectList: ['不要冷战', '沟通障碍加剧']
        },
        {
            recommend: '刷淘宝',
            effectList: ['避免不必要的开支', '节约大使！']
        },
        {
            recommend: '目光无人',
            effectList: ['倾听他人意见', '有助于完善计划']
        },
        {
            recommend: '贪食碳水',
            effectList: ['小心腹胀～', '合理膳食']
        },
        {
            recommend: '过度依赖',
            effectList: ['打起精神', '应对困难的能力']
        },
        {
            recommend: '避免',
            effectList: ['注意工作效率', '方可早点下班']
        }
    ],
    jin: [
        {
            recommend: '冷战',
            effectList: ['不要冷战', '沟通障碍加剧']
        },
        {
            recommend: '过分批评',
            effectList: ['勿要过分严苛', '可能造成隔阂']
        },
        {
            recommend: '拖延',
            effectList: ['事情将成', '不要遗漏细节']
        },
        {
            recommend: '冒险行为',
            effectList: ['行事需稳', '冒险易受伤']
        },
        {
            recommend: '过度整理',
            effectList: ['追求完美累积压力', '反而忽略生活乐趣']
        },
        {
            recommend: '忽视身体',
            effectList: ['注意忙碌', '易生呼吸系统疾病']
        },
        {
            recommend: '忽略细节',
            effectList: ['避免因小失误', '影响结果']
        },
        {
            recommend: '高调行事',
            effectList: ['保持低调', '避免不必要麻']
        },
        {
            recommend: '固执己见',
            effectList: ['保持谦逊', '避免过于傲气']
        },
        {
            recommend: '过度依赖',
            effectList: ['打起精神', '应对困难的能力']
        },
        {
            recommend: '拖延症',
            effectList: ['注意工作效率', '方可早点下班']
        }
    ],
    shui: [
        {
            recommend: '孤独生活',
            effectList: ['易孤僻', '缺乏人际交流']
        },
        {
            recommend: '过度沉思',
            effectList: ['勿忧郁', '心情或变得消极']
        },
        {
            recommend: '长期宅家',
            effectList: ['加强运动', '提防身心状态下降']
        },
        {
            recommend: '情绪潮湿',
            effectList: ['不宜过分内敛', '易形成情绪问题']
        },
        {
            recommend: '逃避问题',
            effectList: ['面对困难需勇气', '逃避不是解决之道']
        },
        {
            recommend: '畅所欲言',
            effectList: ['避免沟通不畅', '而错失机会']
        },
        {
            recommend: '贪食冷饮',
            effectList: ['脾胃虚寒', '要做逃冰！']
        },
        {
            recommend: '消息情绪',
            effectList: ['影响心情', '影响决策']
        }
    ]
};
const GANWUXING = new Map([
    ['甲', {mu: 1, tu: -0.1}],
    ['乙', {mu: 1, tu: -0.1}],
    ['丙', {huo: 1, jin: -0.1}],
    ['丁', {huo: 1, jin: -0.1}],
    ['戊', {tu: 1, shui: -0.1}],
    ['己', {tu: 1, shui: -0.1}],
    ['庚', {jin: 1, mu: -0.1}],
    ['辛', {jin: 1, mu: -0.1}],
    ['壬', {shui: 1, huo: -0.1}],
    ['癸', {shui: 1, huo: -0.1}]
]);
const ZHIWUXING = new Map([
    ['子', {shui: 1}],
    ['丑', {tu: 0.6, shui: 0.5, jin: 0.1}],
    ['寅', {mu: 0.8, huo: 0.2, tu: 0.2}],
    ['卯', {mu: 1}],
    ['辰', {tu: 0.6, mu: 0.2, shui: 0.1}],
    ['巳', {huo: 0.8, tu: 0.4, jin: 0.2}],
    ['午', {huo: 0.8, tu: 0.4}],
    ['未', {tu: 0.8, huo: 0.2, mu: 0.1}],
    ['申', {jin: 0.8, shui: 0.4}],
    ['酉', {jin: 1}],
    ['戌', {tu: 0.6, jin: 0.2, huo: 0.1}],
    ['亥', {shui: 0.8, mu: 0.2}]
]);

export {foods, communicates, suitables, toboos, GANWUXING, ZHIWUXING};
