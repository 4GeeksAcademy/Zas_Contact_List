import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const navigate = useNavigate()
  const { store, actions } = useContext(Context);
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const onChangeInput = (e) => {
    const element = e.target;
    setFormContact((prevForm) => ({
      ...prevForm,
      [element.id]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!formContact.name || !formContact.email) {
      alert("por favor, ingresa un nombre y un email");
      return;
    }
    actions.createContact(formContact, store.slug);
    // setFormContact({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   address: "",
    // });
    navigate ("/ContactList")
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="container col-12 col-md-6">
        <h1 className="text-center pt-2 text-white">New Contact</h1>
        <div className="mb-3 pt-3">
          <label for="name" className="form-label">
            Full Name
          </label>
          <input
            value={formContact.name}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter full name"
            // onChange={(e)=>setFormContact(prevForm=>({...prevForm, name:e.target.value}))}
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">
            E-mail
          </label>
          <input
            value={formContact.email}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label">
            Phone Number
          </label>
          <input
            value={formContact.phone}
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone number"
            onChange={onChangeInput}
          />
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">
            Address
          </label>
          <input
            value={formContact.address}
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            onChange={onChangeInput}
          />
        </div>
        <br />
        <div className="row">
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <div className="d-flex justify-content-end mt-3">
        <Link to="/ContactList">
          <span className="text-success">Get back to contacts</span>
        </Link>
        </div>
        </div>
      </div>
    </form>
  );
};

export default AddContact;
