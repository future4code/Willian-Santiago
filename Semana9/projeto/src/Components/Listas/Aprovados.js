import axios from "axios"
import react, { useEffect, useState } from "react"
import Listas from "./Listas"

const Aprovados = () => {

    const[listaAprovados, setListasAprovados] = useState([])

    useEffect(() => {
        selecionarAprovado()
    }, [])

    const selecionarAprovado = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches"
        axios.get(url).then((res) => {
            console.log(res.data.matches)
            setListasAprovados(res.data.matches)

        }).catch((erro) => {

        })
    }
   const listaMapeada = listaAprovados.map((lista) => {
        return <p>{lista.name}</p>
    })
   
    return(
        
        <div>
            <h2>Teste</h2>
            {listaMapeada}
            
        </div>
        
    )
    
}
export default Aprovados