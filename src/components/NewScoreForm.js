import React, { Component } from "react";
import { addHighScore, resetGame } from "../actions/index";

import { connect } from "react-redux";
// import { ActiveGameTile } from "./ActiveGameTile.js";
export class NewScoreForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      score: this.props.score
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHighScore({ name: this.state.name, score: this.props.score });
    this.props.restart();
  };

  render() {
    return (
      <div id="form-container">
        Submit Your Score!
        <form className="newScoreform" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <input
            type="hidden"
            name="score"
            onChange={this.handleChange}
            value={this.props.score}
          />
          <input type="submit" value="submit score" />
        </form>
      </div>
    );
  }
}

let mapdispatchToProps = dispatch => {
  return {
    addHighScore: score => dispatch(addHighScore(score)),
    restart: () => dispatch(resetGame())
  };
};

const mapStateToProps = state => {
  return {
    score: state.gameReducer.score
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(NewScoreForm);
