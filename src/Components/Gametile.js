import React, {useState} from 'react';
import {Link} from "react-router-dom";

// controleer de usestate en zoek uit hoe je een herbruikbare functie kan maken. Deze moet veel worden gebruikt. Probeer ook te kijken hoe je ervoor kan zorgen dat je snel naar verschillende games kan klikken.


const Gametile = () => {
    const [gameTile,] = useState({})
    return (
    <article className="article">
        <img className="screenshot" src={gameTile.background_image} alt="Screenshot"/>
        <h1>{gameTile.name}</h1>
        <p className="text"> {gameTile.description_raw}</p>
        <p>{gameTile.name}</p>
    </article>

    )
}

    export default Gametile