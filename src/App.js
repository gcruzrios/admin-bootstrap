import logo from './logo.svg';
import './App.css';

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/Error404";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import AddContact from './pages/AddContact';
import DetalleContact from './pages/DetalleContact';
import EditContact from './pages/EditContact';
import Registro from './pages/Registro';


const estaAutenticado = () => {
  const token = localStorage.getItem("Token");
  
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return false;
  }
};


function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/registro" exact element={<Registro />} />
          {/* <Route
            exact
            path="/index"
            element={estaAutenticado() ? <Index /> : <Navigate to="/" />}
                       
          /> */}
          <Route path="/index" exact element={estaAutenticado() ? <Index /> : <Navigate to="/" />} />
          <Route path="/addcontact" exact element={estaAutenticado() ? <AddContact/> : <Navigate to="/" />} />
          <Route path="/editcontact/:id" exact element={estaAutenticado() ? <EditContact/> : <Navigate to="/" />} />
          <Route path="/detailcontact/:id" exact element={estaAutenticado() ? <DetalleContact/> : <Navigate to="/" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
