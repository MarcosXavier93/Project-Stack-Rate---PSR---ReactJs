import React from "react";
import "./Styles/global.css";
// import Profile from "./ProfileScreen/profile";
// import Anime from "./DetailScreen/anime";
// import Home from "./HomeScreen/Components/Home";
// import MyAnimeList from "./MyAnimeList/myAnimeList";
// import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

export default function Router() {
  return (
    <BRouter>
      <Header />
        {/* <Switch>
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
          <Route>
            <NotFound />
          </Route>
        </Switch> */}
    </BRouter>
  );
}
