import React from "react";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";

const PokeCard = (props) => {

    const [pokemon, setPokemon] = useState({})

    const capturaPokemon = ((pokeName) => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
          setPokemon(response.data)
          
        })
        .catch(erro => {
          console.log(erro);
        });
    })
    useEffect(() => {
        capturaPokemon(props.pokemon)

    }, [props.pokemon])

    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
        </div>
    )
}
export default PokeCard
