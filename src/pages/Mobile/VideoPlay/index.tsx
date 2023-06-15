import React, {useEffect} from 'react';
import '../../../../node_modules/video-react/dist/video-react.css';
import {Player} from 'video-react';
import {List, Space} from 'antd';
import {VideoOne} from '@icon-park/react';
import {Link} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';

const classNames = [
    '视频：第一节 首观结构，次观大运',
    '视频：第二节 原局层次，喜用造化',
    '视频: 第三节 坤造 丙寅 丙申 乙巳 癸未',
    '视频: 第四节 乾造 丙寅 己亥 丙寅 己丑',
    '视频: 第五节 乾造 己巳 丁卯 壬午 庚戌',
    '视频: 第六节 乾造 壬子 乙巳 丙寅 丁酉',
    '视频: 第七节 女命专讲 何知富贵与贫贱',
    '视频: 第八节 端看大运流年之吉凶'
];
const urls = [
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public001.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public002.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public003.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public004.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public005.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public006.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public007.mp4',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public008.mp4'
];
const urlPosters = [
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public001-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public002-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public003-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public004-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public005-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public006-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public007-poster.jpg',
    'https://main-1307190758.cos.ap-beijing.myqcloud.com/2020-public008-poster.jpg'
];
function App() {
    const [params] = useSearchParams();
    const id = params.getAll('id')[0];
    console.log(id);
    console.log(urls[id]);

    return (
        <div style={{padding: '15px'}}>
            <div style={{width: '90%'}}>
                <Player playsInline poster={urlPosters[id]} src={urls[id]} />
            </div>
        </div>
    );
}
export default App;
