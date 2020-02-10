import React, { Component } from "react";
import { connect } from "react-redux";
import HighScore from "./HighScore.js";
export class HighScoresContainer extends Component {
  render() {
    return (
      <ol>
        {this.props.highScores.map(score => (
          <HighScore score={score} />
        ))}
      </ol>
    );
  }
}

const mapStateToProps = state => {
  return {
    highScores: state.slice(0, 10)
  };
};

export default connect(mapStateToProps)(HighScoresContainer);
