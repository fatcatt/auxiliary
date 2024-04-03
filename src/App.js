import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React, {Component, useState, useEffect} from 'react';
import RiYun from './pages/Desk/RiYun/index.tsx';
import {isMobileOnly} from 'react-device-detect';
import {List, Space} from 'antd';
import {Star, Wechat} from '@icon-park/react';

function App() {
    return (
        <BrowserRouter>
            <div style={{minHeight: 'calc(100vh - 120px)'}}>
                <Routes>
                    <Route path="/riyun" element={isMobileOnly ? <RiYun /> : <RiYun />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;
