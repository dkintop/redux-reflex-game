import React, { Component } from "react";
import { connect } from "react-redux";
import HighScore from "./HighScore.js";
import { fetchScores } from "../actions/index.js";
import ShowScore from "./ShowScore.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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
            <Link to={`high-score/${score.id}`}>
              <HighScore score={score} key={score.id} />
            </Link>
          ))}
        </ol>

        <Router>
          <Switch>
            <Route path="/high-scores/:id" children={<ShowScore />} />
          </Switch>
        </Router>
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
