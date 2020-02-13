import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <li className="nav-link">
            <NavLink
              to="/"
              activeStyle={{
                backgroundColor: "rgb(1, 92, 92)",
                color: "white",
                padding: "5px"
              }}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/game"
              activeStyle={{
                backgroundColor: "rgb(1, 92, 92)",
                color: "white",
                padding: "5px"
              }}
              exact
            >
              Start Game
            </NavLink>
          </li>

          <li className="nav-link">
            <NavLink
              to="/high-scores"
              activeStyle={{
                backgroundColor: "rgb(1, 92, 92)",
                color: "white",
                padding: "5px"
              }}
              exact
            >
              High Scores
            </NavLink>
          </li>
        </nav>
      </div>
    );
  }
}
