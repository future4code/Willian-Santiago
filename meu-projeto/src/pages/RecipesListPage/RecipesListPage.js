import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import axios from "axios"
import { StyledPost } from "./styled"


const RecipesListPage = () => {
    useProtectedPage()

    // const todosConteudos = useRequestData([], `${BASE_URL}/posts`)
    // console.log(todosConteudos)

    // const conteudos = todosConteudos.map((conteudo) => {
    //     return <p>
    //         {conteudo.title}</p>
    // })

        const [data, setData] = useState([])
        
        useEffect(() => {
            axios.get(`${BASE_URL}/posts`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((erro) => {
                alert("Acorreu algum erro")
            })
        }, [])

        const conteudos = data.map((conteudo) => {
            return <StyledPost>
                <p>{conteudo.username} - Postado em {conteudo.createdAt}</p> <h2>{conteudo.title}</h2>
                <p>{conteudo.body}</p>
            </StyledPost>
        })

    return(
        
        <div>recipesListPage

        <Button variante ="contained" color="primary">
            Primaria
            </Button>
            {conteudos}
        </div>
    )
}
export default RecipesListPage