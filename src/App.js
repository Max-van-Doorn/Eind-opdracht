import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About-us/About-us";
import Registreren from "./Pages/Registeren/Registreren";


function App() {
  return (
      <div className={"App"}>
           <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/About-Us" element={<AboutUs />} />
              <Route path="/Registreren" element={<Registreren />} />
          </Routes>
      </div>
  );
}

export default App;
