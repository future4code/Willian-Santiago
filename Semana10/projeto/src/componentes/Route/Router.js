
import { useState } from 'react';
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../Home/Home';
import ListTripsPages from "../Home/ListTripsPages"
import ApplicationFormPage from "../Home/ApplicationFormPage"
import Sobre from "../Home/Sobre"
import LoginPage from "../Home/LoginPage"
import Logout from "../Home/Logout"
import AdmHomePage from '../Home/AdmHomePage';
import CreateTripsPage from '../Home/CreateTripPage';


export const Router = () => {

  
  return (
    <BrowserRouter>
    <Switch>
   
   <Route exact path={"/"}>
    <HomePage />
    </Route>

    <Route exact path={"/adm"}>
    <AdmHomePage />
    </Route>

    <Route exact path={"/lista"}>
    <ListTripsPages />
    </Route>

    <Route exact path={"/formulario"}>
      <ApplicationFormPage />
    </Route>

    <Route exact path={"/login"}>
      <LoginPage />
    </Route>

    <Route exact path={"/criar"}>
      <CreateTripsPage />
    </Route>

    <Route exact path={"/sobre"}>
      <Sobre />
    </Route>


    <Route exact path={"/logout"}>
      <Logout />
    </Route>
  
    </Switch>
    </BrowserRouter>
  );
}

