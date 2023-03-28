import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import "./Gamedata.css"
import reddit from '../../Assets/Reddit-Logo.wine.png'


function Gamedata(){
    const [gameTile, setGameTile] = useState({})
const {id}= useParams();
    useEffect(() => {
    async function fetchData(){
        try {
            const result = await axios.get (`https://api.rawg.io/api/games/${id}?key=${process.env.REACT_APP_API_KEY}`);

            console.log(result.data);
            setGameTile(result.data)
        } catch (e){
            console.error(e);
        }
    }
    fetchData();
    }, []);
    return (
        <>
            {Object.keys(gameTile).length > 0 &&
        <article className="game-page-container" >
            <img className="main-gamedata-photo"  src={gameTile.background_image} alt="Game photo"/>
            <h1 className="game-name-and-release">{gameTile.name} | Released: {gameTile.released}</h1>
            <p className="game-info"> {gameTile.description_raw}</p>
            <div className="information-container">
                <p><strong> Achievements: </strong>{gameTile.achievements_count}</p>
            <p><strong>Publishers:</strong> {gameTile.publishers[0].name}</p>
            <p><strong>Genres:</strong> {gameTile.genres[0].name}, {gameTile.genres[1].name}</p>
            <p><strong>Platforms:</strong> {gameTile.parent_platforms[0].platform.name}, {gameTile.parent_platforms[1].platform.name}</p>
            </div>
            <a className="game-link" href={gameTile.website}>Browse the game website:</a>
            <span className="reddit-page-name"><img className="reddit-logo" src={reddit} alt="Reddit logo"/> <strong>: {gameTile.reddit_name}</strong></span>
            <p className="reddit-description">"{gameTile.reddit_description}"</p>
            <a className="game-link-2" href={gameTile.reddit_url}>Browse the Reddit page of this game!</a>
            <img className="secondary-gamedata-photo" src={gameTile.background_image_additional} alt="Game screenshot"/>
        </article>}
            </>
    )
}

export default Gamedata;