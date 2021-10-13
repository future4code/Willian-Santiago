
import React from "react"
import { useHistory } from "react-router"
import { MenuBotoes } from "./styled"


const HomePage = () => {
    const history = useHistory()

    const irPaginaList = () => {
        history.push("/lista")
    }
    const paginaAdm = () => {
        history.push("/adm")
    }
    return (
        <div>
            <h1>Home</h1>
        <MenuBotoes>
       
            <button onClick={irPaginaList}>Listas de viagens</button>

            <button onClick={paginaAdm}>Área Adm</button>
    

        </MenuBotoes>
        </div>
    )
}
export default HomePage