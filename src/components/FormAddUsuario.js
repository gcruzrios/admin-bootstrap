import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const FormAddContact = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  
  
  const handleAdd = async (e) => {
    e.preventDefault();

    const usuario = { nombreUsuario, email, password, role };

    console.log(usuario);

    const response = await axios.post(`/api/usuarios`, usuario);
    const mensaje = response.data;
    console.log(mensaje);

    if (mensaje === null) {
      Swal.fire({
        text: "Error insertando usuario..",
        icon: "error",
      });
    } else {
      Swal.fire({
        text: "Usuario insertado con éxito..",
        icon: "success",
      });

      window.location.href = "/usuarios";
    }
  };

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
                        Nombre Usuario
                      </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control"  onChange={(e) => setNombreUsuario(e.target.value)}/>
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
                        <input type="text" className="form-control"  onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputEmail"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        for="inputRole"
                        className="col-sm-2 col-form-label"
                      >
                        Role
                      </label>
                      <div className="col-sm-10">
                        <select id="Role" class="form-select"  onChange={(e) => setRole(e.target.value)}>
                          <option value="0000" selected>Escoja la opción</option>
                          <option value="Admin">Admin</option>
                          <option value="Sales">Sales</option>
                          <option value="IT">IT</option>
                        </select>

                        
                        
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
                        <button className="btn btn-primary" onClick={handleAdd}>
                          Agregar Usuario
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
