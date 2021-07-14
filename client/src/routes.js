import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { AuthPage } from './pages/AuthPage'
import { Login } from './components/Login'
import { useSelector } from 'react-redux'
import { ConfirmationPage } from './pages/Confirmation';
export const useRoutes =()=>{
    const isAuth = useSelector(state => state.userReducer.isAuth)
if(isAuth) {
    console.log('место №100', isAuth)
    return(
        <Switch>
            <Route path="/links" exact>
                <LinksPage />
            </Route>
            
            <Route path="/login" component = {Login}/>
            <Redirect to="/links"/>
        </Switch>
    )
} return (
    <Switch>
        {/* <Route path = "/" exact>
            <AuthPage />
        </Route> */}
        <Route path="/registration" component = {AuthPage}/>
        <Route path="/login" component = {Login}/>
        <Route path="/confirmation" component = {ConfirmationPage}/>
        <Redirect to="/registration"/>
    </Switch>
)
}