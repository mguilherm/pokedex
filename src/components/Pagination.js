import React, { useEffect, useState } from "react";
import { getAllPokemon } from "./GetAllPokemon";
import Card from "./Card";

function Pagination() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const initialUrl = `https://pokeapi.co/api/v2/pokemon`;

    useEffect(() => {
        async function fechData() {
            let response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            let pokemon = await loadingPokemon(response.results);
            console.log(pokemon);
            setLoading(false);
        }

        fechData();
    }, []);

    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    };

    const prev = async () => {
        if (!prevUrl) {
            return;
        }
        setLoading(true);

        let data = await getAllPokemon(prevUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    };

    const loadingPokemon = async (pokemon) => {
        let pokemonData = await Promise.all(
            pokemon.map(async (pokemon) => {
                let PokemonRecord = await getAllPokemon(pokemon.url);
                return PokemonRecord;
            })
        );

        setPokemonData(pokemonData);
    };

    return (
        <div>
            {loading ? (
                <img id="loadingImage" className="horario" />
            ) : (
                <>
                    <div className="btn">
                        <button onClick={prev}>Anterior</button>
                        <button onClick={next}>Próxima</button>
                    </div>
                    <div className="cards-container">
                        {pokemonData.map((pokemon, i) => {
                            return <Card key={i} pokemon={pokemon} />;
                        })}
                    </div>
                    <div className="btn">
                        <button onClick={prev}>Anterior</button>
                        <button onClick={next}>Próxima</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Pagination;
