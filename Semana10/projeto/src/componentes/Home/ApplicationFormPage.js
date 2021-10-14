
import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router"
import { MenuBotoes, Formulario } from "./styled"



const ApplicationFormPage = () => {

    const [trips, setTrips] = useState([])
    const [name, setNome] = useState("")
    const [age, setIdade] = useState("")
    const [applicationText, setTexto] = useState("")
    const [profession, setProfissao] = useState("")

    const handleNome = (e) => {
        setNome(e.target.value)
    }
    const handleIdade = (e) => {
        setIdade(e.target.value)
    }
    const handleTexto = (e) => {
        setTexto(e.target.value)
    }
    const handleProfissao = (e) => {
        setProfissao(e.target.value)
    }
    const onClickButton = () => {
        requerimentos(name)
    }

    const history = useHistory()
    const voltarHome = () => {
        history.push("/")
    }
    const enviarFormulario = () => {
        history.push("")
    }
    
    
        useEffect (() => {
            const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/trips"
            axios.get (url)
            .then((res) =>{
              setTrips(res.data.trips)
              console.log(res.data.trips)
            })
            .catch((erro) =>{
                  console.log(erro)
                  alert (`Algum erro aconteceu ${erro}`)
                })
        
          }, [])

          const requerimentos = {
            
                name: trips.name,
                age: trips.age,
                applicationText: trips.applicationText,
                profession: trips.profession,
                "country": "Brasil"
            
          }

          axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply`)
          .then((res) => {

          }).catch((erro) => {

          })

         const listaFormularioMapeada = trips.map((trip) => {
            return  <option>{trip.name}</option>
            
                   
          })
          

    return (
        
        <div>


            <MenuBotoes>
           
            
            <button onClick={voltarHome}>Voltar</button>
            <button onClick={onClickButton}>Enviar</button>
            </MenuBotoes>
            <h1>Formulário de inscrição</h1>
            <select>{listaFormularioMapeada}</select>
            
            <Formulario>
                <input value={name} onChange={handleNome} type="text" name="name" placeholder="Nome"/>

                <input value={age} onChange={handleIdade} type="text" name="number" placeholder="Idade"/>

                <input value={applicationText} onChange={handleTexto} type="text" name="name" placeholder="Texto para a candidatura"/>

                <input value={profession} onChange={handleProfissao} type="text" name="name" placeholder="Profissão"/>
            </Formulario>
            
            

        </div>
    )
}
export default ApplicationFormPage