import React, { Component } from "react";
import { useParams } from "react-router-dom";
export default class ShowScore extends Component {
  id = useParams();

  render() {
    return <div>{this.id}</div>;
  }
}
