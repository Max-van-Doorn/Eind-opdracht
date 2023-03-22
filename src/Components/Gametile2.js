import React from 'react'
import "./Gametile/Gametile2.css"
import {Link} from "react-router-dom";

function GameTile2({title, link, released, image }) {

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