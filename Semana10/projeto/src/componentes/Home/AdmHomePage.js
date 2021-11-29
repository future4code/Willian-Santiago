import React, {useState, useEffect} from "react"
import axios from "axios"
import useForm from "../Hooks/hooks"
import { useHistory } from "react-router"
import { MenuBotoes, EstiloListas } from "./styled"


const LoginPage = () => {

    const [trips, setTrips] = useState([])



    const history = useHistory()
    const voltaHome = () => {
        history.push("/")
    }
    const criarViagens = () => {
        history.push("/criar")
    }
    const logoutConta = () => {
        history.push("/login")
    }
    const listaDetalhes = () => {
        history.push("/detalhes")
    }

    useEffect(() => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/trips`
        
        const token = localStorage.getItem("token")
        axios.get(url, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrips(res.data.trips)
            console.log("Teste", res.data)
        

        }).catch((erro) => {
            console.log("erro", erro.response)

        })
    }, [])

    const deletarViagem = (trips) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/trips/${trips}`
        axios.delete(url, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((res) => {
            setTrips(res.data.trips)

        }).catch((erro) => {

        })
    }

    const listaMapeada = trips.map((trip) => {
        return <EstiloListas><p> Planeta: {trip.planet} {trip.name}</p> 
        <p>Data: {trip.date}</p>
        <p> Descrição: {trip.description}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        {/* <button onClick={deletarViagem}>Deletar</button> */}

        
        </EstiloListas>
        
      })
    

    return (
        <div>
            <MenuBotoes>
            <button onClick={voltaHome}>Voltar</button>
            <button onClick={listaDetalhes}>Lista de detalhes</button>
            <button onClick={criarViagens}>Criar viagens</button>
            <button onClick={logoutConta}>Logout</button>
            <button onClick={deletarViagem}>Deletar</button>

            </MenuBotoes>
            <h1>Painel administrativo</h1>
            {listaMapeada}
            

        </div>
    )
}
export default LoginPage