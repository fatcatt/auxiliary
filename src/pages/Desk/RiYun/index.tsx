import React, {useEffect, useState} from 'react';
import {List, Button} from 'antd';
import {Solar, Lunar} from 'lunar-javascript';
import {getCapture} from '../../../api/api';
import {foods, communicates, suitables, toboos, GANWUXING, ZHIWUXING} from '../../../utils/riyunMap';
import './index.scss';

function RiYun() {
    const solarDate = Solar.fromDate(new Date());
    const wuxing = ['mu', 'huo', 'tu', 'jin', 'shui'];
    const wuxingMap = {mu: '木', huo: '火', tu: '土', jin: '金', shui: '水'};
    const [strengthMap, setStrengthMap] = useState({
        mu: {
            use: '',
            unuse: ''
        },
        huo: {
            use: '',
            unuse: ''
        },
        tu: {
            use: '',
            unuse: ''
        },
        jin: {
            use: '',
            unuse: ''
        },
        shui: {
            use: '',
            unuse: ''
        }
    });
    const [riyunInfo, setInfo] = useState({
        mu: {
            foods: {
                recomList: '',
                effectList: ''
            },
            communicates: '',
            suitables: [],
            toboos: []
        },
        huo: {
            foods: {
                recomList: '',
                effectList: ''
            },
            communicates: '',
            suitables: [],
            toboos: []
        },
        tu: {
            foods: {
                recomList: '',
                effectList: ''
            },
            communicates: '',
            suitables: [],
            toboos: []
        },
        jin: {
            foods: {
                recomList: '',
                effectList: ''
            },
            communicates: '',
            suitables: [],
            toboos: []
        },
        shui: {
            foods: {
                recomList: '',
                effectList: ''
            },
            communicates: '',
            suitables: [],
            toboos: []
        }
    });
    var date = Lunar.fromDate(new Date());

    const computedStrength = (param) => {
        const tem = {mu: 0, huo: 0, tu: 0, jin: 0, shui: 0};
        const {monthGan, monthZhi, dayGan, dayZhi} = param;
        for (let [key, value] of Object.entries(GANWUXING.get(monthGan))) {
            tem[key] = tem[key] + value;
        }
        for (let [key, value] of Object.entries(GANWUXING.get(dayGan))) {
            tem[key] = tem[key] + value;
        }
        for (let [key, value] of Object.entries(ZHIWUXING.get(monthZhi))) {
            tem[key] = tem[key] + value * 1.2;
        }
        for (let [key, value] of Object.entries(ZHIWUXING.get(dayZhi))) {
            tem[key] = tem[key] + value;
        }
        return Object.keys(tem).reduce((a, b) => (tem[a] >= tem[b] ? a : b));
    };

    function getRelation(myElement, otherElement) {
        console.log(myElement, otherElement);
        const overcomeSequence = ['jin', 'mu', 'tu', 'shui', 'huo', 'jin'];
        const generateSequence = ['mu', 'huo', 'tu', 'jin', 'shui', 'mu'];

        // 确定关系
        const overcomeIndex = overcomeSequence.indexOf(myElement);
        const generateIndex = generateSequence.indexOf(myElement);

        let relation = '';
        if (myElement === otherElement) {
            relation = '相同';
        } else if (overcomeSequence[overcomeIndex + 1] === otherElement) {
            relation = '我克';
        } else if (generateSequence[generateIndex + 1] === otherElement) {
            relation = '我生';
        } else if (overcomeSequence[overcomeIndex - 1] === otherElement || overcomeSequence[overcomeIndex + 4] === otherElement) {
            relation = '克我';
        } else if (generateSequence[generateIndex - 1] === otherElement || generateSequence[generateIndex + 4] === otherElement) {
            relation = '生我';
        }

        // 根据关系选择use和unuse
        let use = '',
            unuse = '';
        switch (relation) {
            case '我克':
                use = myElement;
                unuse = overcomeSequence[overcomeIndex - 1];
                break;
            case '克我':
                use = generateSequence[generateIndex + 1];
                unuse = overcomeSequence[overcomeIndex + 1];
                break;
            case '生我':
                use = overcomeSequence[overcomeIndex + 1];
                unuse = generateSequence[generateIndex + 1];
                break;
            case '相同':
                use = overcomeSequence[overcomeIndex - 1];
                unuse = myElement;
                break;
            case '我生':
                use = generateSequence[generateIndex - 1];
                unuse = generateSequence[generateIndex + 1];
                break;
        }

        return {use, unuse};
    }

    useEffect(() => {
        const _riyunInfo = JSON.parse(JSON.stringify(riyunInfo));
        const _strengthMap = JSON.parse(JSON.stringify(strengthMap));
        const maxStrength = computedStrength({monthGan: date.getMonthGan(), monthZhi: date.getMonthZhi(), dayGan: date.getDayGan(), dayZhi: date.getDayZhi()});
        for (let i = 0; i < 5; i++) {
            const relation = getRelation(wuxing[i], maxStrength);
            _strengthMap[wuxing[i]] = relation;
            _riyunInfo[wuxing[i]]['foods']['recomList'] = selectRandomTwo(foods[relation['use']].recomList);
            _riyunInfo[wuxing[i]]['foods']['effectList'] = selectRandomTwo(foods[relation['use']].effectList);
            _riyunInfo[wuxing[i]]['communicates'] = selectRandomTwo(communicates);
            _riyunInfo[wuxing[i]]['suitables'] = selectRandomTwoObjects(suitables[relation['use']]);
            _riyunInfo[wuxing[i]]['toboos'] = selectRandomTwoObjects(toboos[relation['use']]);
        }
        setStrengthMap(_strengthMap);
        setInfo(_riyunInfo);
    }, []);

    const selectRandomTwo = (arr) => {
        let indexOne = Math.floor(Math.random() * arr.length);
        let indexTwo = Math.floor(Math.random() * arr.length);
        while (indexOne === indexTwo) {
            indexTwo = Math.floor(Math.random() * arr.length); // 确保indexTwo和indexOne不同
        }
        return arr[indexOne] + '、' + arr[indexTwo];
    };

    const selectRandomTwoObjects = (arr) => {
        let indexOne = Math.floor(Math.random() * arr.length);
        let indexTwo = Math.floor(Math.random() * arr.length);
        // 确保两个随机索引不相同
        while (indexOne === indexTwo) {
            indexTwo = Math.floor(Math.random() * arr.length);
        }
        // 返回两个随机选中的对象
        return [arr[indexOne], arr[indexTwo]];
    };
    return (
        <div>
            {wuxing.map((e) => {
                return (
                    <div className="riyun" id={e} key={e}>
                        <div className="Header">
                            {solarDate.getMonth()}月{solarDate.getDay()}日 · 周{solarDate.getWeekInChinese()} · {date.getDayGan()}
                            {date.getDayZhi()}日
                        </div>
                        <div className="Content">
                            <div className="ContentItem">
                                <div className="ItemTitle">
                                    {date.getDayGan()}
                                    {date.getDayZhi()}日 {wuxingMap[e]}日主
                                </div>
                                <div>甲乙木的宝子们今天积压的情绪可能会有一个小爆发，适合外出办事，放飞自我，或是灵活应对，一些难题在今天得得到解决，有压力也有动力。</div>
                            </div>
                            <div className="ContentItemBox">
                                <div className="ContentItem">
                                    <div className="ItemTitle">今日美食</div>
                                    <div>今日运势大吉•可造</div>
                                    <div>推荐：{riyunInfo[e].foods.recomList}</div>
                                    <div>功效：{riyunInfo[e].foods.effectList}</div>
                                </div>
                                <div className="ContentItem">
                                    <div className="ItemTitle">沟通指南</div>
                                    <div>今日运势大吉•可造 </div>
                                    <div>{riyunInfo[e].communicates.split('、')[0]}</div>
                                    <div>{riyunInfo[e].communicates.split('、')[1]}</div>
                                </div>
                            </div>
                            <div className="ContentItemBox">
                                <div className="ContentItem">
                                    <div className="ItemTitle">今日适宜</div>
                                    <div className="SmallItem">
                                        <div className="SmallContent">
                                            <div>{riyunInfo[e].suitables[0]?.recommend}</div>
                                            <div className="SmallText">{riyunInfo[e].suitables[0]?.effectList[0]}</div>
                                            <div className="SmallText">{riyunInfo[e].suitables[0]?.effectList[1]}</div>
                                        </div>
                                        <div className="SmallContent">
                                            <div>{riyunInfo[e]?.suitables?.[1]?.recommend}</div>
                                            <div className="SmallText">{riyunInfo[e].suitables?.[1]?.effectList[0]}</div>
                                            <div className="SmallText">{riyunInfo[e].suitables?.[1]?.effectList[1]}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ContentItem">
                                    <div className="ItemTitle">今日忌讳</div>
                                    <div className="SmallItem">
                                        <div className="SmallContent">
                                            <div>{riyunInfo[e].toboos[0]?.recommend}</div>
                                            <div className="SmallText">{riyunInfo[e].toboos?.[0]?.effectList[0]}</div>
                                            <div className="SmallText">{riyunInfo[e].toboos?.[0]?.effectList[1]}</div>
                                        </div>
                                        <div className="SmallContent">
                                            <div>{riyunInfo[e].toboos[1]?.recommend}</div>
                                            <div className="SmallText">{riyunInfo[e].toboos?.[1]?.effectList[0]}</div>
                                            <div className="SmallText">{riyunInfo[e].toboos?.[1]?.effectList[1]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default RiYun;
