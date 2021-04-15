import React from "react";
import "../App.css";

const PokemonList = ({ id, name, image, type }) => {
    return (
        <div className="list-container">
            <div className="number">
                <h3>#0{id}</h3>
            </div>
            <img
                onClick="detailsPokemon()"
                id="profilePokemon"
                src={image}
                alt={name}
            />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small> Tipo: {type} </small>
            </div>
        </div>
    );
};

export default PokemonList;
