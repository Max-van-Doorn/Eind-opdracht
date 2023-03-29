import React, {  useState } from 'react';
import "./Searchbar.css"
import searchicon from "../../Assets/search icon.png"

function SearchBar({ onChangehandler }) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        onChangehandler(query);
    }

    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een game"
            />

            <button
                type="submit">
                <img className="searchbar-icon" src={searchicon} alt="Search-icon" />
            </button>
        </form>
    );
}

export default SearchBar;