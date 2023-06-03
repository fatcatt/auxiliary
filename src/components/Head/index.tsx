import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button} from './style';
import './index.css';
import {Space} from 'antd';

function Header() {
    return (
        <div className="HeaderWrapper">
            <Space>
                <img src={require('../../statics/logo.jpeg')} className="HeaderLogo" />
                <p className="HeaderTitle">{'茅山易学术数'}</p>
            </Space>
        </div>
    );
}

export default Header;
