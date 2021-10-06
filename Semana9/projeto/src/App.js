import './App.css';
import HomePage from './Components/PageHome/HomePage';
import Listas from './Components/Listas/Listas';
import { useState } from 'react';
import styled from "styled-components"
import Aprovados from './Components/Listas/Aprovados';

const App = (props) => {

  const [pagina, setPagina] = useState(true)

  const mudarPaginas = () =>{
    if (pagina === true) {
      return <HomePage />
    } else if (pagina === false){
      return <Listas />
    }
  }
  const mudarTela = () => {
    setPagina(!pagina)
  };

  return (
    <div>
      <button onClick={mudarTela} pagina={pagina}>Trocar de tela</button>
      {mudarPaginas()}
      <Aprovados />
    </div>
  )
}
export default App
