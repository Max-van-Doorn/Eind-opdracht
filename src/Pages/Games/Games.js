import './Games.css'
import GameTile2 from "../../Components/Gametile2";
import React, {useState} from "react";
import axios from "axios";

const apiKey = "1a3cf7a33f9e441389d7ae0d1871849e"

function Games() {
    const [gameData, setGameData] = useState({});

    async function fetchData2(){
        try {
            const response = await axios.get (`https://api.rawg.io/api/games?key=${apiKey}`);

            console.log(response.data);
            setGameData(response.data)
        } catch (e){
            console.error(e);
        }
    }

    return (
        <>
            <button className="data-button"
                    type="button"
                    onClick={fetchData2}>
                Haal data op!
            </button>
            {Object.keys(gameData).length > 0 &&
                <section className="games-container">
                    <GameTile2
                        games={gameData}
                        image={gameData.results[1].background_image}
                        link={gameData.results[1].id}
                        title={gameData.results[1].name}
                        released={gameData.results[1].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[2].background_image}
                        link={gameData.results[2].id}
                        title={gameData.results[2].name}
                        released={gameData.results[2].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[3].background_image}
                        link={gameData.results[3].id}
                        title={gameData.results[3].name}
                        released={gameData.results[3].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[4].background_image}
                        link={gameData.results[4].id}
                        title={gameData.results[4].name}
                        released={gameData.results[4].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[5].background_image}
                        link={gameData.results[5].id}
                        title={gameData.results[5].name}
                        released={gameData.results[5].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[6].background_image}
                        link={gameData.results[6].id}
                        title={gameData.results[6].name}
                        released={gameData.results[6].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[7].background_image}
                        link={gameData.results[7].id}
                        title={gameData.results[7].name}
                        released={gameData.results[7].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[8].background_image}
                        link={gameData.results[8].id}
                        title={gameData.results[8].name}
                        released={gameData.results[8].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[9].background_image}
                        link={gameData.results[9].id}
                        title={gameData.results[9].name}
                        released={gameData.results[9].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[10].background_image}
                        link={gameData.results[10].id}
                        title={gameData.results[10].name}
                        released={gameData.results[10].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[11].background_image}
                        link={gameData.results[11].id}
                        title={gameData.results[11].name}
                        released={gameData.results[11].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[12].background_image}
                        link={gameData.results[12].id}
                        title={gameData.results[12].name}
                        released={gameData.results[12].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[13].background_image}
                        link={gameData.results[13].id}
                        title={gameData.results[13].name}
                        released={gameData.results[13].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[14].background_image}
                        link={gameData.results[14].id}
                        title={gameData.results[14].name}
                        released={gameData.results[14].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[15].background_image}
                        link={gameData.results[15].id}
                        title={gameData.results[15].name}
                        released={gameData.results[15].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[16].background_image}
                        link={gameData.results[16].id}
                        title={gameData.results[16].name}
                        released={gameData.results[16].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[17].background_image}
                        link={gameData.results[17].id}
                        title={gameData.results[17].name}
                        released={gameData.results[17].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[18].background_image}
                        link={gameData.results[18].id}
                        title={gameData.results[18].name}
                        released={gameData.results[18].released}/>
                    <GameTile2
                        games={gameData}
                        image={gameData.results[19].background_image}
                        link={gameData.results[19].id}
                        title={gameData.results[19].name}
                        released={gameData.results[19].released}/>
                </section>
            }
        </>
    )
}
export default Games;