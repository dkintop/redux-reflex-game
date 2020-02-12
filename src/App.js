import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home.js";
import GameContainer from "./components/GameContainer";
import HighScoresContainer from "./components/HighScoresContainer";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <Banner />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/game-start">
          <GameContainer />
        </Route>

        <Route path="/high-scores">
          <HighScoresContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
