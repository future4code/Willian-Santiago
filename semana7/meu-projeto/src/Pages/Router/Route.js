import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import ApplicationPage from "../ApplicationPage/ApplicationPage"
import CreateTripPage from "../CreateTripPage/CreateTripPage"
import LoginPage from "../LoginPage/LoginPage"
import TripDetailPage from "../TripDetailPage/TripsDetailPage"
import TripListPage from "../TripsListsPage/TripListPage"
import { CssBaseline } from "@material-ui/core"


const Router = () => {
  return(
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomePage />}>
            </Route>

            <Route exact path="/inscricao" element={<ApplicationPage />}>
            </Route>

            <Route exact path="/criar" element={<CreateTripPage />}>
            </Route>

            <Route exact path="/login" element={<LoginPage />}>
            </Route>

            <Route exact path="/detalhes/viagens" element={<TripDetailPage />}>
            </Route>

            <Route exact path="/list" element={<TripListPage />}>
            </Route>

        </Routes>
        
        </BrowserRouter>

  )
}
export default Router