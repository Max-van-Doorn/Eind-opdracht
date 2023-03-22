import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About-us/About-us";
import Registreren from "./Pages/Registeren/Registreren";
import Gamedata from "./Pages/Gamedata/Gamedata";
import Games from "./Pages/Games/Games"
import Profile from "./Pages/Profile/Profile"


function App() {


  return (
      <>
          <div className={"App"}>
            <Navbar />
              <Routes>
             <Route path="/" element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/About-Us" element={<AboutUs />} />
               <Route path="/Registreren" element={<Registreren />} />
                  <Route path="/Gamedata/:id" element={<Gamedata />}/>
                  <Route path="/Games" element={<Games/>}/>
                  <Route path="/Profile" element={<Profile/>}/>
           </Routes>
       </div>
              <footer className="footer-about-us">GameChecker - Max van Doorn</footer>
      </>
  );
}
export default App;
