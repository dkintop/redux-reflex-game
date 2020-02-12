import React, { Component } from "react";
import { startGame } from "../actions/index.js";
import { connect } from "react-redux";
export class StartButton extends Component {
  matrix = [
    <div className="game-tile" key="10"></div>,
    <div className="game-tile" key="10"></div>,
    <div className="game-tile" key="20"></div>,
    <div className="game-tile" key="30"></div>,
    <div className="game-tile" key="40">
      <div>
        <button id="start-button" onClick={this.handleClick}>
          Start Game!
        </button>
      </div>
    </div>,
    <div className="game-tile" key="50"></div>,
    <div className="game-tile" key="60"></div>,
    <div className="game-tile" key="70"></div>,
    <div className="game-tile" key="80"></div>
  ];

  handleClick = () => {
    return this.props.start();
  };

  render() {
    return (
      <div className="game-board">
        <div className="game-tile" key="90"></div>
        <div className="game-tile" key="10"></div>
        <div className="game-tile" key="20"></div>
        <div className="game-tile" key="30"></div>
        <div className="game-tile" key="40">
          <div>
            <button id="start-button" onClick={this.handleClick}>
              Start Game!
            </button>
          </div>
        </div>
        <div className="game-tile" key="50"></div>
        <div className="game-tile" key="60"></div>
        <div className="game-tile" key="70"></div>
        <div className="game-tile" key="80"></div>
      </div>
    );
  }
}

let mapdispatchToProps = dispatch => {
  return {
    start: () => dispatch(startGame())
  };
};

export default connect(null, mapdispatchToProps)(StartButton);
