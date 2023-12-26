import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import RegistrationForm from './component/RegistrationForm';
import './App.css';

const App = () => {
  return (
    <div className= "App">
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/RegistrationForm" element={<RegistrationForm/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
