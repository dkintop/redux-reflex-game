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
  //this NewScoreform Component does not have access to the props that are mapped in NewScoreForm.js for some ungodly reason. that is why it errors out on submit
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

let mapDispatchToProps = dispatch => {
  return {
    recordScore: score => dispatch(recordScore(score / 1000)),
    addHighScore: score => dispatch(addHighScore(score))
  };
};

export default connect(null, mapDispatchToProps)(ActiveGameTile);
