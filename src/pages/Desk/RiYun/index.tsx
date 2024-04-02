import React, {useEffect} from 'react';
import {List} from 'antd';
import './index.scss';

function RiYun() {
    return (
        <div id="riyun">
            <div className="Header">4月2日 · 周二 · 丁酉日</div>
            <div className="Content">
                <div className="ContentItem">
                    <div className="ItemTitle">丁酉日 木日主</div>
                    <div>甲乙木的宝子们今天积压的情绪可能会有一个小爆发，适合外出办事，放飞自我，或是灵活应对，一些难题在今天得得到解决，有压力也有动力。</div>
                </div>
                <div className="ContentItemBox">
                    <div className="ContentItem">
                        <div className="ItemTitle">今日美食</div>
                        <div>今日运势大吉•可造</div>
                        <div>推荐：鸭肉、牛肉</div>
                        <div>功效：明目、健脑</div>
                    </div>
                    <div className="ContentItem">
                        <div className="ItemTitle">沟通指南</div>
                        <div>今日运势大吉•可造 </div>
                        <div>“这把我来C”</div>
                        <div> “任务完成 下班！”</div>
                    </div>
                </div>
                <div className="ContentItemBox">
                    <div className="ContentItem">
                        <div className="ItemTitle">今日适宜</div>
                        <div className="SmallItem">
                            <div className="SmallContent">
                                <div>手工</div>
                                <div className="SmallText">调节生活情</div>
                                <div className="SmallText">创造高质量作</div>
                            </div>
                            <div className="SmallContent">
                                <div>艳遇</div>
                                <div className="SmallText">今天真是个好日子</div>
                                <div className="SmallText">抓住机遇勇敢面对</div>
                            </div>
                        </div>
                    </div>
                    <div className="ContentItem">
                        <div className="ItemTitle">今日忌讳</div>
                        <div className="SmallItem">
                            <div className="SmallContent">
                                <div>探亲</div>
                                <div className="SmallText">家族凝聚力</div>
                                <div className="SmallText">无法提升</div>
                            </div>
                            <div className="SmallContent">
                                <div>表白</div>
                                <div className="SmallText">容易变成好朋友</div>
                                <div className="SmallText">改日再战！</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RiYun;
