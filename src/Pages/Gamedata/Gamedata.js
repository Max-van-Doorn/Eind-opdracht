import React from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./Gamedata.css"


const Gamedata = () => {

    const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"
const {id}= useParams();
    async function fetchData(){
        try {
            const response = await axios.get (`https://api.rawg.io/api/games/${id}?key=${apiKey}`);

            console.log(response.data);
            // setGameData(response.data)
        } catch (e){
            console.error(e);
        }
    }
fetchData()

    return (
        <p>hoi</p>

    )
}

export default Gamedata;