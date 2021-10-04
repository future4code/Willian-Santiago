import logo from './logo.svg';
import './App.css';
import React from "react"
import axios from 'axios';
import styled from "styled-components"

const Estilo = styled.div`
border: 2px solid #CCC;
display: flex;
justify-content: space-between;
margin: 10px;
padding: 10px;
width: 500px;
`;

const headers = {
  headers: {
    Authorization: "Willian-TurmaMaryam"
  }
 
}

export default class App extends React.Component {

  state = {
    playlist: [],
    playlistName: "",
    musicaName: "",
    artistName: "",
    linkUrl: ""
  }

  componentDidMount() {
    this.imprimiPlayList()
  }
  handlePlaylist = (e) => {
    this.setState({playlistName: e.target.value})
  }

  handleMusica = (e) => {
this.setState({musicaName: e.target.value})
  }
  
  handleArtist = (e) => {
    this.setState({artistName: e.target.value})
 }

 handleUrl = (e) => {
  this.setState({linkUrl: e.target.value})
}
 
  createPlayLists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlistName,
    }

    axios.post(url, body, headers)
    .then((res) => {
      console.log("Playlist adicionada")
      this.setState({playlistName: ""})
      this.imprimiPlayList()


    }).catch((erro) => {

    })
  }

  addMusicas = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    const body = {
      
        name: this.state.musicaName, 
        artist: "",
        url: ""

    }

    axios.post(url, body, headers)
    .then((res) => {
      
      console.log("Adicionou item")
      

    }).catch((erro) => {
      console.log(erro.response)

    })
  }

  imprimiPlayList = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, headers)
    .then((res) => {
      this.setState({playlist: res.data.result.list})
      

    })
    .catch((erro) => {
      console.log(erro.response)

    })
  }

  deletePlayList = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

    axios.delete(url, headers)
    .then((res) => {
      this.imprimiPlayList()
      console.log(res)

    }).catch((erro) => {
      console.log(erro.response.data)

    })
  }


  render() {
    console.log(this.state.playlist)


    const listaMapeada = this.state.playlist.map((lista) => {
      return <div> <Estilo key={lista.id}>{lista.name} {lista.artist}
      <button onClick={() => this.deletePlayList(lista.id)}>Deleta</button>
      

      <button onClick={() => this.addMusicas(lista.id)}>Adicionar musica</button>
      
      </Estilo>
      
      </div>

    })

    // const mapeandoPlaylist = this.state.playlist.map((musicas) => {
    //   return <div> <li key={musicas.id}>{musicas.name} {musicas.artist}</li>
    //   <input
    //      value={this.state.musicaName}
    //      onChange={this.handleMusica}/>
    //   <button onClick={() => this.addMusicas(musicas.id)}>Adicionar musica</button>
      

    //   </div>
    // })
   

    return (
      <div>
        <h2>Projeto Spotify</h2>
        <input 
        value={this.state.playlistName}
        onChange={this.handlePlaylist}/>
        <button onClick={this.createPlayLists}>Criar playlist</button>
        {/* <input
         value={this.state.musicaName}
         onChange={this.handleMusica}/>
         <button onClick={this.addMusicas()}>Adicionar musica</button> */}

        {listaMapeada}
        {/* {mapeandoPlaylist} */}
      </div>
    );
  }
  }
 


