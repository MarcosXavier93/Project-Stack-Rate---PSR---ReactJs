import React, { useContext, useState } from "react";
import { SessionContext, getSession } from "./session";
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
import { BrowserRouter as BRouter, Switch, Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  const { user } = useContext(SessionContext);

  return <Route {...props}>{user ? <Component /> : <Redirect to="/login" />}</Route>;
}

export default function Router() {
  const [user, setUser] = useState(null);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      <BRouter>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute exact path="/anime/:id" component={Anime} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/my-anime-list" component={MyAnimeList} />
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
    </SessionContext.Provider>
  );
}
