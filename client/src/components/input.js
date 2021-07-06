import React from 'react'
export const Input = (props) => {
  
    return (
      <div className = "row col s10 offset-s1">
        <div  className="input-field col s11" >
          <input style = {{margin : 15 }} onChange = {(event) =>props.Setvalue(event.target.value) }
          id={props.id} type={props.type} 
          placeholder = {props.placeholder}
          value = {props.value}/>
          {/* <label htmlFor="email">Email</label> */}
          {props.children}

        </div>
      </div>
    )
}