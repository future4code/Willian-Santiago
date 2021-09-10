import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    postagens: [
      {
        nomeUsuario: 'Teste',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },

      {
        nomeUsuario: 'Teste2',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      }
      
    ]
  }

  render() {
    const tela = this.state.postagens.map((postagem)=>{
      return <Post
      nomeUsuario={postagem.nomeUsuario}
      fotoUsuario={postagem.fotoUsuario}
      fotoPost={postagem.fotoPost}
      />
    })
    return (
      <MainContainer>
        {tela}
       </MainContainer>
    );
  }
}

export default App;

