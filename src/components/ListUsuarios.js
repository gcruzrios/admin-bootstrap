import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

import axios from "axios";

const ListUsuarios = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    id: 1,
    nombreUsuario: "",
    email: "",
    role: "",
    fechaCreacion: "0001-01-01T00:00:00",
  });

  // jefe:localStor
  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios.get("/api/usuarios").then((response) => {
    
      setData(response.data);
    });
  };


  const eliminar_completo = async (id) => {
    const respuesta = await axios.delete(`api/usuarios/${id}`);
    peticionGet();
  }  
  const eliminar = async (id) => {


    Swal.fire({
      title: 'Está seguro de borrar el registro?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Borrar',
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        eliminar_completo(id);
        Swal.fire('Usuario borrado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El usuario no ha sido borrado', '', 'info')
      }
    })
    
   
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setobsSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(obsSeleccionado);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Data Tables</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Tables</li>
              <li className="breadcrumb-item active">Data</li>
            </ol>
          </nav>
        </div>
        {/* <!-- End Page Title --> */}

        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contactos registrados en BD</h5>
                  

                  {/* <!-- Table with stripped rows --> */}
                  <table className="table datatable">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                       
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                       
                        <th scope="col">Fecha</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedItems.map((obs) => (
                        <tr key={obs.idOrganizacion}>
                          <th scope="row">{obs.id}</th>
                          <td>{obs.nombreUsuario}</td>
                          
                          <td>{obs.email}</td>
                          <td>{obs.role}</td>
                          
                          <td>{obs.fechaCreacion}</td>

                          <td>
                            
                                {/* <Link
                                  className="btn btn-info"
                                  to={`/detailcontact/${obs.id}`}
                                >
                                  {" "}
                                  <i class="bi bi-eye"></i>
                                </Link>
                               */}
                                <Link
                                  className="btn btn-warning"
                                  to={`/editcontact/${obs.id}`}
                                >
                                  
                                  <i class="bi bi-pencil-square"></i>
                                </Link>
                              
                                <button className="btn btn-danger" onClick={()=>eliminar(obs.id)}><i class="bi bi-eraser"></i></button>
                                
                                {/* <Link
                                  className="btn btn-danger"
                                  to={`/removecontact/${obs.id}`}
                                >
                                <i class="bi bi-eraser"></i>
                                </Link> */}
                           

                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="d-flex justify-content-center pt-30">
                    <ReactPaginate
                      pageCount={Math.ceil(data.length / itemsPerPage)}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageChange}
                      containerClassName={"pagination"}
                      activeClassName={"active"}
                      previousLabel={"Anterior"}
                      nextLabel={"Siguiente"}
                    />
                  </div>
                  {/* <!-- End Table with stripped rows --> */}
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

export default ListUsuarios;
