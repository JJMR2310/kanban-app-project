import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Servicio from './components/Landingpage/Header/Servicio';
import Contacto from './components/Landingpage/Header/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/servicio' element={<Servicio/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
