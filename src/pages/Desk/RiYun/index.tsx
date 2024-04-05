import React, {useEffect, useState} from 'react';
import {List, Button, Form, Input, message, Popconfirm, Typography, Spin} from 'antd';
import {Solar, Lunar} from 'lunar-javascript';
import queryString from 'query-string';
import {updateRiYun, getRiYun} from '../../../api/api';
import {foods, communicates, suitables, toboos, GANWUXING, ZHIWUXING} from '../../../utils/riyunMap';
import './index.scss';

const {Title} = Typography;
const {TextArea} = Input;
const queryParams = queryString.parse(location.search);
const solarDate = Solar.fromDate(new Date());
const wuxing = queryParams?.type ? [queryParams.type] : ['mu', 'huo', 'tu', 'jin', 'shui'];
const wuxingMap = {mu: '木', huo: '火', tu: '土', jin: '金', shui: '水'};

const CarouselText = () => {
    const texts = ['截图准备中，稍等片刻...', '喝点水休息一下，马上就好...', '明月几时有？把酒问青天', '"此情可待成追忆，只是当时已惘然。" ']; // 轮播的文案列表
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // 更新当前索引以轮播文案
        }, 2000); // 每2秒更换一次文案

        return () => clearInterval(intervalId); // 组件卸载时清除定时器
    }, []); // 空依赖数组意味着这个effect只在组件挂载时运行一次

    return <div>{texts[currentIndex]}</div>;
};

function RiYun() {
    const [form] = Form.useForm();
    const [riyunData, setRiyunData] = useState({mu: '', huo: '', tu: '', jin: '', shui: ''});
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
    const [spinning, setSpinning] = useState(false);
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
        // getRiYun()
        //     .then((res) => {
        //         setRiyunData(res.data);
        //         form.setFieldsValue(res.data);
        //     })
        //     .catch((e) => {
        //         setSpinning(true);
        //     });
    }, []);

    useEffect(() => {
        const _riyunInfo = JSON.parse(JSON.stringify(riyunInfo));
        const _strengthMap = JSON.parse(JSON.stringify(strengthMap));
        const maxStrength = computedStrength({monthGan: date.getMonthGan(), monthZhi: date.getMonthZhi(), dayGan: date.getDayGan(), dayZhi: date.getDayZhi()});
        for (let i = 0; i < wuxing.length; i++) {
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
    const onFinish = (values) => {
        // const storedData = JSON.parse(localStorage.getItem('riyunData') || '{}');
        // localStorage.setItem('riyunData', JSON.stringify({...storedData, ...values}));
        setSpinning(true);
        updateRiYun(values)
            .then((res) => {
                message.success('保存成功，开始截图中...');
                triggerScript();
            })
            .catch((e) => {
                setSpinning(true);
            });
    };

    const triggerScript = async () => {
        try {
            const response = await fetch('http://124.221.158.62:3005/capture', {method: 'GET'});
            const data = await response.json();
            message.success('截图成功，请前往 http://124.221.158.62:3003/riyunimg 查看');
            setSpinning(false);
        } catch (error) {
            message.error('出错啦，联系管理员');
            setSpinning(false);
        }
    };

    // 表单输入处理函数
    const handleChange = (event) => {
        const {name, value} = event.target;
        setRiyunData((prevState) => ({...prevState, [name]: value}));
    };

    // 清空stoarge
    const handleClear = () => {
        updateRiYun({mu: '', huo: '', tu: '', jin: '', shui: ''})
            .then((res) => {
                message.success('已清空～');
            })
            .catch((e) => {
                setSpinning(true);
            });
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
                                <div>{riyunData[e]}</div>
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
            <Title level={5} style={{marginLeft: '20px', color: '#8c8c8c'}}>
                ☕️ 请在下方更新数据
            </Title>
            <Spin tip={<CarouselText />} spinning={spinning}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 500}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item label="木日主日运" name="mu">
                        <TextArea value={riyunData.mu} onChange={handleChange} name="mu" rows={2} />
                    </Form.Item>
                    <Form.Item label="火日主日运：" name="huo">
                        <TextArea value={riyunData.huo} onChange={handleChange} name="huo" rows={2} />
                    </Form.Item>
                    <Form.Item label="土日主日运：" name="tu">
                        <TextArea value={riyunData.tu} onChange={handleChange} name="tu" rows={2} />
                    </Form.Item>
                    <Form.Item label="金日主日运：" name="jin">
                        <TextArea value={riyunData.jin} onChange={handleChange} name="jin" rows={2} />
                    </Form.Item>
                    <Form.Item label="水日主日运：" name="shui">
                        <TextArea value={riyunData.shui} onChange={handleChange} name="shui" rows={2} />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            保存+截图
                        </Button>
                        <Popconfirm title="清理所有日运" description="清理所有日运嘛？" onConfirm={handleClear} okText="Yes" cancelText="No">
                            <Button style={{marginLeft: '8px'}}>清空</Button>
                        </Popconfirm>
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
}
export default RiYun;
