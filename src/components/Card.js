import React from "react";
import pokemonTypes from "../helpers/pokemonTypes";

function Card({ pokemon }) {
    return (
        <div className="card">
            <div className="card-wrapper">
                <h3>{pokemon.name}</h3>
                <div>ID: #{pokemon.id.toString().padStart(3, "0")}</div>
                <img
                    className="cardImage"
                    src={pokemon.sprites.other.dream_world.front_default}
                ></img>
                <div className="types-container">
                    {pokemon.types.map((type) => {
                        return (
                            <div
                                className="types"
                                style={{
                                    backgroundColor:
                                        pokemonTypes[type.type.name],
                                }}
                            >
                                {type.type.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Card;
