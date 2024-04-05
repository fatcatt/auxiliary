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
    '给我三分钟，展现真技术',
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
            recommend: '品茗赏茶',
            effectList: ['提神醒脑', '享受生活']
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
            recommend: '观赏鱼缸',
            effectList: ['视觉享受', '心情平和']
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
