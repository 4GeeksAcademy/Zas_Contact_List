import AddContact from "../views/AddContact";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      slug: "",
      contacts: [
        // {
        //   name: "",
        //   phone: "",
        //   email: "",
        //   address: "",
        //   id: null,
        // },
      ],
    },
    actions: {

      getAllAgendas: async (slug)=>{
        try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas?offset=0&limit=100")

          const result = await response.json()
          if (!response.ok)
            throw new Error("error obteniendo agendas");
          //filter retorna un arreglo con el resultado q coincide o un arreglo vacío si no coincide con nada
          const agenda = result.agendas.filter(ag => ag.slug === slug)
          console.log(agenda);
          if (agenda.length === 0) {
            getActions().createAgenda(slug)
            localStorage.setItem("slug",slug)
            console.log(agenda);
            
          }

          
          getActions().getAgenda(agenda[0].slug)
          localStorage.setItem("slug",slug)

        } catch (error) {
          console.log(error);
          
          
        }
      },




      createAgenda: async (slug) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`,
            {
              method: "POST",
              headers: {
                accept: "application/json",
              },
            }
          );
          if (!response.ok) {
            alert("error creando agenda");
            throw new Error("error creando agenda");
          }
          const result = await response.json();
          console.log(result);
          setStore({ slug: result.slug });
        } catch (error) {
          console.log(error.message);
        }
      },

      createContact: async (contact, slug) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts`,
            {
              method: "POST",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                contact
              ),
            }
          );
          console.log(response);
          
          
          const result = await response.json();
          console.log(result);
          
          const store = getStore()
          
          setStore({contacts:[...store.contacts, result]})
          console.log(result);
          
        } catch (error) {
          console.log(error);
        }
      },

      getAgenda: async (slug) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          
          if (!response.ok)
            throw new Error ("no se pudo recuperar agenda")

          const result = await response.json();
          // {
          //   "slug": "zas",
          //   "contacts": []
          // }
      setStore({slug: result.slug, contacts: result.contacts}) 

        } catch (error) {
          console.log(error.message);
        }
      },
            
      getContacts: async (slug) => {
        let store = getStore()
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const result = await response.json();
         
          setStore({slug:slug,contacts: result.contacts})
          
        } catch (error) {
          console.log(error);
        }
      },

      editContact: async (contact, slug) => {
        const {id, name, email, phone, address} = contact
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,
            {
              method: "PUT",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                address: address,
              }),
            }
          );
          const result = await response.json();
          // if (response.ok) {
          //   alert("Se ha editado el contacto");
          // }
          const store = getStore();
          const updatedContacts = store.contacts.map((contact) =>
            contact.id === id ? result : contact
          );
          setStore({ contacts: updatedContacts });

        } catch (error) {
          console.log(error);
        }
      },

      deleteContact: async (id,slug) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`,
            {
              method: "DELETE",
              headers: {
                accept: "application/json",
              },
            }
          );
          if (!response.ok) throw new Error("Error eliminando contacto");
          const store = getStore();
          const updatedContacts = store.contacts.filter((contact) => contact.id !== id);
          setStore({ contacts: updatedContacts });
        
          console.log("Contacto eliminado");
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
