import React from "react"
import { SignForm } from "./styled"
import useForm from "../../hooks/useForm"
import { useHistory } from "react-router"
import { signUp } from "../../services/user"



const SignFormulario = ({setRightButtonText}) => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(
        {
        username: "",
        email: "",
        password: ""
        
    })

    const onSubmitForm = (e) => {
        e.preventDefault()
        signUp(form,  clear, history, setRightButtonText)
        console.log(form)
    }
    return(
        
        <SignForm>
            <form onSubmit={onSubmitForm}>

            <input
            name={"username"}
            value={form.username} 
            onChange={onChange}
            variant={"outlined"}
            placeholder="Nome do usuário"
            required
            type={"username"}/>

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
            type={"submit"}>Cadastrar</button>
            </form>
            
        </SignForm>
    )
}
export default SignFormulario