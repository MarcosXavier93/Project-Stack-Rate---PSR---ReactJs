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
import { SessionContext } from "./session";

function ProtectedRoute({ component, ...props }) {
  const { isAuthenticated } = useContext(SessionContext);

  return (
    <Route {...props}>
      {isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
    </Route>
  );
}

export default function Router() {
  const [isAuthenticated, setAuthenticated] = useState(getSession);

  return (
    <SessionContext.Provider value={{ isAuthenticated, user, setAuthenticated }}>
      <BRouter>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <ProtectedRoute exact path="/anime/:id">
            <Anime />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile">
            <Profile />
          </ProtectedRoute>
          <ProtectedRoute exact path="/my-anime-list">
            <MyAnimeList />
          </ProtectedRoute>
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
