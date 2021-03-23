import React, { Component } from "react";
import "./item.css";

class Items extends Component {
  render() {
    // const id = this.props.id;
    // const name = this.props.name;
    // const age = this.props.age;

    const { id, name, age } = this.props;
    //   const items = this.props.items;
    const { items } = this.props;
    const theitems = items.map((item) => {
      //   return item.age > 0 ? (
      //     <div key={item.id}>
      //       <p>{item.id}</p>
      //       <p>{item.name}</p>
      //       <p>{item.age}</p>
      //     </div>
      //   ) : null;
      if (item.age > 23) {
        return (
          //   <div key={Math.random() * 10}>
          <div className="item" key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
        );
      } else {
        return <div>No Items</div>;
      }
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
