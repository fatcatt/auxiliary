import React, {useEffect, useState} from 'react';
import {List, Button, Image, message} from 'antd';
import {Solar, Lunar} from 'lunar-javascript';
import {getCapture} from '../../../api/api';
import {foods, communicates, suitables, toboos, GANWUXING, ZHIWUXING} from '../../../utils/riyunMap';
import './index.scss';

function RiYun() {
    const fallback = '';
    return (
        <div>
            <div className="riyun">
                <Image src="https://main-1307190758.cos.ap-beijing.myqcloud.com/riyun-mu.png" className="img" fallback={require('../../../statics/fallback.png')} />
                <Image src="https://main-1307190758.cos.ap-beijing.myqcloud.com/riyun-huo.png" className="img" fallback={require('../../../statics/fallback.png')} />
                <Image src="https://main-1307190758.cos.ap-beijing.myqcloud.com/riyun-tu.png" className="img" fallback={require('../../../statics/fallback.png')} />
                <Image src="https://main-1307190758.cos.ap-beijing.myqcloud.com/riyun-jin.png" className="img" fallback={require('../../../statics/fallback.png')} />
                <Image src="https://main-1307190758.cos.ap-beijing.myqcloud.com/riyun-shui.png" className="img" fallback={require('../../../statics/fallback.png')} />
            </div>
        </div>
    );
}
export default RiYun;
