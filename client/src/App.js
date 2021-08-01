import React from 'react'
import 'materialize-css'
import {useRoutes} from './routes'
import { useEffect } from 'react'
import {BrowserRouter, } from 'react-router-dom'
import {Navbar} from './components/Navbar'
import Loader from './components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {auth} from './actions/user'
// import { Registration } from './components/Registration'
// import { Login } from './components/Login'

function App() {
  const routes = useRoutes()
  const isAuth = useSelector(state => state.userReducer.isAuth)
  const loader = useSelector(state => state.userReducer.loading)
  // const loading = useSelector(state => state.userReducer.isAuth)
  console.log(isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(auth())
}, [])
  return (
    <BrowserRouter>
    <Navbar/>
    
    <div className = "container">
     <h1>hello.sdf..</h1>
     {loader && <Loader/>}
     {routes}
     
    </div>
    </BrowserRouter>
  );
}

export default App;
