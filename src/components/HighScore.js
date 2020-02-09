import React, { Component } from "react";

export default class HighScore extends Component {
  render() {
    return (
      <li>
        {this.props.score.name}: {this.props.score.score}
      </li>
    );
  }
}
