import React from "react"
import Button from "@material-ui/core/Button"
import useProtectedPage from "../../hooks/useProtectedPage"


const RecipesListPage = () => {

    useProtectedPage()
    return(

        <div>recipesListPage

        <Button variante ="contained" color="primary">
            Primaria
            </Button>
        </div>
    )
}
export default RecipesListPage