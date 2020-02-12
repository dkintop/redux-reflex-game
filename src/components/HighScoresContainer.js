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
      <div id="score-container">
        <div className="wrapper">RECORD BOARD</div>
        <ol className="score-list">
          {this.props.highScores.map(score => (
            <HighScore score={score} key={score.id} />
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    highScores: state.highScoreReducer.slice(0, 10)
  };
};
//slice() utilized to display only top 10 highscores.
export default connect(mapStateToProps, { fetchScores })(HighScoresContainer);
