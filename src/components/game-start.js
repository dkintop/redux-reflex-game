import React, { Component } from "react";
import NewScoreForm from "./NewScoreForm";
export default class GameStart extends Component {
  render() {
    return (
      <div>
        this is the page where they will click a button and start the game
        <NewScoreForm />
      </div>
    );
  }
}
