
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Content from "../components/Content.js";
import DataTable from "../components/DataTable.js";
import Sidebar from "../components/Sidebar";
const Index = () => {
  return (
    <div>
        <Header/>    
        <Sidebar/>
        <DataTable/>
        <Footer/>
    </div>
  )
}

export default Index