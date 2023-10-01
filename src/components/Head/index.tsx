import React, {Component, useState, useEffect} from 'react';
import './index.scss';
import {Space, Typography, Modal, Form, Button, Input, Divider, message, Dropdown, Tooltip, Menu} from 'antd';
import {sentCode, launchLogin, launchRegister, loginVerified} from '../../api/api';
import {Link} from 'react-router-dom';
const currentPath = window.location.pathname;
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
const LISTS = ['fengshui', 'home', 'ebook', 'mail'];
function Header() {
    const [$login] = Form.useForm();
    const [$register] = Form.useForm();
    const [loginWay, setLoginWay] = useState('password'); // password verification
    const [loginVisible, setloginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [seconds, setSeconds] = useCountDown(0);
    const [registerSeconds, setRegisterSeconds] = useCountDown(0);
    const [userName, setUserName] = useState(localStorage.getItem('username'));
    const [currentMenu, setCurrentMenu] = useState('');

    useEffect(() => {
        for (let list of LISTS) {
            if (currentPath.indexOf(list) !== -1) {
                setCurrentMenu(list);
            }
        }
    }, [currentPath]);

    const showLogin = () => {
        setloginVisible(true);
    };
    const showRegister = () => {
        setRegisterVisible(true);
    };

    const handleLogin = () => {
        const values = $login.getFieldsValue();
        $login
            .validateFields()
            .then((values) => {
                // 密码登录
                if (loginWay === 'password') {
                    loginMethod(values, '');
                } else {
                    if (values.verification === verificationCode) {
                        loginVerified(values)
                            .then((res) => {
                                const tokenDate = res.message.split('.');
                                message.success('登录成功');
                                var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(tokenDate[1].replace(/-/g, '+').replace(/_/g, '/')))));
                                localStorage.setItem('username', userinfo.username);
                                localStorage.setItem('token', res.message);
                                setUserName(userinfo.username);
                                setloginVisible(false);
                            })
                            .catch((e) => {
                                message.error(e);
                            });
                    } else {
                        message.error('验证失败，请确认验证码');
                    }
                }
            })
            .catch(() => {});
    };

    const loginMethod = (values, regi) => {
        launchLogin(values)
            .then((res) => {
                const tokenDate = res.message.split('.');
                message.success(regi ? '注册成功！已登录' : '登录成功');
                var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(tokenDate[1].replace(/-/g, '+').replace(/_/g, '/')))));
                localStorage.setItem('username', userinfo.username);
                localStorage.setItem('token', res.message);
                setUserName(userinfo.username);
                setloginVisible(false);
                setRegisterVisible(false);
                sentCode().then((res) => {
                    console.log(res);
                });
            })
            .catch((e) => {
                message.error(e.message);
            });
    };

    const handleRegister = () => {
        const values = $register.getFieldsValue();
        $register
            .validateFields()
            .then((values) => {
                if (verificationCode === values.verification) {
                    launchRegister(values)
                        .then((res) => {
                            console.log(res);
                            loginMethod(
                                {
                                    number: values.number,
                                    password: values.password
                                },
                                'regi'
                            );
                        })
                        .catch((e) => {
                            message.error(e?.message || e);
                        });
                } else {
                    message.error('验证码有误，请重新输入');
                }
            })
            .catch((e) => {
                message.error(e?.message || e);
            });
    };

    const handleCancelLogin = () => {
        setloginVisible(false);
    };
    const handleCancelRegister = () => {
        setRegisterVisible(false);
    };

    const handleChangeMenu = (menu) => {
        setCurrentMenu(menu.key);
    };

    const onFinish = () => {};

    const getVerification = ($form) => {
        // 1、验证手机号码是否合理  2、发送验证码
        const phoneNumberRegex = /^\d{11}$/;
        if (phoneNumberRegex.test($form.getFieldsValue().number)) {
            // setVerificated(true);
            //
            const CODE = Math.random().toString().slice(-6);
            setVerificationCode(CODE);
            const params = {
                phoneNumber: $form.getFieldsValue().number,
                verificationCode: CODE
            };
            sentCode(params).then((res) => {
                message.success('验证码已发送，请注意查收');
                $form === '$login' ? setSeconds(60) : setRegisterSeconds(60);
            });
        } else {
            message.error('请输入正确的手机号');
        }
    };
    const items = [
        {
            key: '1',
            label: (
                <Tooltip title="待开放">
                    <span>个人中心</span>
                </Tooltip>
            )
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
    const menus = [
        {
            label: '堪舆',
            key: 'fengshui',
            path: '/fengshui'
        },
        {
            label: '公开课',
            key: 'home',
            path: '/home'
        },
        {
            label: '书籍',
            key: 'ebook',
            path: '/ebook'
        },
        {
            label: '敬请期待',
            key: 'mail',
            path: 'grave'
        }
    ];
    return (
        <>
            <div className="HeaderWrapper">
                <div style={{paddingRight: '180px'}}>
                    <Space>
                        <Space style={{marginRight: '32px'}}>
                            <img src={require('../../statics/logo.jpg')} className="HeaderLogo" />
                            <p className="HeaderTitle">{'茅山易学术数'}</p>
                        </Space>
                        {menus.map((e) => {
                            return (
                                <Link to={e.path} className="MenuLink" onClick={() => handleChangeMenu(e)}>
                                    <p className={currentMenu === e.key ? 'activeMenu' : 'unActiveMenu'}>{e.label}</p>
                                </Link>
                            );
                        })}
                    </Space>
                </div>
            </div>
            <div style={{position: 'absolute', top: '30px', right: '30px'}}>
                <Space className="User">
                    {userName ? (
                        <Dropdown menu={{items}} placement="bottomLeft" arrow>
                            <p onClick={showLogin} className="Login">
                                {userName}
                            </p>
                        </Dropdown>
                    ) : (
                        <>
                            <p onClick={showLogin} className="Login">
                                登录
                            </p>
                            <Divider type="vertical" style={{border: '1px solid #eee', height: '20px'}}></Divider>
                            <p onClick={showRegister} className="Register">
                                注册
                            </p>
                        </>
                    )}
                </Space>
            </div>
            <div>
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
                                    <Button style={{backgroundColor: '#eee'}} onClick={() => getVerification($login)} disabled={seconds > 0}>
                                        {seconds > 0 ? `${seconds}s后可重新发送` : '获取验证码'}
                                    </Button>
                                </Space.Compact>
                            </Form.Item>
                        )}
                    </Form>
                </Modal>
                <Modal
                    title="注册"
                    open={registerVisible}
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
                                <Button style={{backgroundColor: '#eee'}} onClick={() => getVerification($register)} disabled={registerSeconds > 0}>
                                    {registerSeconds > 0 ? `${registerSeconds}s后可重新发送` : '获取验证码'}
                                </Button>
                            </Space.Compact>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </>
    );
}

export default Header;
