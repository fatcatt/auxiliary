import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {isMobileOnly} from 'react-device-detect';
import styles from './index.module.scss';
import {Button, Tooltip} from 'antd';

const PADDING = isMobileOnly ? '8px' : '64px';
function FooterCom() {
    return (
        <div className={styles.appHelpWrapper}>
            {/* <span>
                <img src={require('../../statics/logo.jpeg')} style={{borderRadius: '20px', width: '40px'}} />
            </span> */}
            <div className={styles.logo}>问道天机</div>
            <div className={styles.desc}>
                <div>长沙问道天机文化传媒有限公司。</div>
                <div>公司成立于2023年，专注于地理信息公布与查询服务，致力于打造地理信息服务，成为一家集地势环境、地理气候等重要地理信息为一体的科技文化公司。</div>
            </div>
            <div style={{marginTop: '8px', display: 'flex', gap: 8}}>
                <Tooltip title={'感谢关注，敬请期待应用上线～'} placement="bottom">
                    <Button>Iphone版下载</Button>
                </Tooltip>
                <Tooltip title={'感谢关注，敬请期待应用上线～'} placement="bottom">
                    <Button>安卓版下载</Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default FooterCom;
