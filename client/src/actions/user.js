import axios from 'axios'
import React from 'react'
import { setUser, logout } from '../reducers/userReducer'
export const registration = async (email, password) => {
    try{
        const response = await axios.post(`http://localhost:5000/api/auth/register`,
    {email, password})
    alert(response.data.message)
    }
    
    catch(e){
        alert(e.response.data.message)
        console.log(e)
    }
}
export const login =  (email, password) => {
    return async dispatch => {
        try{
            const response = await axios.post(`http://localhost:5000/api/auth/login`,
        {email, password})
        dispatch(setUser(response.data.user))
        localStorage.setItem('token', response.data.token)
        alert(response.data.message)
        alert(response.data.token)
        }
        
        catch(e){
            // alert(e.response.data.message)
            console.log(e)
        }
    }
    
}
export const auth =  () => {
    return async dispatch => {
        try {
            console.log('мы тута224')
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            console.log('мы тута1')
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log('мы тута')
        } catch (e) {
            // alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}