import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Navbars from "./Components/Navbar";
import Index from "./Components/Profile";
import Foote from "./Components/Foote";
import Faq from "./Components/Faq";
import About from "./Components/About";
import AttandanceShhet from "./Components/AttandanceShhet";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Index />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/attendance" element={<AttandanceShhet />} />

          {/* <Route path="/nav" element={<Navbar />} /> */}
        </Routes>
        {/* <Foote /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
