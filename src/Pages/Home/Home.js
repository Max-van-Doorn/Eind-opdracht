import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import axios, {get} from "axios";
import './Home.css'
import {Link} from "react-router-dom";
import SearchBar from "../../Components/Searchbar";
import GameTile2 from "../../Components/Gametile2";
import myGif from '../../Assets/Gaming-gif.gif';

const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"

function Home() {
    const [gameData, setGameData] = useState({});
    const [gameLocation, setGameLocation] = useState("")
    useEffect(() => {
        async function fetchData1() {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=${apiKey}`);


                // (Hoe zorg ik ervoor dat de API telkens veranderd? Wellicht in Edhub te vinden op hoofdstuk 6.3,6.4 en 6.5?)
                // Ook bespreken of ik eerst de backend moet koppelen voordat ik de gebruikers kan aanmaken? (hoe koppel ik de backend?)

                console.log(response.data);
                setGameData(response.data)
            } catch (e) {
                console.error(e);
            }

        }
        fetchData1();
    }, []);

    return (
        <>
        <div>
            <Header />
        </div>
            <SearchBar setGameHandler={setGameLocation}/>
            {/*dit is een test versie. Dit is puur om te zien of de API werkt.*/}
            {Object.keys(gameData).length > 0 &&
                <section className="section">
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[0].id}`}>
                        <img className="screenshot" src={gameData.results[0].background_image} />
                        </Link>
                        <h1>{gameData.results[0].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[0].released}</p>
                    </article>
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[1].id}`}>
                        <img className="screenshot" src={gameData.results[1].background_image}/>
                        </Link>
                        <h1>{gameData.results[1].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[1].released}</p>
                    </article>
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[18].id}`}>
                        <img className="screenshot" src={gameData.results[18].background_image}/>
                        </Link>
                        <h1>{gameData.results[18].name}</h1>
                        {/*<p><strong>{gameData.developers[0].name}</strong></p>*/}
                        <p className="text"><strong>Released:</strong> {gameData.results[18].released}</p>
                    </article>
                </section>
            }
            {Object.keys(gameData).length > 0 &&
                <section className="gametile2-section">
                    <GameTile2
                        games={gameData}
                        image={gameData.results[15].background_image}
                        link={gameData.results[15].id}
                        title={gameData.results[15].name}
                        released={gameData.results[15].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[14].background_image}
                        link={gameData.results[14].id}
                        title={gameData.results[14].name}
                        released={gameData.results[14].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[13].background_image}
                        link={gameData.results[13].id}
                        title={gameData.results[13].name}
                        released={gameData.results[13].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[12].background_image}
                        link={gameData.results[12].id}
                        title={gameData.results[12].name}
                        released={gameData.results[12].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[11].background_image}
                        link={gameData.results[11].id}
                        title={gameData.results[11].name}
                        released={gameData.results[11].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[10].background_image}
                        link={gameData.results[10].id}
                        title={gameData.results[10].name}
                        released={gameData.results[10].released}/>
                </section>
            }
            <section className="gif-container">
                <img className="gif" src={myGif} alt="gif"/>
            </section>
            <div className="games-button-container">
            <button className="games-button"> <a className="button-link" href={"/Games"}>Klik hier voor de complete games lijst</a>
            </button>
            </div>
        </>
    );
}

export default Home;