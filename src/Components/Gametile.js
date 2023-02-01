
// controleer de usestate en zoek uit hoe je een herbruikbare functie kan maken. Deze moet veel worden gebruikt. Probeer ook te kijken hoe je ervoor kan zorgen dat je snel naar verschillende games kan klikken.


function gameTile({inputPhoto, inputText, inputName}) {
    return (
    <article className="article">
        <img className="screenshot" src={inputPhoto} alt="Screenshot"/>
        <h1>{inputName}</h1>
        <p className="text">{inputText}</p>
    </article>

    )
}

    export default gameTile