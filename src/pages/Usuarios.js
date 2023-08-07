
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
  } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Sidebar from "../components/Sidebar";
import ListUsuarios from "../components/ListUsuarios.js";
const Index = () => {
  return (
    <div>
        <Header/>    
        <Sidebar/>
        <ListUsuarios/>
        <Footer/>
    </div>
  )
}

export default Index