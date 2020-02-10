import React, { Component } from "react";

export default class HighScore extends Component {
  render() {
    return (
      <li data-id={this.props.score.id}>
        {this.props.score.name}: {this.props.score.score} seconds
      </li>
    );
  }
}
