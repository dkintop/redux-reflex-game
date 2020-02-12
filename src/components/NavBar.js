import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <li className="nav-link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link to="/game-start">Start Game</Link>
          </li>

          <li className="nav-link">
            <Link to="/high-scores">High Scores</Link>
          </li>
        </nav>
      </div>
    );
  }
}
