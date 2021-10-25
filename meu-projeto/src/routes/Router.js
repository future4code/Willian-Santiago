import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/header/Header"
import AddRecipsPage from "../pages/AddRecipesPage/AddRecipesPage"
import LoginPages from "../pages/LoginPages/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignPage from "../pages/SignPage/SignPage"

const Router = () => {
    return (
        <BrowserRouter >
        <Header />
        <Switch>


            <Route exact path ="/login">
            <LoginPages />
            </Route>
           
            <Route exact path ="/cadastro" >
            <SignPage />
            </Route>

            <Route exact path ="/" >
            <RecipesListPage/>
            </Route>

            <Route exact path ="/adicionar-receita" >
            <AddRecipsPage />
            </Route>

            <Route exact path ="/detalhe/:id">
            <RecipeDetailPage />
            </Route>


            <Route>
           <div>Erro</div>
            </Route>

        </Switch>

        
        </BrowserRouter>
    )
}
export default Router