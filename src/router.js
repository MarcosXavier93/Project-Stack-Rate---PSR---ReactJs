import React from "react";
import {BrowserRouter as BRouter, Switch, Route} from "react-router-dom";

import "./Styles/global.css";

import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import Anime from "./DetailScreen/anime";
import Profile from "./ProfileScreen/profile";
import LoginScreen from "./LoginScreen/loginScreen";
import RecoveryPasswordScreen from "./LoginScreen/RecoveryPasswordScreen/recoveryPasswordScreen";
import RegisterScreen from "./LoginScreen/RegisterScreen/registerScreen";
// import Home from "./HomeScreen/Components/Home";
// import MyAnimeList from "./MyAnimeList/myAnimeList";

export default function Router() {
    return (
        <LoginScreen/>
    )
}
