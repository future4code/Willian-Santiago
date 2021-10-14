
import React, {useState, useEffect} from "react"
import axios from "axios"
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

    // const [list, setList] = useState()
    useEffect(() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/8BKOBHfkBsawzxnk0uSY"
        const headers = {
            auth: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs"
        }
    
        axios.get(url, headers)
        .then((res) => {
            console.log(res.data)

        }).catch((erro) => {
            console.log("erro", erro.data)

        })
    }, [])
    

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