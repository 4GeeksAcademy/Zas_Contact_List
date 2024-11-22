import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";




const ContactCard = ({name, email, phone, address,id}) => {
const { store, actions } = useContext(Context)

const eliminarContacto = () => {
  const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este contacto?");
  if (confirmDelete) {
    actions.deleteContact(id, store.slug);  // Llamar a la acción deleteContact pasándole el id
  }
};


  return (
    <div>
    <div className="card mx-auto mb-1" >
      <div className="row g-4">
        <div className="">
           <img src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" className="img-fluid rounded-circle mx-2 mt-2" style={{ width: "150px", height: "150px", objectFit: "cover" }} alt="imagen del contacto" /> 
        </div>
        <div className="col-md-12">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title text-start">{name}</h5>
              <div>
                <Link to={`/editContact/${id}`}>
                  <button
                    className="me-2 bg-success text-white"
                    style = {{
                      color: "black",
                      border: "none",
                      borderRadius: "3px",
                      cursor: "pointer",
                    }}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </Link>
                <button
                  className="me-2 bg-danger text-white"
                  onClick={eliminarContacto}
                  style={{
                    color: "black",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <p className="card-text text-start">{address}</p>
            <p className="card-text text-start">{phone}</p>
            <p className="card-text text-start">{email}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ContactCard;
