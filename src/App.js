import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { createContext, useState } from "react"
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css';
import './Route/Nav.module.css';
import Navb from './Route/Nav.js'
import Mainpage from './Route/Mainpage.js'
import Footer from './Route/Footer.js';
import Shop from './Route/Shop.js';

function App() {
  let navigate = useNavigate();

  return (
    <div id='App' className='App'>

      <Navb />

      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>} />

        <Route path='/shop' element={<Shop></Shop>} />

      </Routes>

      <Footer></Footer>



    </div>
  );
}

export default App;
