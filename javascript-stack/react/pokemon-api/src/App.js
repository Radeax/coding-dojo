import React, { useState } from 'react';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [clicked, setClicked] = useState(false);

  const getPokemon = async () => {
    let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
    let data = await response.json();

    data.results.map((pokemon) => {
      setPokemonList((pokemonList) => [...pokemonList, pokemon.name]);
    });
    setClicked(true);
  };

  return (
    <div>
      <button
        className={`ui button ${clicked ? 'disabled' : ''}`}
        onClick={getPokemon}
      >
        Fetch Pokemon
      </button>
      <ul>
        {pokemonList.map((pokemon) => (
          <li>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
