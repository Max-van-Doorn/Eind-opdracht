import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./Gamedata.css"
import Gametile from "../../Components/Gametile";


function Gamedata(){
    const [gameTile, setGameTile] = useState({})
    const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"
const {id}= useParams();
    async function fetchData(){
        try {
            const response = await axios.get (`https://api.rawg.io/api/games/${id}?key=${apiKey}`);

            console.log(response.data);
            setGameTile(response.data)
        } catch (e){
            console.error(e);
        }
    }

    return (
        <>
            <button className="data-button"
                    type="button"
                    onClick={fetchData}>
                Haal data op!
            </button>
            {Object.keys(gameTile).length > 0 &&
        <article className="game-page-container" >
            <img className="main-gamedata-photo"  src={gameTile.background_image} alt=""/>
            <h1 className="game-name-and-release">{gameTile.name} | Released: {gameTile.released}</h1>
            <p className="game-info"> {gameTile.description_raw}</p>
            <div className="information-container">
                <p><strong> Achievements: </strong>{gameTile.achievements_count}</p>
            <p><strong>Publishers:</strong> {gameTile.publishers[0].name}</p>
            <p><strong>Genres:</strong> {gameTile.genres[0].name}, {gameTile.genres[1].name},</p>
            <p><strong>Platforms:</strong> {gameTile.parent_platforms[0].platform.name}, {gameTile.parent_platforms[1].platform.name}, {gameTile.parent_platforms[2].platform.name} </p>
            </div>
            Website: <h4>{gameTile.website}</h4>
            <img className="secondary-gamedata-photo" src={gameTile.background_image_additional}/>
        </article>}
         {/*<Gametile />*/}
            </>
    )
}

export default Gamedata;