import React, { Component } from "react";
import { recordScore } from "../actions/index.js";
import { addHighScore } from "../actions/index.js";
import { connect } from "react-redux";
import { NewScoreForm } from "./NewScoreForm.js";
export class ActiveGameTile extends Component {
  state = {
    score: 0.0,
    showForm: false
  };

  incrementTime = () => {
    this.setState(prevState => ({
      ...prevState,
      score: prevState.score + 10
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.incrementTime, 10);
  }

  formatTime() {
    return this.state.score / 1000;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleForm = () => {
    this.setState(prevState => ({
      ...prevState,
      showForm: true
    }));
  };

  handleToggleForm = () => {
    if (this.state.showForm) {
      return <NewScoreForm />;
    }
  };

  handleClick = () => {
    clearInterval(this.interval);
    this.props.recordScore(this.state.score);
    this.toggleForm();
  };

  render() {
    return (
      <div className="game-tile-active" key="90" onClick={this.handleClick}>
        <div>CLICK ME!</div>

        <div id="time-display">{this.formatTime()}</div>
        {this.handleToggleForm()}
      </div>
    );
  }
}

let mapdispatchToProps = dispatch => {
  return {
    recordScore: score => dispatch(recordScore(score / 1000)),
    addHighScore: score => dispatch(addHighScore(score))
  };
};

export default connect(null, mapdispatchToProps)(ActiveGameTile);
