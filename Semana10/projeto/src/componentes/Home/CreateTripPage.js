
import React from "react"
import { useHistory } from "react-router"
import { MenuBotoes } from "./styled"


const CreateTripsPage = () => {
    const history = useHistory()
    const voltarPainel = () => {
        history.push("login")
    }
    const criarViagens = () => {
        history.push("")
    }
    return (
        <div>
            <MenuBotoes>
            <button onClick={voltarPainel}>Voltar</button>
            <button>Criar viagens</button>
            </MenuBotoes>
            <h1>Formulário para criar novas viagens</h1>

        </div>
    )
}
export default CreateTripsPage