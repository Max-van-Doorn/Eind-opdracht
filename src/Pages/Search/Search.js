import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchBar from "../../Components/Searchbar/Searchbar";
import {Link} from "react-router-dom";
import GameTile2 from "../../Components/Gametile/Gametile2";
import "./Search.css"

function Search() {
    const [gameData, setGameData] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`, {
                    params: {
                        search: searchQuery,
                    }
                });

                console.log(response.data);
                setGameData(response.data)
            } catch (e) {
                console.error(e);
            }
        }

        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery])

for (let i = 0; i < gameData.length; i++){
}

console.log(gameData)

    return (
        <>
            <h1 className="game-finder-title" >Game finder</h1>

            <div>
            <SearchBar onChangehandler={setSearchQuery}/>
            </div>
            <section className="games-container">
                {Object.keys(gameData).length > 0 &&
                    <> <GameTile2
                    key={gameData.results[0].id}
                    games={gameData}
                    image={gameData.results[0].background_image}
                    title={gameData.results[0].name}
                    link={gameData.results[0].id}
                    released={gameData.results[0].released}
                />
                <GameTile2
                    key={gameData.results[1].id}
                    games={gameData}
                    image={gameData.results[1].background_image}
                    title={gameData.results[1].name}
                    link={gameData.results[1].id}
                    released={gameData.results[1].released}
                />
                        <GameTile2
                            key={gameData.results[2].id}
                            games={gameData}
                            image={gameData.results[2].background_image}
                            title={gameData.results[2].name}
                            link={gameData.results[2].id}
                            released={gameData.results[2].released}
                        />
                        <GameTile2
                            key={gameData.results[3].id}
                            games={gameData}
                            image={gameData.results[3].background_image}
                            title={gameData.results[3].name}
                            link={gameData.results[3].id}
                            released={gameData.results[3].released}
                        />
                        <GameTile2
                            key={gameData.results[4].id}
                            games={gameData}
                            image={gameData.results[4].background_image}
                            title={gameData.results[4].name}
                            link={gameData.results[4].id}
                            released={gameData.results[4].released}
                        />
                        <GameTile2
                            key={gameData.results[5].id}
                            games={gameData}
                            image={gameData.results[5].background_image}
                            title={gameData.results[5].name}
                            link={gameData.results[5].id}
                            released={gameData.results[5].released}
                        />
                        <GameTile2
                            key={gameData.results[6].id}
                            games={gameData}
                            image={gameData.results[6].background_image}
                            title={gameData.results[6].name}
                            link={gameData.results[6].id}
                            released={gameData.results[6].released}
                        />
                        <GameTile2
                            key={gameData.results[7].id}
                            games={gameData}
                            image={gameData.results[7].background_image}
                            title={gameData.results[7].name}
                            link={gameData.results[7].id}
                            released={gameData.results[7].released}
                        />
                        <GameTile2
                            key={gameData.results[8].id}
                            games={gameData}
                            image={gameData.results[8].background_image}
                            title={gameData.results[8].name}
                            link={gameData.results[8].id}
                            released={gameData.results[8].released}
                        />
                        <GameTile2
                            key={gameData.results[9].id}
                            games={gameData}
                            image={gameData.results[9].background_image}
                            title={gameData.results[9].name}
                            link={gameData.results[9].id}
                            released={gameData.results[9].released}
                        />

                    </>
                }
            </section>
        </>
    )
}
        export default Search