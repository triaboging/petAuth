import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {createPostFunction} from '../../actions/user'



export const CreatePost = (props) => {
     const dispatch = useDispatch()
    const [form, setForm] = useState({title: '', discription: ''})
   
    
    // console.log( 'значение:', Object.values(form).join())
   const history = useHistory()

    return(
        
     <div className="row" style = {{marginTop: 50}}>
        {/* <form className="col s12"  > */}
          <div className="row">
                <div className="input-field col s6 m6">
                    <input type="text" value = {form.title} onChange = {(e)=> setForm({...form, [e.target.name]: e.target.value})}  id="title" name = "title"  className = "validate"/>
                
                <label htmlFor="title">title:</label>
                </div>
            
          </div>
            <div className="row">
                <div className="input-field col s12">
                <textarea value = {form.discription} onChange = {(e)=> setForm({...form, [e.target.name]: e.target.value})} id="textarea1" name = "discription" className="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Textarea</label>
                </div>
            </div>
          
            <button className = "btn waves-effect waves-light" type="submit" name="action"
            
            onClick = {()=> dispatch(createPostFunction(/* form.title, form.discription */form, history))}
             >Submit
    <i className="material-icons right">send</i>
  </button>
          
        {/* </form> */}
    </div>
    )
}