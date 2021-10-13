
import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router" 
import { MenuBotoes, EstiloListas } from "./styled"




const ListTripsPages = () => {

    const [trips, setTrips] = useState([])

     const history = useHistory()
     const voltaHome = () => {
        history.push("/")
    }
    const inscrevePage = () => {
        history.push("/formulario")
    }


    useEffect (() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips"
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

      const listaMapeada = trips.map((trip) => {
        return <EstiloListas><p> Planeta: {trip.planet} {trip.name}</p> 
        <p>Data: {trip.date}</p>
        <p> Descrição: {trip.description}</p>
        <p>Duração: {trip.durationInDays} dias</p>
        
        </EstiloListas>
        
      })

    return (

        <div>
                <div><MenuBotoes>
                <button onClick={voltaHome}>Voltar</button>
                <button onClick={inscrevePage}>Inscreva-se</button>
                </MenuBotoes>
                <h1>Destinos</h1>
                </div>
                {listaMapeada}

        </div>
    )
}
export default ListTripsPages