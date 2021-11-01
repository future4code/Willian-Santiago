
import { useEffect, useState } from 'react';
import './App.css';
import PokeCard from './components/PokeCard';
import axios from 'axios';
import "./styles.css"


const App = (props) => {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")



const changePokeName = (e) => {
  setPokeName(e.target.value)
}

const selecionarPokemon = () => {
  axios
  .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
  .then((response) => {
    setPokeList(response.data.results)
  })
  .catch(erro => {
    console.log(erro);
  });
};

useEffect(() => {
  selecionarPokemon()

}, [])

 return (
  <div>
  <select onChange={changePokeName}>
    <option value={""}>Nenhum</option>
    {pokeList.map(pokemon => {
        return (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        );
      })}

  </select>
  {pokeName && <PokeCard pokemon={pokeName} />}
</div>
 )
    }


export default App;