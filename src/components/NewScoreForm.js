import React, { Component } from "react";
import { addHighScore } from "../actions/index";
import { connect } from "react-redux";

export class NewScoreForm extends Component {
  state = {
    name: "",
    score: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addHighScore(this.state);
  };

  render() {
    return (
      <div>
        <form className="newScoreform" onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>Score</label>
          <input type="float" name="score" onChange={this.handleChange} />
          <input type="submit" value="submit score" />
        </form>
      </div>
    );
  }
}
//this will be a hidden form that will dispatch our action to the combined add high score action.
let mapdispatchToProps = dispatch => {
  return {
    addHighScore: score => dispatch(addHighScore(score))
  };
};

//will likely need to replace null with mapdispatchtoprops that grabs game information from the store.

export default connect(null, mapdispatchToProps)(NewScoreForm);
