import React from "react"
import axios from "axios"
import styled from "styled-components"

const EstiloButton = styled.div`
  

`;


const headers = {
    headers: {
        Authorization: "Willian-Turma-da-Maryam"
    }
  }

export default class TelaCadastro extends React.Component {

    state = {
        usuarios: [],
        nome: "",
        email: ""
    }
    handleNome = (e) => {
        this.setState({nome: e.target.value})
    }
    handlfeEmail = (e) => {
        this.setState({email: e.target.value})
    }


    createUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
          name: this.state.nome,
          email: this.state.email
        }
    
        axios.post(url, body, headers)
        .then((res) => {
          alert("Usuário cadastrado com sucesso")
        })
        .catch((erro) => {
          alert("Esse Nome ou E-mail já está cadastrado")
          this.setState({nome: ""})
          this.setState({email: ""})
         
        })
      }


    render() {
        return (
            <div>
                <button onClick={this.props.mudarPraListagem}>Mudar pra listas</button>
                <h2>Cadastro</h2>

                <input placeholder="Nome"
                value={this.state.nome}
                onChange={this.handleNome}/>

                <input placeholder="E-mail"
                value={this.state.email}
                onChange={this.handlfeEmail}/>

                <button onClick={this.createUsuarios}>Cadastrar</button>
            </div>
        )
    }
}