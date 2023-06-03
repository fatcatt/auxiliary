import React, {useEffect} from 'react';
import {Col, Row, List, Space, Descriptions} from 'antd';

// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Book() {
    const onChange = () => {};
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
    return (
        <div>
            <Descriptions title="高参专著" column={4}>
                <Descriptions.Item label="命理辑要">
                    <img src={require('../../../statics/minglijiyao.jpg')} style={{width: '80px'}} />
                </Descriptions.Item>
                <Descriptions.Item label="形峦辑要">1810000000</Descriptions.Item>
                <Descriptions.Item label="子平玄珠阐要">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="罗盘正解">Hangzhou, Zhejiang</Descriptions.Item>
            </Descriptions>
        </div>
    );
}
