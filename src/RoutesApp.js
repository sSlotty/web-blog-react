import React from 'react'

import { Switch, Route, Redirect, useHistory } from 'react-router-dom'


import IndexContentComponent from './components/public/IndexContentComponent'
import CookieService from './context/CookieService'

// Backend
import SidebarComponent from './components/backend/SidebarComponent'
import LoginComponent from './components/backend/authentication/LoginComponent'
import IndexComponent from './components/backend/IndexComponent'

// Articles
import ArticlesComponent from './components/backend/articles/ArticlesComponent'
import AddArticlesComponent from './components/backend/articles/AddArticlesComponent'
import EditArticlesComponent from './components/backend/articles/EditArticlesComponent'

// Admin
import AdminComponent from './components/backend/admin/AdminComponent'
import AddAdminComponent from './components/backend/admin/AddAdminComponent'




const isLogin = () => {
    console.log(CookieService.get('access_token'))

    if (CookieService.get('access_token')) {
        console.log('false')

        return true;
    }
    CookieService.remove('refresh_token')
    CookieService.remove('role')
    return false;

}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <SidebarComponent><Component  {...props} /></SidebarComponent> : <Redirect to="/backend/login" />
        )} />
    )
}

const PublicRoute = ({ component: Component, force, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && force ?
                <Redirect to="/backend/dashboard" />
                : <Component {...props} />
        )} />
    )
}

const RoleRoute = ({ component: Component, role, roleType, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && role === roleType ?
                <SidebarComponent><Component  {...props} /></SidebarComponent> : <Redirect to="/backend/login" />
        )} />
    )
}

const RoutesApp = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" force={false} component={IndexContentComponent}></PublicRoute>
            <PublicRoute exact path="/backend/login" force={true} component={LoginComponent}></PublicRoute>
            <PrivateRoute exact path="/backend/dashboard" component={IndexComponent}></PrivateRoute>
            <PrivateRoute exact path="/backend/dashboard/articles" component={ArticlesComponent}></PrivateRoute>
            <PrivateRoute exact path="/backend/dashboard/articles/create" component={AddArticlesComponent}></PrivateRoute>
            <PrivateRoute exact path="/backend/dashboard/articles/edit" component={EditArticlesComponent}></PrivateRoute>
            <RoleRoute exact path="/backend/dashboard/admin" role={CookieService.get('role')} roleType="admin" component={AdminComponent}></RoleRoute>
            <RoleRoute exact path="/backend/dashboard/admin/create" role={CookieService.get('role')} roleType="admin" component={AddAdminComponent}></RoleRoute>
            
        </Switch>
    )
}

export default RoutesApp;
