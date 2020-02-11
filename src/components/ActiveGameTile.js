import React, { Component } from "react";

export default class ActiveGameTile extends Component {
  state = {
    time: 0.0
  };

  incrementTime = () => {
    return this.setState(state => {
      return { time: state.time + 0.0001 };
    });
  };

  componentDidMount() {
    setInterval(this.incrementTime(), 1000);
  }

  shouldComponentUpdate(nextState, prevState) {
    if (nextState === prevState) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div className="game-tile-active" key="90">
        <div>CLICK ME!</div>
        <div>{this.state.time}</div>
      </div>
    );
  }
}
