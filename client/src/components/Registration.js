import React from 'react'
// import { Input } from './input'
import { useState } from 'react'
import {registration} from '../actions/user'
import { Formik } from 'formik'
import * as yup from 'yup'
import './Registration.css'

export const Registration = (props) => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const validationsShema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().min(2,'пароль не надежный')
    .max(15,'Too long').required('Required'),
  })
  return (
  <div className="row">
    <Formik 
    validateOnBlur
    initialValues={{
      
      email: "",
      password: ""
    }}
    // validateOnBlur
    validationSchema = {validationsShema}
    onSubmit = {(values) => registration(values.email, values.password)}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
        <div className = "Block">
      <div style = {{display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexShrink: 0
      }}className = "col s12 m12 ">
       
      <div  className="input-field " >
         
          <input value = {values.email}
          type = {`text`}
        // Setvalue = {setEmail}
        placeholder = 'Введите email'
        name = { `email`}
        id = 'email'
        onChange = {handleChange}
        onBlur = {handleBlur}
        value = {values.email}
        />
         <label htmlFor="email">Email</label>
        
        {touched.email && errors.email ? <div className = "alert">{errors.email}</div>:null}
      </div>
      <div  className="input-field " >
        <input value = {values.password}
        // Setvalue = {setPassword}
        placeholder = 'Введите пароль'
        type = {`password`}
        id = "password"
        onChange = {handleChange}
        onBlur = {handleBlur}
        />
        {touched.password && errors.password && <div className = "alert">{errors.password}</div>}
            <label htmlFor="password">Введите пароль</label>
       
      </div> 
      
       </div>
       {console.log(`isvalid: ${isValid}, dirty: ${dirty}`)}
    <button 
    
    disabled={ !isValid  }
    // onClick = {() => registration(email, password)}
    onClick = {handleSubmit}
    type = {`submit`}
    className = "btn waves-effect waves-light"
    
    type="submit" 
    name="action">
      Sign Up
      </button>
      </div>
      )}
     
      </Formik>
  </div>
  )
}
// export const Registration = (props) => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
    
//     return (
//     <div className="row">
//        <div className = "col s12 m10">
//         <div  className="input-field " >
           
//             <Input value = {email}
//           Setvalue = {setEmail}
//           placeholder = 'Введите email'
//           type = "text"
//           id = 'email'
//           >
//            <label htmlFor="email">Email</label>
//           </Input>
          
//         </div>
//         <div  className="input-field " >
//           <Input value = {password}
//           Setvalue = {setPassword}
//           placeholder = 'Введите пароль'
//           type = "password"
//           id = "password"
//           >
//               <label htmlFor="password">Введите пароль</label>
//           </Input>
//         </div> 
        
//          </div>
//       <button 
//       onClick = {() => registration(email, password)}
//       className = "btn waves-effect waves-light" type="submit" name="action">
//         Зарегестрироваться///
//         </button>
//     </div>
//     )
// }