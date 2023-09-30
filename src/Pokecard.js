import React from "react";
import "./Pokecard.css";

const POKE_API = "https://raw.githubusercontent.com/" + 
                 "PokeAPI/sprites/master/sprites/pokemon/";

// Shows a single Pokemon.
// Props:
// ~ name 
// ~ image
// ~ type

const Pokecard = ({exp, id, name, type}) => {
    const imgSource = `${POKE_API}${id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{ name }</div>
            <img className="Pokecard-image" src={ imgSource } alt={ name }/>
            <div className="Pokecard-data">Type: { type }</div>
            <div className="Pokecard-data">EXP: { exp }</div>
        </div>
    )
}

export default Pokecard;