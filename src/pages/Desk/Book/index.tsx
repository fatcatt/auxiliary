import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Menu, Tabs, Tooltip} from 'antd';
import BookCover from '../Components/BookCover/index.tsx';
import styles from './index.module.scss';

const {Title} = Typography;
const BOOKS = [
    {
        title: '渊海子平',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    },
    {
        title: '子平真诠',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    },
    {
        title: '穷通宝鉴',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    },
    {
        title: '滴天髓',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    },
    {
        title: '五行大义',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    },
    {
        title: '玉照定真经',
        url: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/yuanhaiziping.pdf'
    }
];
const items = [
    {label: '八字', key: 'bazi', children: <BookCover books={BOOKS}></BookCover>},
    {label: '七政四余', key: 'qizhengsiyu', children: `暂未上线，敬请期待`},
    {label: '周易', key: 'zhouyi', children: `暂未上线，敬请期待`},
    {label: '其他', key: 'qita', children: `暂未上线，敬请期待`}
];
// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Book() {
    const [current, setCurrent] = useState('bazi');
    const onChange = (e) => {
        console.log(e.key);
        setCurrent(e);
    };
    const data = [
        {
            title: 'Ant Design Title 1'
        },
        {
            title: 'Ant Design Title 2'
        },
        {
            title: 'Ant Design Title 3'
        },
        {
            title: 'Ant Design Title 4'
        }
    ];
    const onClick = () => {};
    return (
        <div className={styles.boxWrapper}>
            <a href="https://baike.baidu.com/item/高参/50581964?fromModule=lemma_sense-layer#viewPageContent" target="_blank">
                <Title level={5}>高参专著</Title>
            </a>
            <Row gutter={[32, 16]}>
                <Col span={12}>
                    <div className={styles.zhuanzhuCol}>
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/minglijiyao.jpg')} className={styles.bookGao} style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《命理辑要》:'}</h4>
                                    <span>
                                        {'命理辑要，是高参代表作，融会了传统命理的精髓与茅山命理前辈的实战经验，全书结合近200造命例进行解读茅山命理理论体系。是四柱命理学之作。'}
                                    </span>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.zhuanzhuCol}>
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://mp.weixin.qq.com/s/zwWs3il4mPbIsGRocunvSA" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/xingluanjiyao.jpg')} className={styles.bookGao} style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《形峦辑要》:'}</h4>
                                    <p>{'本书为汇篇先贤所述，并结合家学，考验求证，后摘录成书。重于形峦古法，专为格龙、审砂、辨水、点穴之技。'}</p>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.zhuanzhuCol}>
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://mp.weixin.qq.com/s/zwWs3il4mPbIsGRocunvSA" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/zipingxuanzhu.jpg')} className={styles.bookGao} style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《子平玄珠阐真》:'}</h4>
                                    <p>
                                        {
                                            '《子平玄珠》一书中，存在许多四柱错误，生平的错误，甚至命主姓名出现错误。故笔者萌生重新校对注解古书的想法，以期能纠正错误，不至于以谬传谬，误了后人。'
                                        }
                                    </p>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
                <Col span={12}>
                    <div className={styles.zhuanzhuCol}>
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://mp.weixin.qq.com/s/zwWs3il4mPbIsGRocunvSA" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/minglijianyao.jpeg')} className={styles.bookGao} style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《命理简要》:'}</h4>
                                    <span>
                                        {
                                            '前著《命理辑要》一书，简要辨证分析以备学者参悟玄机。提辑命学之精要。但《命理辑要》一书对于初学者而言，稍有难度。故笔者荫生编著一本通俗易懂的入门书，简单集萃入门必学知识，提要重点，力求通读此书则可入门。并命其名为《命理简要》。'
                                        }
                                    </span>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
            </Row>

            <Title level={5}>分类</Title>
            <Tabs defaultActiveKey="bazi" items={items} onChange={onChange} />
        </div>
    );
}
