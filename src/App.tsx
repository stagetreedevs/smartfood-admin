import React from 'react';
import './App.scss';
import { AuthProvider } from './context/AuthProvider';
import RoutesApp from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Protect from './pages/Protect';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Home from './pages/Home';
import Config from './pages/Config';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={
            <Protect>
              <Home />
            </Protect>
          } />
          <Route path="/config" element={
            <Protect>
              <Config />
            </Protect>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
