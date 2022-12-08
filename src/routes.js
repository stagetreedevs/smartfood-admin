import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/header";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function RoutesApp() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
