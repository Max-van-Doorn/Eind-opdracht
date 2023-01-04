import './App.css';
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import React from "react";


function App() {
  return (
      <div className={"App"}>
           <Navbar />
          <div>
              <Header/>
          </div>
      </div>
  );
}

export default App;
