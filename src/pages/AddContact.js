import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import FormAddContact from "../components/FormAddContact.js";
import DataTable from "../components/DataTable.js";
import Sidebar from "../components/Sidebar.js";

const AddContact = () => {
  return (
    <div>
        <Header/>    
        <Sidebar/>
        <FormAddContact/>
        <Footer/>

    </div>
  )
}

export default AddContact