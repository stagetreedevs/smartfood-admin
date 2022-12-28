import React from 'react';
import './App.scss';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protect from './pages/Protect';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';
import { useAuth } from './context/AuthProvider/useAuth';
import Register from './pages/Register';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import Delivery from './pages/Delivery';
import LandingPageDelivery from './pages/LandingPageDelivery';
import HomeDelivery from './pages/HomeDelivery';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/location" element={<LandingPage />} />
          <Route path="/delivery" element={<LandingPageDelivery />} />
          <Route path="/Home" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/HomeDelivery" element={
            <Protect>
              <HomeDelivery />
            </Protect>
          } />
          <Route path="/config" element={
            <Protect>
              <Config />
            </Protect>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/RegistroEntregador" element={<Delivery />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
