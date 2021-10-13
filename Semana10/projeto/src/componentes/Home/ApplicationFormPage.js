
import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router"
import { MenuBotoes, Formulario } from "./styled"


const ApplicationFormPage = () => {


    const history = useHistory()
    const voltarHome = () => {
        history.push("/")
    }
    const enviarFormulario = () => {
        history.push("")
    }

    

    return (
        <div>
            
            <MenuBotoes>
            <button onClick={voltarHome}>Voltar</button>
            <button>Enviar</button>
            </MenuBotoes>
            <h1>Formulário de inscrição</h1>

            
            <Formulario>
                <input type="text" name="name" placeholder="Nome"/>

                <input type="text" name="number" placeholder="Idade"/>

                <input type="text" name="name" placeholder="Texto para a candidatura"/>

                <input type="text" name="name" placeholder="Profissão"/>
            </Formulario>
            

        </div>
    )
}
export default ApplicationFormPage