import React, { useEffect, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    //obtenerToken();
  }, []);

  // const obtenerToken = async () => {

  //     const auth_user = { Username: "c0n4p4n$AppSIPAMUser", Password: "c0n4p4n$AppSIPAMpass" }
  //     const respuesta = await axios.post(`/wsSIPAM/Authenticate`, auth_user);

  //     const token = respuesta.data.Token;

  //     localStorage.setItem('Token', token);

  // }

  const handleLogin = async (e) => {
    e.preventDefault();

//    const token = data.Token;
//    localStorage.setItem("Token", token);

    const ingreso = { email, password };
    
    console.log(ingreso);

    // const response = await axios.post(`/api/login`, ingreso, {
    //     "Content-Type": "application/json", headers: { Authorization: 'No Auth' } 
    // });

    const response = await axios.post(`/api/login`, ingreso);

    
    

    const mensaje = response.data;
    console.log(mensaje);
    
    
    if (mensaje ==="Las Credenciales de usuario fallaron") {
      Swal.fire({
        text: "Usuario o contraseña incorrectas..",
        icon: "error",
      });
    } else {
      const token = response.data;

      localStorage.setItem('Token', token);

      window.location.href = "/index";
    }
  };

  return (
    <div>
      <main>
        <div class="container">
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div class="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      class="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span class="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>

                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p class="text-center small">
                          Enter your email & password to login
                        </p>
                      </div>

                      <form class="row g-3 needs-validation" novalidate>
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">
                            Email
                          </label>
                          <div class="input-group has-validation">
                            <span
                              class="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              class="form-control"
                              id="yourUsername"
                              required 
                              onChange={(e) => setEmail(e.target.value)}
                              
                            />
                            <div class="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>

                        <div class="col-12">
                          <label for="yourPassword" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div class="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div class="col-12">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label class="form-check-label" for="rememberMe">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100"  onClick={handleLogin}>
                            Login
                          </button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">
                            Don't have account?{" "}
                            <a href="pages-register.html">Create an account</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div class="credits">
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
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

export default Login;
