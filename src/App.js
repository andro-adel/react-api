import React, { Component } from "react";
import { x as f, y, Test } from "./module";
import Test2 from "./module";
import { default as app } from "./module";
import Child from "./Child";
import Stateless from "./stateless";
import Items from "./components/item";

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

  // change = () => {
  //   console.log(this.state);
  // };

  change = () => {
    this.setState({
      name: "Andro",
      job: "programmer",
      age: "30",
    });
  };

  state = {
    items: [
      { id: 1, name: "ali", age: 24 },
      { id: 2, name: "naser", age: 25 },
      { id: 3, name: "omar", age: 23 },
    ],
  };

  // state = {
  //   product: "",
  // };

  // handochange = (e) => {
  //   console.log(e.target.value);
  // };

  handochange = (e) => {
    this.setState({
      product: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.product);
  };

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
        <p>{this.state.name}</p>
        <p>{this.state.job}</p>
        <p>{this.state.age}</p>
        <Stateless test={this.state.name} />
        List Items
        {/* <Items id="1" name="ahmed" age="22" />
        <Items id="2" name="tarek" age="25" /> */}
        <Items items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handochange} />
          <button>Submit</button>
          <textarea type="text" onChange={this.handochange} />
          <input type="submit" value="send" />
          <select onChange={this.handochange}>
            <option value="value 1">value 1</option>
            <option value="value 2">value 2</option>
            <option value="value 3">value 3</option>
          </select>
        </form>
        {this.state.product}
        <Items items={this.state.items} />
      </div>
    );
  }
}

export default App;
