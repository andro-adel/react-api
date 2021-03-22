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

  state = {
    name: "Hamza",
    job: "doctor",
    age: 25,
  };

  HandleClickState() {
    console.log(this.state.name);
  }

  HandleClickState2 = () => console.log(this.state.job);

  HandleClick() {
    console.log("Clicked");
  }

  HandleMouseMove() {
    console.log("MouseMove");
  }

  change = () => {};

  render() {
    return (
      <div className="App">
        Hello React {f + y}
        {Test()}
        {Test2()}
        {app()}
        <Child />
        {this.Testo()}
        <button onClick={this.HandleClickState.bind(this)}>Click This</button>
        <button onClick={this.HandleClickState2}>Click This 2</button>
        <button onClick={this.HandleClick}>Click</button>
        <button onMouseMove={this.HandleMouseMove}>MouseMove</button>
        <button onClick={this.change}>Change State</button>
      </div>
    );
  }
}

export default App;
