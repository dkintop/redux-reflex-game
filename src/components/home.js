import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div id="welcome-box">
          <div id="instructions">
            Welcome to the REACTion Speed Test!
            <br />
            This game will test your reaction time and allow you to post your
            score! <br />
            See if you can make the top 10!
          </div>
        </div>
      </div>
    );
  }
}
