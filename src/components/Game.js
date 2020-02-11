import React, { Component } from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions/index.js";
export class Game extends Component {
  render() {
    return (
      <div id="game-board">
        <div className="game-tile">d</div>
        <div className="game-tile"></div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
        <div className="game-tile">d</div>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("game unmounted");
    return this.props.restart();
  }
}

let mapdispatchToProps = dispatch => {
  return {
    restart: () => dispatch(resetGame())
  };
};

export default connect(null, mapdispatchToProps)(Game);
