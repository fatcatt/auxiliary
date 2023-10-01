import React, {useEffect, useState} from 'react';
import {Col, Row, List, Space, Descriptions, Typography, Tooltip, Tabs, Carousel, Card} from 'antd';
import styles from './index.module.scss';
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
import {RightOutlined} from '@ant-design/icons';
const gravesCelebrity = [
    {titileImg: lijiacheng, address: '潮汕 李氏'},
    {titileImg: maoming_huang, address: '广东 茂名黄氏'},
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
const recommonds = [
    {
        name: '浙江行-高阁老的祖地案例',
        desc: '2023-09-02 14:52',
        url: 'https://mp.weixin.qq.com/s/PBYCwmoWlVzblZQWmKQa9g'
    },
    {
        name: '浙江行-清朝地师的自葬坟案例',
        desc: ' 2023-08-20 16:18',
        url: 'https://mp.weixin.qq.com/s/ZozgA7HuPVAv-uIRX-1-Zw'
    },
    {
        name: '明十三陵风水考察之长陵',
        desc: '2022-08-18 17:16',
        url: 'https://mp.weixin.qq.com/s/gyi8pVOphUmbrmaFVv1kqw'
    },
    {
        name: '湖南行-出旅长的案例',
        desc: '2023-07-28 23:51',
        url: 'https://mp.weixin.qq.com/s/3Heqs3g61wZxX-98KWTdNQ'
    }
];
const GraveCard = (data) => {
    const {graves} = data;
    return (
        <Row gutter={16}>
            {graves.map((e) => {
                return (
                    <Col span={6} style={{marginBottom: '30px'}}>
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
const ArticleCard = (props) => {
    const {data} = props;
    return (
        <a href={data.url} target="_blank" style={{flex: '1', textDecoration: 'none'}}>
            <Card>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={require('../../../statics/fengshui_logo.jpg')} style={{width: '80px', height: '80px'}} />
                    <div style={{marginLeft: '10px', display: 'flex', alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <div style={{fontSize: '16px', fontWeight: 'bold'}}>{data.name}</div>
                        <div>{data.desc}</div>
                    </div>
                </div>
            </Card>
        </a>
    );
};

const BannerRightCard = (props) => {
    const {text, img} = props;
    return (
        <div>
            <p>{text}</p>
            <img src={require('../../../statics/graves/personal.png')} style={{width: '80px', height: '80px'}} />
        </div>
    );
};
// @ts-ignore ts-migrate(2700) FIXME: Rest types may only be created from object types.
export default function Grave() {
    return (
        <div className={styles.boxWrapper}>
            <div className={styles.recommondBox}>
                {/* <div style={{display: 'flex', paddingLeft: '150px', paddingRight: '50px'}}>
                    <div style={{width: '60%'}}>
                        <Carousel autoplay>
                            <div>
                                <img src={require('../../../statics/graves/business.jpg')} style={{width: '100%'}} />
                            </div>
                            <div>
                                <img src={require('../../../statics/graves/business.jpg')} style={{width: '100%'}} />
                            </div>
                        </Carousel>
                    </div>
                    <div>
                        <BannerRightCard text={'个人介绍'} img="../../../statics/graves/personal.png"></BannerRightCard>
                        <BannerRightCard text={'联系我们'} img="../../../statics/graves/concat.png"></BannerRightCard>
                    </div>
                </div> */}
                <Space>
                    <img src={require('../../../statics/graves/jingxuan.png')} style={{width: '18px', height: '18px', display: 'list-item'}} />
                    <h3>文章推荐</h3>
                </Space>
                <div className={styles.recommondCardBox}>
                    {recommonds.map((data) => (
                        <ArticleCard data={data} />
                    ))}
                </div>
                <div className={styles.moreArticle}>
                    <Tooltip
                        placement="right"
                        title={
                            <>
                                <img src={require('../../../statics/graves/QRcode.jpg')} style={{width: '120px', height: '120px'}} />
                            </>
                        }
                    >
                        <Space>
                            <img src={require('../../../statics/graves/go.png')} style={{width: '18px', height: '18px', display: 'list-item'}} />
                            <p style={{fontSize: '18px'}}>更多文章，请关注公众号</p>
                            <img src={require('../../../statics/graves/public.png')} style={{width: '18px', height: '18px', display: 'list-item'}} />
                        </Space>
                    </Tooltip>
                </div>
            </div>
            <div className={styles.groundWrapper}>
                <Space>
                    <img src={require('../../../statics/graves/practice.png')} style={{width: '22px', height: '22px', display: 'list-item'}} />
                    <h3>实地堪舆</h3>
                </Space>
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
            </div>
        </div>
    );
}
