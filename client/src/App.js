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
import SearchByroll from "./Components/SearchByroll";
import { GlobalUserContetx } from "./Context/UserContext";
import Help from "./Components/Help";

function App() {
  const {
    UserLogin,
    setUserLogin,
    UserLogout,
    setUserLogout,
    NameOfUser,
    setNameOfUser,
  } = GlobalUserContetx();
  return (
    <BrowserRouter>
      <div className="">
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Index />} />
          <Route path="/faq" element={UserLogin ? <Faq /> : <Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route
            path="/attendance"
            element={UserLogin ? <AttandanceShhet /> : <Login />}
          />
          <Route
            path="/search"
            element={UserLogin ? <SearchByroll /> : <Login />}
          />

          {/* <Route path="/nav" element={<Navbar />} /> */}
        </Routes>
        {/* <Foote /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
