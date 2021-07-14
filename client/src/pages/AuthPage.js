import React from 'react'
import { Formik } from 'formic'
import * as yup from 'yup';
import { Registration } from '../components/Registration'

export const AuthPage = () => {
    return(
        
    <div className="row">
    <div className="col s5 m8 offset-m2">
      <div className="card blue-grey darken-1">
        <Registration/>
        <div className="card-action">
         

          
        </div>
      </div>
    </div>
  </div>
    )
}