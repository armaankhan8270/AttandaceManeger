import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbars from "./Components/Navbar";
import Index from "./Components/Profile";
import Foote from "./Components/Foote";
import Faq from "./Components/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Index />} />
        <Route path="/faq" element={<Faq />} />

        {/* <Route path="/nav" element={<Navbar />} /> */}
      </Routes>
      <Foote />
    </BrowserRouter>
  );
}

export default App;
