
import React from "react"
import { useHistory } from "react-router"
import { MenuBotoes } from "./styled"

const AdmHomePage = () => {
    const history = useHistory()
    const voltaHome = () => {
        history.push("/")
    }
    const efetuarLogin = () => {
        history.push("/login")
    }
    return (
        <div>
            <MenuBotoes>
            <button onClick={voltaHome}>Voltar</button>
            <button onClick={efetuarLogin}>Login</button>
            </MenuBotoes>
            <h1>Área adm</h1>

        </div>
    )
}
export default AdmHomePage