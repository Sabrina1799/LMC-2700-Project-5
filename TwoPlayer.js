import React, { Component } from "react";
import "./styles.css";
export default class OnePlayer extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <p> I am player two </p>
        <a href="/">Go back</a>
      </div>
    );
  }
}
