import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Registro = () => {

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();

    const usuario = { nombre, email, telefono, password, role };

    console.log(usuario);

    const response = await axios.post(`/api/usuario/agregarusuario`, usuario);
    const mensaje = response.data;
    console.log(mensaje);

    if (password === cpassword){
    
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

        const ingreso = { email, password };
        console.log(ingreso);
        const response = await axios.post(`/api/usuario/login`, ingreso);
        const mensaje = response.data;
        const token = response.data.token;
        const id_usuario = response.data.id;
        const nombre_usuario = response.data.nombre;
        const role_usuario = response.data.role;
        localStorage.setItem('Token', token);
        localStorage.setItem('idUsuario', id_usuario);
        localStorage.setItem('nombreUsuario', nombre_usuario);
        localStorage.setItem('role', role_usuario);
        window.location.href = "/index";
      }
    }else{
      Swal.fire({
        text: "Error Passwords no coinciden",
        icon: "error",
      });
    }

    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>
                  {/* <!-- End Logo --> */}

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Crear una cuenta
                        </h5>
                        <p className="text-center small">
                          Ingrese sus datos personales
                        </p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <label for="yourName" className="form-label">
                            Nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="yourName"
                            required
                            onChange={(e) => setNombre(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please, enter your name!
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourEmail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="yourEmail"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter a valid Email adddress!
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="yourEmail" className="form-label">
                            Telefono
                          </label>
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            id="yourPhone"
                            required
                            onChange={(e) => setTelefono(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter a valid Phone!
                          </div>
                        </div>

                       
                        <div className="col-12">
                          <label for="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <label for="confirmPassword" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="confirmPassword"
                            onChange={(e) => setCpassword(e.target.value)}
                            required
                          />
                          <div className="invalid-feedback">
                            Please confirm your password!
                          </div>
                        </div>
                        <div className="col-12">
                          <label for="confirmPassword" className="form-label">
                            Role
                          </label>
                          <select id="Role" className="form-select"  onChange={(e) => setRole(e.target.value)}>
                          <option value="0000" selected>Escoja la opción</option>
                          <option value="User">User</option>
                          <option value="Sales">Sales</option>
                          <option value="IT">IT</option>
                        </select>

                          <div className="invalid-feedback">
                            Please confirm your password!
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              name="terms"
                              type="checkbox"
                              value=""
                              id="acceptTerms"
                              required
                            />
                            <label
                              className="form-check-label"
                              for="acceptTerms"
                            >
                              I agree and accept the{" "}
                              <a href="#">terms and conditions</a>
                            </label>
                            <div className="invalid-feedback">
                              You must agree before submitting.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          

                          <button className="btn btn-primary" onClick={handleAdd}>
                          Agregar Usuario
                        </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account?{" "}
                            <a href="/">Log in</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="credits">
                    {/* 
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> 
                */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
};

export default Registro;
