import React, {Component, useState, useEffect} from 'react';
import './index.css';
import {Space, Typography, Modal, Form, Button, Input, Divider, message, Dropdown} from 'antd';
import {getLoginMessage, launchLogin, launchRegister} from '../../api/api';

const {Title} = Typography;

const useCountDown = (s) => {
    const [seconds, setSeconds] = useState(s);
    useEffect(() => {
        setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds]);

    return [seconds, setSeconds];
};

function Header() {
    const [$login] = Form.useForm();
    const [$register] = Form.useForm();
    const [loginWay, setLoginWay] = useState('password'); // password verification
    const [loginVisible, setloginVisible] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [seconds, setSeconds] = useCountDown(0);
    const [registerSeconds, setRegisterSeconds] = useCountDown(0);
    const [userName, setUserName] = useState(localStorage.getItem('username'));

    const showLogin = () => {
        setloginVisible(true);
    };
    const showRegister = () => {
        setIsRegister(true);
    };

    const handleLogin = () => {
        const values = $login.getFieldsValue();
        $login
            .validateFields()
            .then((values) => {
                // 密码登录
                launchLogin(values)
                    .then((res) => {
                        const tokenDate = res.message.split('.');
                        message.success('登录成功');
                        var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(tokenDate[1].replace(/-/g, '+').replace(/_/g, '/')))));
                        localStorage.setItem('username', userinfo.username);
                        localStorage.setItem('token', res.message);
                        setUserName(userinfo.username);
                        setloginVisible(false);
                        getLoginMessage().then((res) => {
                            console.log(res);
                        });
                    })
                    .catch((e) => {
                        message.error(e);
                    });
            })
            .catch(() => {});
    };

    const handleRegister = () => {
        $register.validateFields().then((values) => {
            console.log(values);
            launchRegister(values)
                .then((res) => {})
                .catch((e) => {
                    message.error(e);
                });
        });
    };

    const handleCancelLogin = () => {
        setloginVisible(false);
    };
    const handleCancelRegister = () => {
        setIsRegister(false);
    };
    const onFinish = () => {};

    const getVerification = () => {
        console.log($login.getFieldsValue());
        // 1、验证手机号码是否合理  2、发送验证码
        const phoneNumberRegex = /^\d{11}$/;
        if (phoneNumberRegex.test($login.getFieldsValue().number)) {
            // setVerificated(true);
            //
            const params = {
                phoneNumber: $login.getFieldsValue().number,
                verificationCode: Math.random().toString().slice(-6)
            };
            // getLoginMessage().then((res) => {
            //     console.log(res);
            // });
        } else {
        }
    };
    const items = [
        {
            key: '1',
            label: <span>个人中心</span>
        },
        {
            key: '2',
            label: (
                <span
                    onClick={() => {
                        localStorage.setItem('username', '');
                        localStorage.setItem('token', '');
                        setUserName('');
                    }}
                >
                    退出
                </span>
            )
        }
    ];
    return (
        <div className="HeaderWrapper">
            <Space className="User">
                {userName ? (
                    <Dropdown menu={{items}} placement="bottomLeft" arrow>
                        <Title level={5} onClick={showLogin} className="Login">
                            {userName}
                        </Title>
                    </Dropdown>
                ) : (
                    <>
                        <Title level={5} onClick={showLogin} className="Login">
                            登录
                        </Title>
                        <Divider type="vertical" style={{border: '1px solid #fff', marginTop: '20px', height: '20px'}}></Divider>
                        <Title level={5} onClick={showRegister} className="Register">
                            注册
                        </Title>
                    </>
                )}
            </Space>
            <Space>
                <img src={require('../../statics/logo.jpeg')} className="HeaderLogo" />
                <p className="HeaderTitle">{'茅山易学术数'}</p>
            </Space>
            <Modal
                open={loginVisible}
                onOk={handleLogin}
                onCancel={handleCancelLogin}
                footer={[
                    <Button key="back" onClick={handleCancelLogin}>
                        取消
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleLogin}>
                        登录
                    </Button>
                ]}
            >
                <div style={{textAlign: 'center', marginBottom: '20px'}}>
                    <Space>
                        <Title level={5} className={loginWay === 'password' ? 'activeWay' : 'unactiveWay'} onClick={() => setLoginWay('password')}>
                            密码登录
                        </Title>
                        <Divider type="vertical" style={{height: '20px', marginTop: '20px'}}></Divider>
                        <Title level={5} className={loginWay === 'verification' ? 'activeWay' : 'unactiveWay'} onClick={() => setLoginWay('verification')}>
                            验证码登录
                        </Title>
                    </Space>
                </div>
                <Form
                    name="$login"
                    form={$login}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item label="手机号" name="number" rules={[{required: true, message: '请输入手机号'}]}>
                        <Input />
                    </Form.Item>
                    {loginWay === 'password' ? (
                        <Form.Item label="密码" name="password" rules={[{required: true, message: '请输入密码'}]}>
                            <Input.Password />
                        </Form.Item>
                    ) : (
                        <Form.Item label="验证码" name="verification" rules={[{required: true, message: '请输入验证码'}]}>
                            <Space.Compact style={{width: '100%'}}>
                                <Input placeholder="输入验证码" />
                                <Button style={{backgroundColor: '#eee'}} onClick={() => getVerification()} disabled={seconds > 0}>
                                    {seconds > 0 ? `${seconds}s后可重新发送` : '获取验证码'}
                                </Button>
                            </Space.Compact>
                        </Form.Item>
                    )}
                </Form>
            </Modal>
            <Modal
                title="注册"
                open={isRegister}
                onOk={handleLogin}
                onCancel={handleCancelRegister}
                footer={[
                    <Button key="submit" type="primary" onClick={handleRegister}>
                        注册
                    </Button>
                ]}
            >
                <Form
                    name="register"
                    form={$register}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item label="用户名" name="user" rules={[{required: true, message: '请输入用户名'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="设置密码" name="password" rules={[{required: true, message: '请输入验证码'}]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="手机号" name="number" rules={[{required: true, message: '请输入手机号'}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="验证码" name="verification" rules={[{required: true, message: '请输入验证码'}]}>
                        <Space.Compact style={{width: '100%'}}>
                            <Input placeholder="输入验证码" />
                            <Button style={{backgroundColor: '#eee'}} onClick={() => getVerification()} disabled={registerSeconds > 0}>
                                {seconds > 0 ? `${seconds}s后可重新发送` : '获取验证码'}
                            </Button>
                        </Space.Compact>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default Header;
