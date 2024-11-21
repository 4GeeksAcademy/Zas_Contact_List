import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import ContactList from "./views/contactList";
import AddContact from "./views/AddContact";
import ContactCard from "./component/contactCard";

import injectContext, { Context } from "./store/appContext";

import { Login } from "./views/Login";
import EditContact from "./views/editContact";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
const {store,actions}= useContext(Context)





  return (
    <div>

  
      <BrowserRouter basename="">
       
         
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/ContactList" element={<ContactList />} />
            <Route path="/addContact" element={<AddContact />} />
            <Route path="/editContact/:id" element={<EditContact/>} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
         
        
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
