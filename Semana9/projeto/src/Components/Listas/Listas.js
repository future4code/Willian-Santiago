import react, { useEffect, useState } from "react"
import axios from "axios"

import {
    ListasStyled,
    ListasContainer,
    ContainerList,
    EstiloImagem,
    EstiloItens

}from "../PageHome/styled"


const Listas = (props) => {

  const[listaAprovados, setListasAprovados] = useState([])

    useEffect(() => {
        selecionarAprovado()
    }, [])

    const selecionarAprovado = (props) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        axios.get(url)
        .then((res) => {
            console.log(res.data.matches)
            setListasAprovados(res.data.matches)

        }).catch((erro) => {

        })
    }

    const limparListas = () => {
      const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
      const body = {
        message: "Success"
      }
      axios.put(url, body)
      .then((escolherPerfil) => {
          setListasAprovados(escolherPerfil().data.matches)

      }).catch((erro) => {

      })
  }


   const listaMapeada = listaAprovados.map((lista) => {
        return <ListasStyled><img src={lista.photo}/> <h2>{lista.name}</h2></ListasStyled>
    })

    
    return (
     <ContainerList >
      <ListasStyled>
          <ListasContainer>
            <button onClick={limparListas}>Limpar listas</button>

      {listaMapeada}
 
        </ListasContainer>

      </ListasStyled>
      </ContainerList>
      
    )
  }
  export default Listas