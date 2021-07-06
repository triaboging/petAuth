import React from 'react'
import { Input } from './input'
import { useState } from 'react'
import {registration} from '../actions/user'
import {login} from '../actions/user'
import { useDispatch } from 'react-redux'


export const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const dispatch = useDispatch()
    return (
    <div className="row">
       <div className = "col s12 m10">
        <div  className="input-field " >
           
            <Input value = {email}
          Setvalue = {setEmail}
          placeholder = 'Введите email'
          type = "text"
          id = 'email'
          >
           <label htmlFor="email">Email</label>
          </Input>
          
        </div>
        <div  className="input-field " >
          <Input value = {password}
          Setvalue = {setPassword}
          placeholder = 'Введите пароль'
          type = "password"
          id = "password"
          >
              <label htmlFor="password">Введите пароль</label>
          </Input>
        </div> 
        
         </div>
      <button 
      onClick = {() =>dispatch (login(email, password))}
      className = "btn waves-effect waves-light" type="submit" name="action">
        Войти
        </button>
    </div>
    )
}