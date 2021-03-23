import React, { Component } from "react";

class Items extends Component {
  render() {
    // const id = this.props.id;
    // const name = this.props.name;
    // const age = this.props.age;

    const { id, name, age } = this.props;
    //   const items = this.props.items;
    const { items } = this.props;
    const theitems = items.map((item) => {
      return (
        <div>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.age}</p>
        </div>
      );
    });
    return (
      <div>
        {/* <p>Item</p> */}
        <p>{id}</p>
        <p>{name}</p>
        <p>{age}</p>
        {theitems}
      </div>
    );
  }
}

export default Items;
