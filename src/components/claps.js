import React, { Component } from "react";

export default class Claps extends Component {
  state = {
    clickCount: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>CLAP!</button>
        <p>{this.state.clickCount}</p>
      </div>
    );
  }
}
