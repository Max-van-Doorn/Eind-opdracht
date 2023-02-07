import React from 'react'
import "./Gametile2.css"
import {Link} from "react-router-dom";

const GameTile2 = (props) => {
    const games = props.games;
    const title = props.title;
    const released = props.released
    const image = props.image;
    const link = props.link;

    return(
        <article className="gametile2-outer-container">
            <div className="gametile2-inner-container">
                <Link to={`/Gamedata/${ link }`}>
                <img className="gametile2-image" src={image}/></Link>
         <h1 className="gametile2-title">{ title }</h1>
                <p className="gametile2-released"><strong> Released: </strong>{ released}</p>
                </div>
        </article>
    )
}
export default GameTile2;