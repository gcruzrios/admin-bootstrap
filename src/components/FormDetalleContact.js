import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

const FormDetalleContact = () => {

  const [data, setData] = useState(Object);
  const { id } = useParams();
  //console.log(id);
      
  
    const handleAdd = async (e) => {
    e.preventDefault();

    window.location.href = "/index";
    
    };

    const GetContact = async () => {

    const response = await axios.get(`/api/contactos/${id}`);
    const mensaje = response.data;
    setData(mensaje);
    console.log(mensaje);
    
     }

    const peticionGet = async () => {
      
        await axios     
        .get(`/api/contactos/${id}`)
        .then((response) => {
          setData(response.data);
        });
        console.log(data);
    }; 




    useEffect(() => {
      GetContact();
      //peticionGet();
    }, []);
  
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Detalle del Contacto</h1>
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
                        <input type="text" className="form-control" readOnly disabled value={data.nombre}/>
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
                        <input type="text" className="form-control" readOnly disabled value={data.telefono} />
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
                        <input type="text" className="form-control" readOnly disabled value={data.celular}/>
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
                        <input type="email" className="form-control" readOnly disabled value={data.email}/>
                      </div>
                    </div>
                   

                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">
                        Submit Button
                      </label>
                      <div className="col-sm-10">
                        <button className="btn btn-primary" onClick={handleAdd}>
                          Regresar al Index
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

export default FormDetalleContact;
