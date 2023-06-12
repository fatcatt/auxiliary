import React, {useEffect, useState} from 'react';
import IpDesc from './IpDesc/index.tsx';
import PublicClass from '../PublicClass/index.tsx';
import Publicity from '../Publicity/index.tsx';
import Book from '../Book/index.tsx';
import Grave from '../Grave/index.tsx';
import {Col, Row, List, Space, Tabs} from 'antd';
import {useNavigate} from 'react-router-dom';
import {parseUrlParams} from '../../../utils/index';

import './index.css';

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Index() {
    const {page} = parseUrlParams();
    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState('publicclass');

    useEffect(() => {
        setActiveKey(page);
    }, [page]);
    const onChange = (e) => {
        navigate(`/home?page=${e}`);
    };
    return (
        <div className="boxWrapper">
            <Tabs
                onChange={onChange}
                type="card"
                activeKey={activeKey}
                className="indexWrapper"
                items={[
                    {
                        key: 'publicclass',
                        label: <span>公开课</span>,
                        children: (
                            <Row justify="space-between">
                                <Col span={17}>
                                    <PublicClass></PublicClass>
                                </Col>
                                <Col span={6}>
                                    <Publicity></Publicity>
                                </Col>
                            </Row>
                        )
                    },
                    {key: 'book', label: `书籍`, children: <Book></Book>},
                    {key: 'fengshui', label: `堪舆`, children: <Grave></Grave>},
                    {key: 'more', label: `敬请期待`, children: `向我反馈你感兴趣的内容`}
                ]}
            ></Tabs>
        </div>
    );
}
