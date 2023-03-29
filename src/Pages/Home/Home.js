import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header";
import axios from "axios";
import './Home.css'
import {Link} from "react-router-dom";
import SearchBar from "../../Components/Searchbar/Searchbar";
import GameTile2 from "../../Components/Gametile/Gametile2";
import myGif from '../../Assets/Gaming-gif.gif';


function Home() {
    const [gameData, setGameData] = useState({});
    const [gameLocation, setGameLocation] = useState("")

    async function fetchData() {
        try {
            const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`, {
                params: {
                    search: "Grand Theft Auto"
                }
                }
            );


            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`,{
                    params:{
                    }
                });


                console.log(response.data);
                setGameData(response.data)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div>
            <Header />
        </div>
            <div className="games-button-container-2">
            <button className="games-button-2" type="button"> <a className="button-link" href={"/Search"}>Geavanceerd zoeken</a>
            </button>
            </div>
            {Object.keys(gameData).length > 0 &&
                <section className="section">
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[0].id}`}>
                        <img className="screenshot" src={gameData.results[0].background_image} alt="foto"/>
                        </Link>
                        <h1>{gameData.results[0].name}</h1>
                        <p className="text"><strong>Released:</strong> {gameData.results[0].released}</p>
                    </article>
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[1].id}`}>
                        <img className="screenshot" src={gameData.results[1].background_image} alt="foto"/>
                        </Link>
                        <h1>{gameData.results[1].name}</h1>
                        <p className="text"><strong>Released:</strong> {gameData.results[1].released}</p>
                    </article>
                    <article className="article">
                        <Link to={`/Gamedata/${gameData.results[18].id}`}>
                        <img className="screenshot" src={gameData.results[18].background_image} alt="foto"/>
                        </Link>
                        <h1>{gameData.results[18].name}</h1>
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
            <button className="games-button" type="button"> <a className="button-link" href={"/Games"}>Klik hier voor de trending games lijst</a>
            </button>
            </div>
        </>
    );
}

export default Home;