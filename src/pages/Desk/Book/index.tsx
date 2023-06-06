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
            <Title level={5}>高参专著</Title>
            <Row style={{backgroundColor: '#ebedee', padding: '20px', borderRadius: '10px'}}>
                <Col span={6}>
                    <Tooltip title="点击查看简介" placement="right">
                        <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                            <Space>
                                <h4>{'《命理辑要》:'}</h4>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px'}} />
                            </Space>
                        </a>
                    </Tooltip>
                </Col>
                <Col span={6}>
                    <Tooltip title="点击查看简介" placement="right">
                        <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                            <Space>
                                <h4 style={{float: 'left', marginTop: '10px'}}>{'《形峦辑要》:'}</h4>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px'}} />
                            </Space>
                        </a>
                    </Tooltip>
                </Col>
                <Col span={6}>
                    <Tooltip title="点击查看简介" placement="right">
                        <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                            <Space>
                                <h4 style={{float: 'left', marginTop: '10px'}}>{'《子平玄珠阐真》:'}</h4>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px'}} />
                            </Space>
                        </a>
                    </Tooltip>
                </Col>
                <Col span={6}>
                    <Tooltip title="点击查看简介" placement="right">
                        <a href="https://baike.baidu.com/item/命理辑要/54310676?fr=aladdin" target="blank" style={{color: '#333'}}>
                            <Space>
                                <h4 style={{float: 'left', marginTop: '10px'}}>{'《罗经正解》:'}</h4>
                                <img src={require('../../../statics/minglijiyao.jpg')} className="bookGao" style={{width: '80px'}} />
                            </Space>
                        </a>
                    </Tooltip>
                </Col>
            </Row>

            <Title level={5}>分类</Title>
            <Tabs defaultActiveKey="bazi" items={items} onChange={onChange} />
        </div>
    );
}
