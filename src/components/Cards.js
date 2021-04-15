import React, { useState } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import DetailsPokemon from "./DetailsPokemon";

function Cards() {
    const [pokemon, setPokemon] = useState("");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState([]);
    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };
    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    };

    return (
        <div className="App">
            <form id="header" onSubmit={handleSubmit}>
                <img src="pokemon.png" alt="Pokemon" />
                <label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Nome ou Número do Pokémon"
                    ></input>
                </label>
                <button id="search" onClick="getPokemon()">
                    PESQUISA
                </button>
            </form>

            {pokemonData.map((pokemon, index) => {
                return (
                    <div>
                        <div className="container overlay">
                            <PokemonList
                                id={pokemon.id}
                                name={pokemon.name}
                                image={
                                    pokemon.sprites.other.dream_world
                                        .front_default
                                }
                                type={pokemonType}
                                key={index}
                            />

                            <DetailsPokemon
                                img={pokemon.sprites.front_default}
                                img2={pokemon.sprites.front_shiny}
                                name={pokemon.name}
                                id={pokemon.id}
                                pokemonType={pokemon.types[0].type.name}
                                height={pokemon.height}
                                weight={pokemon.weight / 10}
                                gameIndices={pokemon.game_indices.length}
                                hp={pokemon.stats[0].base_stat}
                                habilities={pokemon.moves[0].move.name}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Cards;
