import React, { Component } from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions/index.js";
import { shuffle } from "../algorithms/shuffle.js";
export class Game extends Component {
  matrix = [
    <div className="game-tile-active">d</div>,
    <div className="game-tile"></div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>,
    <div className="game-tile">d</div>
  ];

  shuffledMatrix = () => {
    return shuffle(this.matrix);
  };

  render() {
    return <div id="game-board">{this.shuffledMatrix()}</div>;
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
