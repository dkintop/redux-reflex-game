import React, { Component } from "react";
import NewScoreForm from "./NewScoreForm";
import { connect } from "react-redux";
import Game from "./Game.js";
import StartButton from "./StartButton.js";
export class GameContainer extends Component {
  handleToggleForm = () => {
    if (this.props.showForm) {
      return <NewScoreForm />;
    }
  };

  render() {
    let initialized = this.props.initialized;
    let component;
    if (!initialized) {
      component = <StartButton />;
    } else {
      component = <Game />;
    }

    return (
      <div>
        {component}
        {/* //will pass game results down to NewScoreForm as prop */}
        {this.handleToggleForm()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showForm: state.gameReducer.showForm,
    score: state.gameReducer.score,
    initialized: state.gameReducer.initialized
  };
};

export default connect(mapStateToProps)(GameContainer);
