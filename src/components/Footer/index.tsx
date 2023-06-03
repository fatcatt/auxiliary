import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {isMobileOnly} from 'react-device-detect';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import {List, Space, Tooltip} from 'antd';
import {Star, Wechat, Weibo} from '@icon-park/react';
import './index.css';

function FooterCom() {
    return (
        <div style={{height: '80px', backgroundColor: '#000', paddingTop: '40px'}}>
            {/* <span>
                <img src={require('../../statics/logo.jpeg')} style={{borderRadius: '20px', width: '40px'}} />
            </span> */}
            <Space style={{float: 'right'}}>
                <Tooltip title="使用Command+D可将网页添加到书签">
                    <div className="iconBox">
                        <Star theme="outline" size="22" fill="#eee" />
                    </div>
                </Tooltip>
                <Tooltip title="扫描二维码，关注茅山易学术数公众号">
                    <div className="iconBox">
                        <Wechat theme="outline" size="22" fill="#eee" />
                    </div>
                </Tooltip>
                <div className="iconBox">
                    <Weibo theme="outline" size="22" fill="#eee" />
                </div>
            </Space>
        </div>
    );
}

export default FooterCom;
