import React, { Component } from "react";
import "./styles.css";
export default class OnePlayer extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <p> I am player one </p>
        <a href="/">Go back</a>
      </div>
    );
  }
}
