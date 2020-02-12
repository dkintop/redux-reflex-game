import React, { Component } from "react";
import { addHighScore } from "../actions/index";
import { connect } from "react-redux";

export class NewScoreForm extends Component {
  state = {
    name: "",
    score: this.props.score
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHighScore({ name: this.state.name, score: this.props.score });
  };

  render() {
    return (
      <div>
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
    addHighScore: score => dispatch(addHighScore(score))
  };
};

const mapStateToProps = state => {
  return {
    score: state.gameReducer.score
  };
};

export default connect(mapStateToProps, mapdispatchToProps)(NewScoreForm);
