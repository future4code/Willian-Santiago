import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React from "react"
import Listagem from "./Listagem"
import TelaCadastro from './TelaCadastro';
import styled from "styled-components"

const EstiloPrimeiratela = styled.div`
    text-align: center;
    margin: 0 auto;
    padding: 0 auto;
    align-items: center;
    margin-top: 20px;
    border: 2px solid #CCC;
    width: 280px;
    background-color: aqua;

  input{
    display: block;
    margin: 20px auto;
    padding: 10px;
    
  }

`;


export default class App extends React.Component {

  state = {
    tela1: "cadastro"
  }
  escolherTela = () => {
    switch (this.state.tela1){
      case "cadastro":
      return <TelaCadastro mudarPraListagem={this.mudarPraListagem}/>

      case "Lista":
        return <Listagem mudarPraCadastro={this.mudarPraCadastro}/>

      default:
        return <div>A página não foi encontrada</div>

    }
  }

  mudarPraCadastro = () => {
    this.setState({tela1: "cadastro"})
  }

  mudarPraListagem = () => {
    this.setState({tela1: "Lista"})

  }
 render() {

  return (
    <EstiloPrimeiratela>
      {this.escolherTela()}
    </EstiloPrimeiratela>
  )

 }
}



