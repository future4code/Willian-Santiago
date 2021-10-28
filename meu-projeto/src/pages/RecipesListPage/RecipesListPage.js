import React, { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/url"
import axios from "axios"
import { StyledPost } from "./styled"
import { goToAddRecipePage } from "../../routes/cordinator"
import { useHistory } from "react-router"


const RecipesListPage = () => {
    useProtectedPage()


        const [data, setData] = useState([])
       

        const history = useHistory()


        
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
            return <StyledPost key={conteudo.id}>
              <div> <h5 className="space">{conteudo.username} - Postado em {conteudo.createdAt} Votos: {conteudo.voteSum}</h5> </div>

                
                <h2>{conteudo.title}</h2>
                <p>{conteudo.body}</p>
                
            </StyledPost>
        })

    return(
        
        <div>recipesListPage

        <Button variante ="contained" color="primary"
        onClick={() => goToAddRecipePage (history)}>
            Adicionar novo post
            </Button>
            {conteudos}
        </div>
    )
}
export default RecipesListPage