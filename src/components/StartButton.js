import React, { Component } from "react";
import { startGame } from "../actions/index.js";
import { connect } from "react-redux";
export class StartButton extends Component {
  handleClick = () => {
    return this.props.start();
  };

  render() {
    return (
      <div>
        <button id="start-button" onClick={this.handleClick}>
          Start Game!
        </button>
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
