import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Menu, Tabs, Tooltip, Card} from 'antd';
import './index.css';

const graves = [
    {titileImg: '../../../statics/fengshui2.jpeg', address: '浙江'},
    {titileImg: '../../../statics/fengshui2.jpeg', address: '广东'},
    {titileImg: '../../../statics/fengshui2.jpeg', address: '广东'},
    {titileImg: '../../../statics/fengshui2.jpeg', address: '广东'},
    {titileImg: '../../../statics/fengshui2.jpeg', address: '广东'},
    {titileImg: '../../../statics/fengshui2.jpeg', address: '广东'}
];
// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Grave() {
    return (
        <Row gutter={16}>
            {graves.map((e) => {
                return (
                    <Col span={6} style={{marginBottom: '30px'}}>
                        <Card
                            title={
                                <img src={require('../../../statics/fengshui2.jpeg')} style={{width: '100%', height: '100%'}}>
                                    {}
                                </img>
                            }
                            bordered={false}
                        >
                            <p>{e.address}</p>
                        </Card>
                    </Col>
                );
            })}
            {/* <Col span={6}>
                <Card
                    title={
                        <img src={require('../../../statics/fengshui2.jpeg')} style={{height: '300px'}}>
                            {}
                        </img>
                    }
                    bordered={false}
                >
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={6}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col> */}
        </Row>
    );
}
