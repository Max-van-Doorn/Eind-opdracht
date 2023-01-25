import React, {useState} from 'react';
import Header from "../../Components/Header";
import axios, {get} from "axios";
import './Home.css'
import {Link} from "react-router-dom";

const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"

function Home() {
    const [gameData, setGameData] = useState({});

    async function fetchData(){
        try {
            const response = await axios.get (`https://api.rawg.io/api/games?key=${apiKey}`);


            // (Hoe zorg ik ervoor dat de API telkens veranderd? Wellicht in Edhub te vinden op hoofdstuk 6.3,6.4 en 6.5?)
            // Ook bespreken of ik eerst de backend moet koppelen voordat ik de gebruikers kan aanmaken? (hoe koppel ik de backend?)

            console.log(response.data);
            setGameData(response.data)
        } catch (e){
            console.error(e);
        }
    }

    return (
        <>
        <div>
            <Header />
        </div>
            <button className="data-button"
                type="button"
                onClick={fetchData}>
                Haal data op!
            </button>
            {/*dit is een test versie. Dit is puur om te zien of de API werkt.*/}
            {Object.keys(gameData).length > 0 &&
                <section className="section">
                    <article className="article">
                        <img className="screenshot" src={gameData.results[0].background_image}/>
                        <Link to={`/Gamedata/${gameData.results[0].id}`}>NAAR DE DETAILS</Link>
                        <h1>{gameData.results[0].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[0].released}</p>
                    </article>
                    <article className="article">
                        <img className="screenshot" src={gameData.results[1].background_image}/>
                        <Link to={`/Gamedata/${gameData.results[1].id}`}>NAAR DE DETAILS</Link>
                        <h1>{gameData.results[1].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[1].released}</p>
                    </article>
                    <article className="article">
                        <img className="screenshot" src={gameData.results[2].background_image}/>
                        <Link to={`/Gamedata/${gameData.results[2].id}`}>NAAR DE DETAILS</Link>
                        <h1>{gameData.results[2].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[2].released}</p>
                    </article>
                </section>
            }
        </>
    );
}

export default Home;