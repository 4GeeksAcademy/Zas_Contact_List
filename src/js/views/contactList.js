

import React, { useState, useEffect, useContext } from "react";
import Navbar from "../component/navbar";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";



const ContactList =  ()=>{

    const { store, actions } = useContext(Context);
    
    useEffect(() => {
      const slug = localStorage.getItem("slug")
        if (slug) {
          actions.getContacts(slug);
          console.log(store);
          
        }
      }, []);
     
      
    return(
        <>
        <div className="container col-12 col-md-4">
       <Navbar/>
       <div>
        {store.contacts.map(contact=>(
            <ContactCard
            key={contact.id}
            {...contact} />
        ))}
       

       </div>

       </div>
        </>

    )
}

export default ContactList;