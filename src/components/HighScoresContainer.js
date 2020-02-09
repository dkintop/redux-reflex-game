import React, { Component } from "react";
import { connect } from "react-redux";
import HighScore from "./HighScore.js";
export class HighScoresContainer extends Component {
  render() {
    return (
      <div>
        <ol>
          {this.props.highScores.map(score => (
            <HighScore score={score} />
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    highScores: state.highScores
  };
};

export default connect(mapStateToProps)(HighScoresContainer);
