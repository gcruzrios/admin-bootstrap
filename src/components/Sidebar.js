import React from 'react'

const Sidebar = () => {
  return (
    <div>

{/* <!-- ======= Sidebar ======= --> */}
  <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link " href="/index">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      
     

      

    

      

     
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <a className="nav-link " href="/index">
        <i class="bi bi-people-fill"></i>
          <span>Contactos</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/addcontact">
        <i class="bi bi-person-plus-fill"></i>
          <span>Agregar Contacto</span>
        </a>
      </li>
      {/* <!-- End Profile Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="/usuarios">
        <i class="bi bi-people-fill"></i>
          <span>Lista de Usuarios</span>
        </a>
      </li>
      {/* <!-- End F.A.Q Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="/addusuario">
        <i class="bi bi-person-plus-fill"></i>
          <span>Agregar Usuario</span>
        </a>
      </li>
      {/* <!-- End Contact Page Nav --> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="bi bi-card-list"></i>
          <span>Register</span>
        </a>
      </li> */}
      {/* <!-- End Register Page Nav --> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li> */}
      {/* <!-- End Login Page Nav --> */}

      {/* <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-dash-circle"></i>
          <span>Error 404</span>
        </a>
      </li> */}
      {/* <!-- End Error 404 Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-file-earmark"></i>
          <span>Blank</span>
        </a>
      </li>
      {/* <!-- End Blank Page Nav --> */}

    </ul>

  </aside>
  {/* <!-- End Sidebar--> */}

    </div>
  )
}

export default Sidebar