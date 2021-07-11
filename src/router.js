import React from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";

import "./Styles/global.css";

import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import Anime from "./DetailScreen/anime";
import Profile from "./ProfileScreen/profile";
// import Home from "./HomeScreen/Components/Home";
// import MyAnimeList from "./MyAnimeList/myAnimeList";

export default function Router() {
  return (
    <BRouter>
      <Header />
        <Switch>
          {/* <Route exact path="/">
            <main id="main">
              <Home />
            </main>
          </Route> */}
          <Route exact path="/anime">
            <Anime />
          </Route>
          <Route exact path="/profile">
            <main id="main">
              <Profile />
            </main>
          </Route>
          {/* <Route exact path="/my-anime-list">
            <MyAnimeList />
          </Route> */}
          <Route>
            <NotFound />
          </Route>
        </Switch>
    </BRouter>
  )
}
