import React, { Component } from "react";
import { x as f, y, Test } from "./module";
import Test2 from "./module";
import { default as app } from "./module";
import Child from "./Child";

class App extends Component {
  Testo() {
    console.log("Test !");
  }

  Testo = () => console.log("Test !!!");

  Testo = (p) => console.log("Test !!!@@");

  render() {
    return (
      <div className="App">
        Hello React {f + y}
        {Test()}
        {Test2()}
        {app()}
        <Child />
        {this.Testo()}
      </div>
    );
  }
}

export default App;
