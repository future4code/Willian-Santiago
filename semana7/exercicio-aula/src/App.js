import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import styled from "styled-components"

const Estilo = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 0 auto;
    align-items: center;
    margin-top: 20px;
    border: 2px solid #CCC;
    width: 280px;
    background-color: aqua;

   
`
;

export default class App extends React.Component {

  state = {
    tarefas: []
  }

  componentDidMount() {
    this.imprimiTarefa()
  }

  imprimiTarefa = () => {
    const url = "http://www.boredapi.com/api/activity/"
  
    axios.get(url)
    .then((res) => {
      console.log(res.data)
      this.setState({tarefas: res.data})
      
  
    }).catch((erro) => {
  
    })
    }
  
  render() {

    return (
      <Estilo>
        <h2>Tarefas</h2>
        <p>Nome: {this.state.tarefas.activity}</p>
        <p>Tipo: {this.state.tarefas.type}</p>
        <p>Participantes: {this.state.tarefas.participants}</p>
        <p>Preço: {this.state.tarefas.price}</p>
        <button onClick={this.imprimiTarefa}>Clique aqui</button>

      </Estilo>
    );
  }
  }



