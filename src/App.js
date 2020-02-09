import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home.js";
import GameStart from "./components/game-start";
import HighScores from "./components/HighScores";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/game-start">
          <GameStart />
        </Route>

        <Route path="/high-scores">
          <HighScores />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
