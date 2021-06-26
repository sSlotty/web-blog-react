import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Layout, Menu, Dropdown, Button, Breadcrumb } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    UserOutlined,
    FormOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './Sidebar.css'

import CookieService from '../../context/CookieService';
import axios from 'axios'


const { Header, Sider, Content, Footer } = Layout;



const MenuBar = (history) => {
    return (
        <Menu>
            <Menu.Item>

            </Menu.Item>
        </Menu>
    )
}





const SidebarComponent = ({ children }) => {
    const [state, setState] = useState({
        collapsed: false
    });

    


    const toggle = () => {
        setState({
            collapsed: !state.collapsed
        });
    };
    





    let history = useHistory()
    const { SubMenu } = Menu;
    const extraBreadcrumbItems = []

    const path = history.location.pathname
    const pathname = path.split('/').filter(i => i)


    pathname.forEach((value, index) => {
        const url = `/${pathname.slice(0, index + 1).join('/')}`

        if (index >= 1) {
            extraBreadcrumbItems.push(
                <Breadcrumb.Item key={index}>
                    <Link to={url}>
                        {value[0].toUpperCase() + value.slice(1)}
                    </Link>
                </Breadcrumb.Item>
            )
        }
    })

    const breadcrumbItems = [(
        <Breadcrumb.Item key="/">
            <Link to="/backend/dashboard">Home</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems)


    const adminComp = [(
        <SubMenu key="admin" icon={<UserOutlined />} title="Admin Management">
            <Menu.Item key="/backend/dashboard/admin">
                <Link to={'/backend/dashboard/admin'}>
                    List Admin
                </Link>
            </Menu.Item>
            <Menu.Item key="/backend/dashboard/admin/create">
                <Link to={'/backend/dashboard/admin/create'}>
                    Add Admin
                </Link>
            </Menu.Item>
        </SubMenu>
    )]
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider theme="light" style={{ height: 'auto', overflow: 'auto' }} trigger={null} collapsible collapsed={state.collapsed}>
                <div className="text-center mt-10 mb-2"> ระบบจัดการ web blog </div>

                <Menu theme="light" mode="inline" selectedKeys={[path]}>

                    <Menu.Item key="/backend/dashboard" icon={<HomeOutlined />}>
                        <Link to={'/backend/dashboard'}>
                            Dashboard
                        </Link>
                    </Menu.Item>

                    <SubMenu key="articles" icon={<FormOutlined />} title="Articles">
                        <Menu.Item key="/backend/dashboard/articles/">
                            <Link to={'/backend/dashboard/articles/'}>
                                List Articles
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/backend/dashboard/articles/create">
                            <Link to={'/backend/dashboard/articles/create'}>
                                Create Articles
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    {CookieService.get('role') === 'admin' ? adminComp : ''}
                </Menu>
            </Sider>

            <Layout className="site-layout bg-gradient-to-r from-purple-200 via-pink-300 to-red-300">
                <Header
                    className="site-layout-background header"
                    style={{
                        padding: 0
                    }}>
                    {React.createElement(state.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle
                    })}
                    <span className="header-profile">
                        <Dropdown overlay={MenuBar(history)} placement="bottomRight" arrow>
                            <Button><UserOutlined /></Button>
                        </Dropdown>
                    </span>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '50px 50px 50px 50px',
                        padding: 24,
                        minHeight: 280
                    }}>
                    <div className="mb-10" style={{ overflow: 'scroll' }}>
                        <Breadcrumb>
                            {
                                breadcrumbItems
                            }

                        </Breadcrumb>
                    </div>
                    <div>
                        {children}
                    </div>
                </Content>

                <Footer className="footer bg-gray-200" style={{ textAlign: 'center' }}> Copyright © {new Date().getFullYear()}{" "}
                    <Link to="#" className="text-gray-600 hover:text-gray-900">
                        Thanathip Dev
                    </Link>.</Footer>

            </Layout>

        </Layout>
    )
}

export default SidebarComponent;