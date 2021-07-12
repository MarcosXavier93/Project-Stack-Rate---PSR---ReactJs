import React from "react";
import "./Styles/global.css";
import Profile from "./ProfileScreen/profile";
import Anime from "./DetailScreen/anime";
import Home from "./HomeScreen/Components/Home";
import MyAnimeList from "./MyAnimeList/myAnimeList";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import Login from "./LoginScreen/loginScreen";
import RegisterScreen from "./LoginScreen/RegisterScreen/registerScreen";
import RecoveryPasswordScreen from "./LoginScreen/RecoveryPasswordScreen/recoveryPasswordScreen";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

export default function Router() {
  return (
    <BRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/anime">
          <Anime />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/my-anime-list">
          <MyAnimeList />
        </Route>
        <Route exact path="/RecoveryPasswordScreen">
          <RecoveryPasswordScreen />
        </Route>
        <Route exact path="/RegisterScreen">
          <RegisterScreen />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BRouter>
  );
}
