import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HighScore extends Component {
  render() {
    return (
      <li data-id={this.props.score.id} key={this.props.score.id}>
        <Link to={`/high-scores/${this.props.score.id}`}>
          {this.props.score.name}: {this.props.score.score} seconds
        </Link>
      </li>
    );
  }
}
