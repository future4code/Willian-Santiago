import React from "react"
import axios from "axios"
import styled from "styled-components"

const ListaDeUsuarios = styled.div`
  border: 2px solid #CCC;
  padding: 10px;
  margin: 20px auto;
  width: 200px;
  display: flex;
  justify-content: space-between;

  button{
    background-color: red;
  }
`;

const headers = {
  headers: {
      Authorization: "Willian-Turma-da-Maryam"
  }
}

export default class Listagem extends React.Component {

  state = {
    usuarios: []
  }

  componentDidMount () {
        this.allUsers()
      }

  allUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios.get(url, headers)
    .then((res) => {
      this.setState({usuarios: res.data})
    })
    .catch((erro) => {
      alert("Aconteceu algum erro, tente novamente")

    })
  }

  deleteUsuario = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    
    axios.delete(url, headers)
    .then((res) => {
      alert("Usuário deletado com sucesso")
      this.allUsers()
    })
    .catch((erro) => {
      alert("Ocorreu um erro, tente novamente")

    })  
  }

  render() {

    const listaMapeada = this.state.usuarios.map((usuario) => {
        return <ListaDeUsuarios key={usuario.id}>{usuario.name}
        <button onClick={() => this.deleteUsuario(usuario.id)}>x</button>
        </ListaDeUsuarios>
    })
    return (
      <div>
        <button onClick={this.props.mudarPraCadastro}>Mudar pra cadastro</button>
        <h2>Lista de usuários</h2>
        {listaMapeada}
      </div>
    )
  }
}

