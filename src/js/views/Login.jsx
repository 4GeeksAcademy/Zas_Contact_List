import React, { useEffect, useState, useContext, } from 'react'

import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';




export const Login = () => {

  const {store,actions}= useContext(Context)

  const navigate = useNavigate()
  const [input, setInput] = useState("")

 

  return (
    <div className='wrapper container col-8 col-md-3 d-flex juastify-content-center mt-5'>

        <input className="form-control"type="text" placeholder='Enter user name' 
        value={input} onChange= {(e)=>setInput(e.target.value)}> 
        </input>
        <button className='btn btn-success mx-4' onClick={()=>{
          actions.getAllAgendas(input)
        navigate("/ContactList")
        }}>Login</button>
    </div>
  )
}
