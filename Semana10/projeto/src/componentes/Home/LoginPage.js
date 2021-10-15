import React, {useState, useEffect} from "react"
import axios from "axios"
import useForm from "../Hooks/hooks"
import { useHistory } from "react-router"
import { MenuBotoes } from "./styled"

const AdmHomePage = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSenha = (e) => {
        setSenha(e.target.value)
    }
    const onSubmitLogin = () => {
        console.log(email, senha)
    }


    const history = useHistory()
    const voltaHome = () => {
        history.push("/")
    }
    const efetuarLogin = () => {
        history.push("/login")
    }
    const loginAdm = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Willian-TurmaMaryam/login"
        console.log(email, senha)
        const body = {
            
                email: email,
                password: senha
        }
        axios.post(url, body)
        .then((res) => {
            console.log("ok", res.data.token)
            localStorage.setItem("token", res.data.token)
            history.push("/adm")

        }).catch((erro) => {
            console.log("errado", erro.response)

        })
}

    return (
        <div>

            
            <MenuBotoes>
            <button onClick={voltaHome}>Voltar</button>
            <button onClick={loginAdm}>Login</button>
            </MenuBotoes>
            <input value={email} onChange={handleEmail} placeholder="Email"/>
            <input value={senha} onChange={handleSenha} placeholder="Senha"/>
            <h1>Área adm</h1>

        </div>
    )
}
export default AdmHomePage