import React, { useEffect, useState, useContext, } from 'react'

import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';




export const Login = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleLogin = () => {
    if (input) {
      
      localStorage.setItem("slug", input); // Guarda el slug en localStorage
      actions.getAllAgendas(input); // Obtienes las agendas (o el slug asociado)
      navigate("/ContactList"); // Rediriges a la lista de contactos
    } else {
      alert("Por favor, ingresa un nombre de usuario");
    }
  };

  return (
    <div className='wrapper container col-8 col-md-3 d-flex justify-content-center mt-5'>
      <input 
        className="form-control" 
        type="text" 
        placeholder='Enter user name' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button 
        className='btn btn-success mx-4' 
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
