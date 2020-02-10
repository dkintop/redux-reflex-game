import React, { Component } from "react";
import { connect } from "react-redux";
import HighScore from "./HighScore.js";
import { fetchScores } from "../actions/index.js";
export class HighScoresContainer extends Component {
  componentDidMount() {
    this.props.fetchScores();
  }

  render() {
    return (
      <ol>
        {this.props.highScores.map(score => (
          <HighScore score={score} key={score.id} />
        ))}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    highScores: state.highScoreReducer.slice(0, 10)
  };
};
//slice() utilized to display only top 10 highscores. will need to manage how/where to sort data from lowest score to highest score.probably in the action where you receive the scores?
export default connect(mapStateToProps, { fetchScores })(HighScoresContainer);
