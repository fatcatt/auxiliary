import React, {useEffect} from 'react';
import IpDesc from './IpDesc/index.tsx';
import PublicClass from '../PublicClass/index.tsx';
import Publicity from '../Publicity/index.tsx';
import Book from '../Book/index.tsx';
import {Col, Row, List, Space, Tabs} from 'antd';
import './index.css';

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Index() {
    const onChange = () => {};
    return (
        <div className="boxWrapper">
            <Tabs
                onChange={onChange}
                type="card"
                className="indexWrapper"
                items={[
                    {
                        key: '1',
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
                    {key: '2', label: `书籍`, children: <Book></Book>},
                    {key: '3', label: `堪舆`, children: <Book></Book>},
                    {key: '4', label: `敬请期待`, children: `向我反馈你感兴趣的内容`}
                ]}
            ></Tabs>
        </div>
    );
}
