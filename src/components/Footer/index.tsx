import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {isMobileOnly} from 'react-device-detect';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import {List, Space, Tooltip} from 'antd';
import {Star, Wechat, Weibo} from '@icon-park/react';

import './index.css';
const PADDING = isMobileOnly ? '8px' : '64px';
function FooterCom() {
    return (
        <div
            style={{
                height: '80px',
                backgroundColor: '#000',
                paddingTop: '40px',
                paddingLeft: PADDING,
                paddingRight: PADDING,
                display: 'flex',
                flexDirection: 'row-reverse'
            }}
        >
            {/* <span>
                <img src={require('../../statics/logo.jpeg')} style={{borderRadius: '20px', width: '40px'}} />
            </span> */}
            <div>
                <Space>
                    <Tooltip title="使用Command+D可将网页添加到书签">
                        <div className="iconBox">
                            <Star theme="outline" size="22" fill="#eee" />
                        </div>
                    </Tooltip>
                    <Tooltip
                        style={{width: '400px'}}
                        title={() => {
                            return (
                                <Space style={{padding: '10px'}}>
                                    <div style={{marginRight: '8px'}}>
                                        <div>八字咨询</div>
                                        <img src={require('../../statics/shulan.jpg')} style={{width: '100px'}}></img>
                                    </div>
                                    <div>
                                        <div>风水咨询</div>
                                        <img src={require('../../statics/gaocan.jpg')} style={{width: '100px'}}></img>
                                    </div>
                                </Space>
                            );
                        }}
                    >
                        <div className="iconBox">
                            <Wechat theme="outline" size="22" fill="#eee" />
                        </div>
                    </Tooltip>
                    <div className="iconBox">
                        <Weibo theme="outline" size="22" fill="#eee" />
                    </div>
                </Space>
                <br />
                <div style={{color: '#c3c3c3', display: 'inline-block', height: '22px', lineHeight: '22px', fontSize: '13px', marginTop: '16px'}}>
                    备案号：
                    <a href="https://beian.miit.gov.cn/" target="_blank" style={{textDecoration: 'none', color: '#c3c3c3'}}>
                        京ICP备2023013566号-1
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterCom;
