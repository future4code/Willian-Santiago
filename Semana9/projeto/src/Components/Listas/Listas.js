import react from "react"
import {
    ListasStyled,
    ListasContainer,
    EstiloImagem,
    EstiloItens

}from "../PageHome/styled"


const Listas = (props) => {

    
    return (
      <ListasStyled>
          <ListasContainer>
            
              <EstiloImagem src={"https://picsum.photos/50/50?=1"}/>
        <h2>Nome da pessoa</h2>

 
        </ListasContainer>

      </ListasStyled>
    )
  }
  export default Listas