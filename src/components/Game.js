import React, { Component } from "react";
import { connect } from "react-redux";
import { resetGame } from "../actions/index.js";
import { shuffle } from "../algorithms/shuffle.js";
import ActiveGameTile from "./ActiveGameTile.js";
export class Game extends Component {
  matrix = [
    <ActiveGameTile />,
    <div className="game-tile" key="10"></div>,
    <div className="game-tile" key="20"></div>,
    <div className="game-tile" key="30"></div>,
    <div className="game-tile" key="40"></div>,
    <div className="game-tile" key="50"></div>,
    <div className="game-tile" key="60"></div>,
    <div className="game-tile" key="70"></div>,
    <div className="game-tile" key="80"></div>
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
