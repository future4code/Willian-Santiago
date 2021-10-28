import React from "react"
import { Switch, Route } from "react-router-dom"
import AddRecipePage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPages from "../pages/LoginPages/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignPage from "../pages/SignPage/SignPage"

const Router = ({setRightButtonText}) => {
    return (
        
        <Switch>

            <Route exact path ="/login">
            <LoginPages setRightButtonText={setRightButtonText}/>
            </Route>
           
            <Route exact path ="/cadastro" >
            <SignPage setRightButtonText={setRightButtonText}/>
            </Route>

            <Route exact path ="/" >
            <RecipesListPage/>
            </Route>

            <Route exact path ="/adiciona" >
            <AddRecipePage />
            </Route>

            <Route exact path ="/detalhe/:id">
            <RecipeDetailPage />
            </Route>


            <Route>
           <div>Erro</div>
            </Route>

        </Switch>

    )
}
export default Router