import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Menu, Tabs, Tooltip} from 'antd';
import BookCover from '../../../components/BookCover/index.tsx';
import './index.css';

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
    {label: '七政四余', key: 'qizhengsiyu', children: `Content of Tab Pane 2`},
    {label: '周易', key: 'zhouyi', children: `Content of Tab Pane 3`}
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
        <div>
            <a href="https://baike.baidu.com/item/高参/50581964?fromModule=lemma_sense-layer#viewPageContent" target="_blank">
                <Title level={5}>高参专著</Title>
            </a>
            <Row gutter={[32, 16]}>
                <Col span={12}>
                    <div className="zhuanzhuCol">
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px', float: 'right'}} />
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
                    <div className="zhuanzhuCol">
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《形峦辑要》:'}</h4>
                                    <span>
                                        {'命理辑要，是高参代表作，融会了传统命理的精髓与茅山命理前辈的实战经验，全书结合近200造命例进行解读茅山命理理论体系。是四柱命理学之作。'}
                                    </span>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="zhuanzhuCol">
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/zipingxuanzhu.jpg')} className="bookGao" style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《子平玄珠阐真》:'}</h4>
                                    <span>
                                        {'命理辑要，是高参代表作，融会了传统命理的精髓与茅山命理前辈的实战经验，全书结合近200造命例进行解读茅山命理理论体系。是四柱命理学之作。'}
                                    </span>
                                </div>
                            </a>
                        </Tooltip>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="zhuanzhuCol">
                        <Tooltip title="点击查看简介" placement="right">
                            <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                                <img src={require('../../../statics/minglijianyao.jpeg')} className="bookGao" style={{width: '80px', float: 'right'}} />
                                <div>
                                    <h4>{'《命理简要》:'}</h4>
                                    <span>
                                        {'命理辑要，是高参代表作，融会了传统命理的精髓与茅山命理前辈的实战经验，全书结合近200造命例进行解读茅山命理理论体系。是四柱命理学之作。'}
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
