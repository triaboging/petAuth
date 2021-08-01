import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userReducer, { logout } from '../reducers/userReducer'

export const Navbar =()=> {
  const userEmail = useSelector(state => state.userReducer.currentUser.email)
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.userReducer.isAuth)
  console.log('isAuth:', isAuth)
    return(
      <div className= "navbar-fixed">
        <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      
      <a href="#" data-target="slide_out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        {!isAuth &&<li><NavLink to='/registration'>registration</NavLink></li>}
        {!isAuth &&<li><NavLink to='/login'>login</NavLink></li>}
        {isAuth &&<li><div style = {{ marginRight: 40}}>{userEmail}</div></li>}
        {isAuth && <li><NavLink to='/create'>create post</NavLink></li>}
        {isAuth && <li><NavLink to='/links'>посты</NavLink></li>}
        {isAuth && <li style = {{cursor: 'pointer', marginRight: 40, hover: false}} onClick = {()=>dispatch(logout())}>выйти</li>}
      </ul>
    </div>
  </nav>
    <ul className="sidenav" id="slide_out">
    {!isAuth &&<li><NavLink to='/registration'>registration</NavLink></li>}
        {!isAuth &&<li><NavLink to='/login'>login</NavLink></li>}
        {isAuth &&<li><div style = {{ marginRight: 40}}>{userEmail}</div></li>}
        {isAuth && <li><NavLink to='/create'>create post</NavLink></li>}
        {isAuth && <li style = {{cursor: 'pointer', marginRight: 40, hover: false}} onClick = {()=>dispatch(logout())}>выйти</li>}
  </ul>
  </div>
    )
}