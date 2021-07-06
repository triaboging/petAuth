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
        <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
        {!isAuth &&<li><NavLink to='/registration'>registration</NavLink></li>}
        {!isAuth &&<li><NavLink to='/login'>login</NavLink></li>}
        {isAuth &&<li><div style = {{ marginRight: 40}}>{userEmail}</div></li>}
        
        {isAuth && <li style = {{cursor: 'pointer', marginRight: 40, hover: false}} onClick = {()=>dispatch(logout())}>выйти</li>}
      </ul>
    </div>
  </nav>
    )
}