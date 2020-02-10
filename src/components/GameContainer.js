import React, { Component } from "react";
import NewScoreForm from "./NewScoreForm";
import { connect } from "react-redux";
import Game from "./Game.js";
import StartButton from "./StartButton.js";
export class GameContainer extends Component {
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
        <NewScoreForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.gameReducer.score,
    initialized: state.gameReducer.initialized
  };
};
//slice() utilized to display only top 10 highscores. will need to manage how/where to sort data from lowest score to highest score.probably in the action where you receive the scores?
export default connect(mapStateToProps)(GameContainer);
