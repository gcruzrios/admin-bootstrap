import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import Sidebar from "../components/Sidebar.js";
import FormDetalleContact from "../components/FormDetalleContact.js";

const DetalleContact = () => {
  return (
    <div>
        <Header/>    
        <Sidebar/>
        <FormDetalleContact/>
        <Footer/>

    </div>
  )
}

export default DetalleContact