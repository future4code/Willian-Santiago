
import { useState } from 'react';
import './App.css';
import {Router} from "./componentes/Route/Router"
import { EstiloGlobal } from './componentes/Home/styled';


function App() {

  
  return (
    <EstiloGlobal>
    <Router />
    </EstiloGlobal>
  );
}

export default App;
