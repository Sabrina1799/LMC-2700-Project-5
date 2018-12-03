// Thank you for source code, https://www.npmjs.com/package/reactjs-navigation.

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";

import NavBarNPM from "reactjs-navigation";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import "./styles.css";
import Home from "./Home.js";
import OnePlayer from "./OnePlayer.js";
import TwoPlayer from "./TwoPlayer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.options = ["/", "OnePlayer", "TwoPlayer"];
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBarNPM pages={this.options} />
            <Route
              exact={true}
              path="/"
              render={() => (
                <div className="App">
                  <Home />
                </div>
              )}
            />
            <Route
              exact={true}
              path="/OnePlayer"
              render={() => (
                <div className="App">
                  <OnePlayer />
                </div>
              )}
            />
            <Route
              exact={true}
              path="/TwoPlayer"
              render={() => (
                <div className="App">
                  <TwoPlayer />
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
