import React from "react";

const DetailsPokemon = ({
    img,
    img2,
    name,
    id,
    pokemonType,
    height,
    weight,
    gameIndices,
    hp,
    habilities,
}) => {
    return (
        <div class="detailsPokemon">
            <div className="divTable">
                <h3>{name}</h3>
                <h3>#{id.toString().padStart(3, "0")}</h3>
                <h4>{pokemonType}</h4>
                <div>Altura: {height / 10} m</div>
                <div>Peso: {weight} Kg</div>
                <div>Número de Batalhas: {gameIndices}</div>
                <div>HP: {hp}</div>
                <div>Habilidades: {habilities}</div>
            </div>
            <div className="thumb">
                <span>
                    <img src={img} />
                    <p>Normal</p>
                </span>
                <span>
                    <img src={img2} />
                    <p>Shiny</p>
                </span>
            </div>
        </div>
    );
};

export default DetailsPokemon;
