import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

// Props:
// array of objects describing different pokemon {id, name, type, base_experience}

const Pokedex = ({ exp, isWinner, pokemon}) => {
    const winMsg = isWinner ? <p className="Pokedex-winner">This Hand Wins!!</p> : null;

    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">
                {pokemon.map(p => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))}
            </div>
            <h4 className="Pokedex-exp">Total experience: {exp}</h4>
            {winMsg}
        </div>
    );
}

export default Pokedex;