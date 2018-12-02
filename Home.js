import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./styles.css";
export default class Home extends Component {
  render() {
    return (
      <div class="container">
        <Popup trigger={<button> Game Guide </button>} position="right center">
          <p>Game instructions: </p>
          <p> Tap on which mode you would like to play </p>
        </Popup>
        <a href="oneplayer">One Player</a>
        <a href="twoplayer">Two Player</a>
      </div>
    );
  }
}
