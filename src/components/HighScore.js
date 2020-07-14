import React, { Component } from "react";
import { Link } from "react-router-dom";
import Claps from "./claps.js";
export default class HighScore extends Component {
  render() {
    return (
      <li data-id={this.props.score.id} key={this.props.score.id}>
        <Link to={`/high-scores/${this.props.score.id}`}>
          {this.props.score.name}: {this.props.score.score} seconds
        </Link>
        <Claps />
      </li>
    );
  }
}
