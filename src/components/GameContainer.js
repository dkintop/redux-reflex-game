import React, { Component } from "react";
import NewScoreForm from "./NewScoreForm";
import { connect } from "react-redux";
export class GameContainer extends Component {
  render() {
    return (
      <div>
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
