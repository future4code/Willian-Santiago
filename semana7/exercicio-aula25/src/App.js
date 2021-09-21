import logo from './logo.svg';
import './App.css';
import axios from "axios"
import React from "react"
import Listas from "./Listagem"

const headers = {
  headers: {
      Authorization: "Willian-Turma-da-Maryam"
  }
}

export default class App extends React.Component {

   state = {
    usuarios: [],
    listName: "",
    listEmail: ""
  };

  componentDidMount() {
    this.getAllUsers();
  }

  componentDidMount() {
    this.getAllUsers();
  }

  handleListName = (e) => {
    this.setState({ listName: e.target.value });

  };
  handleListEmail = (e) => {
    this.setState({ listEmail: e.target.value });
  };
  createUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
       name: this.state.listName,
       email: this.state.listEmail
    }
    
    axios.post(url, body, headers)
    .then((res) => {
      this.setState({ listName: "" });
      this.setState({ listEmail: "" });
      this.getAllUsers();

    })
    .catch((erro) => {
      

    })
}

  getAllUsers= () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
    .then((res) => {
      console.log(res)
      this.setState({ usuarios: res.data.result.list });

    })
    .catch((erro) => {
      console.log(erro)

    })
  }
 


  render() {

    const usuariosComponents = this.state.usuarios.map((usuarioMapeado) => {
      return <li>{usuarioMapeado.name} {usuarioMapeado.email}</li>;
    });

    
    return (
      
      <div>
     <label forHtml="name">Nome:</label>
     <input
          placeholder="Nome"
          value={this.state.listName}
          onChange={this.handleListName}
        />
      <br/>
      <label forHtml="email">E-mail:</label>
      <input
          placeholder="E-mail"
          value={this.state.listEmail}
          onChange={this.handleListEmail}
        />

      <button onClick={this.createUsers}>Enviar</button>
        {usuariosComponents}
           

      <Listas />
      </div>  
    );
   
  }

}


