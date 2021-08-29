import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { AuthPage } from './pages/AuthPage'
import { Login } from './components/Login'
import { useSelector } from 'react-redux'
import { CreatePost } from './components/CreatePost/CreatePost';
import { DetailPage } from './pages/DetailPage';
export const useRoutes = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
if(isAuth) {
    return(
        <Switch>
            <Route path="/links" exact>
                <LinksPage />
            </Route>
            <Route path='/create' exact>
                <CreatePost/>
            </Route>
            <Route path='/detail/:id' exact>
                <DetailPage/>
            </Route>
            <Redirect to="/create" />
        </Switch>
    )
} return (
    <Switch>
        {/* <Route path = "/" exact>
            <AuthPage />
        </Route> */}
        <Route path="/registration" component = {AuthPage}/>
        <Route path="/login" component = {Login}/>
        <Redirect to="/registration"/>
    </Switch>
)
}