import React, { useState, useEffect, useContext } from "react";
import Navbar from "../component/navbar";
import ContactCard from "../component/contactCard";
import { Context } from "../store/appContext";

const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const slug = store.slug||localStorage.getItem("slug"); // Recupera el slug del localStorage
    if (slug) {
      actions.getContacts(slug); // Si existe el slug, llama a la acción para obtener los contactos
    } else {
      console.error("No se ha encontrado un slug válido en localStorage");
    }
  }, []);

  return (
    <div className="container col-12 col-md-4">
      <Navbar />
      <div>
        {store.contacts.length > 0 ? (
          store.contacts.map((contact) => (
            <ContactCard key={contact.id} {...contact} />
          ))
        ) : (
          <p className="text-white text-center mt-5">
            No tienes ningún contacto guardado
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
