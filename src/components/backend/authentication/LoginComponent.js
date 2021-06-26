import React from 'react'
import { Form, Input, Button, Modal } from 'antd';

import { Link, Redirect, useHistory } from 'react-router-dom'

import { UserOutlined, LockOutlined } from '@ant-design/icons';
import GlobalContext from '../../../../src/context/GlobalContext'
import CookieService from '../../../../src/context/CookieService'

import axios from 'axios';

export default function LoginComponent() {

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 24,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 9,
            span: 10,
        },
    };


    const [form] = Form.useForm();
    let history = useHistory();

    async function onFinish(values) {
        const response = axios.post('/authentication/token', values)
            .then((res) => {
                const dataRes = res.data

                if (res.status === 200) {

                    let expires = new Date()
                    expires.setTime(expires.getTime() + ((dataRes.data['access_token_expires']*60) * 1000))
                    CookieService.set('access_token', dataRes.data['access_token'], { expires: expires })
                    let refresh_expires = new Date()
                    refresh_expires.setTime(expires.getTime() + ((dataRes.data['refresh_token_expires']*60) * 1000))
                    CookieService.set('refresh_token', dataRes.data['refresh_token'], { expires: refresh_expires })
                    console.log(CookieService.get('access_token'))
                    CookieService.set('role', dataRes.data['role'], { expires: refresh_expires })
                    if (CookieService.get('access_token') !== 'undefined') {
                        Modal.success({
                            title: "Login success",
                            onOk: () => {
                                history.push('/backend/dashboard')
                            }
                        });
                    } else {
                        Modal.error({
                            title: "Login Fail",
                            message: 'Username or password incorrect'
                        });
                    }
                }
            })
            .catch((err) => {
                Modal.error({
                    title: err.response.data.message
                });

            })
    }

    const onFinishFailed = (errorInfo) => {

    }


    return (
        <div>
            <div style={{ minHeight: "100vh" }}>
                <GlobalContext.Consumer>
                    {context =>

                        <div className="relative min-h-screen flex flex-col xs:justify-center items-center md:bg-gray-300 xs:bg-black">
                            <div className="relative sm:max-w-sm md:w-full xs:w-">
                                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                                <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                                <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                                    <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold m-5">
                                        <p className="text-lg">Login</p>
                                    </label>
                                    <Form
                                        {...layout}
                                        form={form}
                                        name="loginForm"
                                        className="loginForm"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username !',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}
                                        >
                                            <Input.Password
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </Form.Item>


                                        <Form.Item {...tailLayout}>
                                            <Button type="primary" size="middle" htmlType="submit">
                                                Login
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    }
                </GlobalContext.Consumer>
            </div>
        </div>
    )
}
