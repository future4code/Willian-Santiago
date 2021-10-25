import React from "react"
import { LoginForm } from "./styled"
import useForm from "../../hooks/useForm"
import { goToSign } from "../../routes/cordinator"
import { useHistory } from "react-router"
import { login } from "../../services/user"



const LoginFormulario = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(
        {
        
        email: "",
        password: ""
        
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        login(form, clear, history)
    }
    
    return(
        
        <LoginForm>
            <form onSubmit={onSubmitForm}>
            <input
            name={"email"}
            value={form.email} 
            onChange={onChange}
            variant={"outlined"}
            placeholder="E-mail do usuário"
            required
            type={"email"}/>
            

            <input
            name={"password"}
            value={form.password} 
            onChange={onChange}
            variant={"outlined"}
            placeholder="Senha do usuário"
            required
            type={"password"}/>

            <button
            type={"submit"}

            >Login</button>
            </form>
            <button
            onClick={() => goToSign(history)}>Cadastrar</button>
        </LoginForm>
    )
}
export default LoginFormulario