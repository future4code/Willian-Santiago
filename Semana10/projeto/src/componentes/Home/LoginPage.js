
import React from "react"
import { useHistory } from "react-router"
import { MenuBotoes } from "./styled"


const LoginPage = () => {
    const history = useHistory()
    const voltaHome = () => {
        history.push("/")
    }
    const criarViagens = () => {
        history.push("/criar")
    }
    const logoutConta = () => {
        history.push("/adm")
    }
    return (
        <div>
            <MenuBotoes>
            <button onClick={voltaHome}>Voltar</button>
            <button onClick={criarViagens}>Criar viagens</button>
            <button onClick={logoutConta}>Logout</button>
            </MenuBotoes>
            <h1>Painel administrativo</h1>
            

        </div>
    )
}
export default LoginPage