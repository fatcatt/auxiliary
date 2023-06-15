import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Menu, Tabs, Tooltip, Card} from 'antd';
import './index.module.css';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import lijiacheng from '../../../statics/graves/celebrity/fengshui_lijiacheng.jpg';
import maoming_huang from '../../../statics/graves/celebrity/maoming_huang.jpg';
import mahuateng from '../../../statics/graves/celebrity/mahuateng.jpg';
import gaozhou_yang from '../../../statics/graves/celebrity/gaozhou_yang.jpg';
import gaozhou_xu from '../../../statics/graves/celebrity/gaozhou_xu.jpg';
import guangdong_liang from '../../../statics/graves/celebrity/guangdong_liang.jpg';
import maoming_li from '../../../statics/graves/celebrity/maoming_li.jpg';
import maoming_gan from '../../../statics/graves/celebrity/maoming_gan.jpg';
import guangdong_yangjiang from '../../../statics/graves/celebrity/guangdong_yangjiang.jpg';
import guangdong_gaozhou1 from '../../../statics/graves/undone/guangdong_gaozhou1.jpg';

import qingdao1 from '../../../statics/graves/undone/qingdao1.jpg';
import beijing_changping1 from '../../../statics/graves/undone/beijing_changping1.jpg';
import hunan_shaoyang1 from '../../../statics/graves/undone/hunan_shaoyang1.jpg';
import hunan_hengyang1 from '../../../statics/graves/undone/hunan_hengyang1.jpg';
import hunan_hengyang2 from '../../../statics/graves/undone/hunan_hengyang2.jpg';
import hunan_hengyang3 from '../../../statics/graves/undone/hunan_hengyang3.jpg';
import guangxi_hezhou1 from '../../../statics/graves/undone/guangxi_hezhou1.jpg';
import hangzhou1 from '../../../statics/graves/undone/hangzhou1.jpg';
import hangzhou2 from '../../../statics/graves/undone/hangzhou2.jpg';
import hangzhou3 from '../../../statics/graves/undone/hangzhou2.jpg';

const gravesCelebrity = [
    {titileImg: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public001-poster.jpg', address: '潮汕 李氏'},
    {titileImg: 'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public001-poster.jpg', address: '广东 茂名黄氏'},
    {titileImg: mahuateng, address: '广东 潮州马氏'},
    {titileImg: gaozhou_yang, address: '广东 高州杨氏'},
    {titileImg: gaozhou_xu, address: '广东 高州许氏'},
    {titileImg: guangdong_liang, address: '广东 云浮梁氏'},
    {titileImg: maoming_li, address: '广东 茂名李氏'},
    {titileImg: maoming_gan, address: '广东 茂名甘氏'},
    {titileImg: guangdong_yangjiang, address: '广东 阳江'}
];
const gravesUndone = [
    {titileImg: qingdao1, address: '青岛'},
    {titileImg: beijing_changping1, address: '北京 昌平'},
    {titileImg: guangdong_gaozhou1, address: '广东 高州'},
    {titileImg: hunan_shaoyang1, address: '湖南 邵阳'},
    {titileImg: hunan_hengyang1, address: '湖南 衡阳'},
    {titileImg: hunan_hengyang2, address: '湖南 衡阳'},
    {titileImg: hunan_hengyang3, address: '湖南 衡阳'},
    {titileImg: guangxi_hezhou1, address: '广西 贺州'},
    {titileImg: hangzhou1, address: '杭州'},
    {titileImg: hangzhou2, address: '杭州'},
    {titileImg: hangzhou3, address: '杭州'}
];

const GraveCard = (data) => {
    const {graves} = data;
    return (
        <Row gutter={8}>
            {graves.map((e) => {
                return (
                    <Col span={12} style={{marginBottom: '30px'}}>
                        <Card
                            title={
                                <PhotoProvider>
                                    <PhotoView src={e.titileImg}>
                                        <img src={e.titileImg} style={{width: '100%', height: 'calc(100% * 9 / 16)'}}>
                                            {}
                                        </img>
                                    </PhotoView>
                                </PhotoProvider>
                            }
                            bordered={false}
                        >
                            <p>{e.address}</p>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
};
// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Grave() {
    return (
        <Tabs
            defaultActiveKey="1"
            items={[
                {
                    key: '1',
                    label: `名人故地`,
                    children: <GraveCard graves={gravesCelebrity}></GraveCard>
                },
                {
                    key: '2',
                    label: `待选`,
                    children: <GraveCard graves={gravesUndone}></GraveCard>
                }
            ]}
        ></Tabs>
    );
}
