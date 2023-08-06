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
import FormEditContact from "../components/FormEditContact.js";

const EditContact = () => {
  return (
    <div>
        <Header/>    
        <Sidebar/>
        <FormEditContact/>
        <Footer/>

    </div>
  )
}

export default EditContact