import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HighScore extends Component {
  render() {
    return (
      // <Link key={this.props.score.id} to={`high-scores/${this.props.score.id}`}>
      <li data-id={this.props.score.id}>
        {this.props.score.name}: {this.props.score.score} seconds
      </li>
      // </Link>
    );
  }
}
