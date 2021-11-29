import React, { useState } from "react"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"
import { BASE_URL } from "../../constants/url"
import axios from "axios"
import { useHistory } from "react-router"
import useForm from "../../hooks/useForm"
import { LoginForm } from "../LoginPages/styled"



const AddRecipePage = () => {
    // useUnprotectedPage()

    const history = useHistory()

    const [form, onChange, clear] = useForm({
        title: "",
        body: ""
    })

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res) => {
            alert("Post criado com sucesso")

        })
        .catch((erro) => {
            alert(erro.response.message)
        })

    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        createPost()
        clear()
    }

    return(

        <LoginForm>Criar novo post
            <form onSubmit={onSubmitForm}>
            <input
            name={"title"}
            value={form.title} 
            onChange={onChange}
            variant={"outlined"}
            placeholder="Nome"
            required
            type={""}/>


             <input
             name={"body"}
             value={form.body} 
             onChange={onChange}
             variant={"outlined"}
             placeholder="Título"
             required
             type={""}/>

            <button>Postar</button>
            </form>

            

        </LoginForm>
    )
}
export default AddRecipePage