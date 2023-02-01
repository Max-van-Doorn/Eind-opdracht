import React, {  useState } from 'react';

function SearchBar({ setGameHandler }) {
    const [query, setQuery] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        setGameHandler(query);
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

            <button type="button">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;