import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game-start">Start Game</Link>
            </li>

            <li>
              <Link to="/high-scores">High Scores</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
