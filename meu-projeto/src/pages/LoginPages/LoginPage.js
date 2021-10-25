import React from "react"
import { LoginForm } from "./styled"
import useForm from "../../hooks/useForm"
import LoginFormulario from "./LoginFormulario"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = () => {
    useUnprotectedPage()
    

    return(
        
        <div>
            <LoginFormulario />
            
        </div>
            
    )
}
export default LoginPage