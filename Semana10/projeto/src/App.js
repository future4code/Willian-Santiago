
import { useState } from 'react';
import './App.css';
import Administrativa from './componentes/Home/Administrativa';
import ListaViagens from './componentes/Home/ListaViagens';

function App() {

  const [pagina, setPagina] = useState("")

  const paginasEscolha = () => {
    switch (pagina) {
      case "1":
        return <ListaViagens />
      case "2":
        return <Administrativa />

      default:
        break;
    }
  }
  const mudarPaginas = (nomeTela) => {
    setPagina(nomeTela)
  }
  return (
    <div className="App">
      <h1>Teste</h1>
      <button onClick={() => mudarPaginas("1")}>Ver viagens</button>
      <button onClick={() => mudarPaginas("2")}>Área administrativa</button>
      {paginasEscolha()}
    </div>
  );
}

export default App;
