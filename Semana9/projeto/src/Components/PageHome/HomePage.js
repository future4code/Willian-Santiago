import react, { useEffect, useState } from "react"
import axios from "axios"
import {
    HomeStyled,
    Profile,
    ProfileImagem
} from "./styled"


const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
const HomePage = (props) => {

    const [perfis, setPerfis] = useState({})

    useEffect(() => {
        selecionaPerfil()
    }, [])

   const selecionaPerfil = () => {
        axios.get(url)

        .then((res) => {
        
            setPerfis(res.data.profile)

        }).catch((erro) => {

        })
    }

    const escolherPerfil = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person"
        const body = {
            
                "id": "71gMbZs2txS9LDvGK5Ew",
                "choice": true
            }
        
        axios.post(url, body).then((res) => {
            selecionaPerfil()

        }).catch((erro) => {

        })

    }
 

    return (
      <HomeStyled>
          {!perfis ? <div>Acabaram os perfis</div> :
          <Profile>
              <ProfileImagem src={perfis.photo}/>
        <h2>{perfis.name}, {perfis.age}</h2>
        <p>{perfis.bio}</p>
        <div>
            <button onClick={() => escolherPerfil(true)}>X</button>
            <button onClick={() => escolherPerfil (false)}>0</button>
        </div>
        </Profile>
              }
      </HomeStyled>
    )
  }
  export default HomePage