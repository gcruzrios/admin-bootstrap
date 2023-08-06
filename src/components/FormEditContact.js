import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const FormAddContact = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [celular, setCelular] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState(Object);
  const { id } = useParams();

  const GetContact = async () => {

    const response = await axios.get(`/api/contactos/${id}`);
    const mensaje = response.data;
    setData(mensaje);
    setNombre(mensaje.nombre);
    setTelefono(mensaje.telefono);
    setCelular(mensaje.celular);
    setEmail(mensaje.email);
        
    console.log(mensaje);
    
  }

  const handleEdit = async (e) => {
    e.preventDefault();

//    const token = data.Token;
//    localStorage.setItem("Token", token);

    const contacto = { nombre, telefono, celular, email };
    
    console.log(contacto);

    // const response = await axios.post(`/api/login`, ingreso, {
    //     "Content-Type": "application/json", headers: { Authorization: 'No Auth' } 
    // });

    const response = await axios.put(`/api/contactos/${id}`, contacto);

    
    

    const respuesta = response.data;
    console.log(respuesta);
    
    
    if (respuesta ===null) {
      Swal.fire({
        text: "Error actualizando contacto..",
        icon: "error",
      });
    } else {
        Swal.fire({
            text: "Contacto actualizado con éxito..",
            icon: "success",
          });
     
      window.location.href = "/index";
    }
  };

  useEffect(() => {
    GetContact();
    //peticionGet();
  }, []);


  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Agregar Contacto</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/index">Home</a>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Elements</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">General Form Elements</h5>

                  {/* <!-- General Form Elements --> */}
                  <form>
                    <div className="row mb-3">
                      <label
                        for="inputText"
                        className="col-sm-2 col-form-label"
                      >
                        Nombre
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" value={nombre}  onChange={(e) => setNombre(e.target.value)}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Teléfono
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" value={telefono}  onChange={(e) => setTelefono(e.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Celular
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                      </div>
                    </div>
                    {/* <div className="row mb-3">
              <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control"/>
              </div>
            </div> */}

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Submit Button
                      </label>
                      <div className="col-sm-10">
                        <button className="btn btn-primary" onClick={handleEdit}>
                          Editar Usuario
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <!-- End General Form Elements --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
};

export default FormAddContact;
