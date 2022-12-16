import { BrowserRouter, Routes, Route, } from "react-router-dom";

// import Header from "./components/header";
import Home from "./pages/Protect";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";

function RoutesApp() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
