import React from "react"
import { LoginForm } from "./styled"
import useForm from "../../hooks/useForm"
import LoginFormulario from "./LoginFormulario"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = ({setRightButtonText}) => {
    useUnprotectedPage()
    

    return(
        
        <div>
            <LoginFormulario setRightButtonText={setRightButtonText}/>
            
        </div>
            
    )
}
export default LoginPage