import './App.css';
import React, {useState} from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AboutUs from "./Pages/About-us/About-us";
import Registreren from "./Pages/Registeren/Registreren";

const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"


function App() {
    const [gameData, setGameData] = useState()

    async function fetchData(){
            try {
                const response = await axios.get (`https://api.rawg.io/api/games/15?key=${apiKey}`);
                console.log(response.data);
                setGameData(response.data)
            } catch (e){
                console.error(e);
            }
        }
  return (
      <>
          <div className={"App"}>
            <Navbar />
              <button
                  type="button"
                  onClick={fetchData}>
                  Haal data op!
              </button>
              <Routes>
             <Route path="/" element={<Home />} />
               <Route path="/Login" element={<Login />} />
               <Route path="/About-Us" element={<AboutUs />} />
               <Route path="/Registreren" element={<Registreren />} />
           </Routes>
       </div>
          {/*dit is een test versie. Dit is puur om te zien of de API werkt. ontwerp staat in een apart project*/}
          {gameData &&
          <section className="section">
              <article>
                  <img className="screenshot" src={gameData.background_image}/>
              </article>
              <article>
                  <h1>{gameData.name}</h1>
                  <p><strong>{gameData.developers[0].name}</strong></p>
              </article>
              <article>
                  <p className="text">{gameData.description_raw}</p>
              </article>
          </section>
          }

          </>
  );
}
export default App;
