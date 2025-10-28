import React from "react";

class Component1 extends React.Component {
  fruits = ["Apple", "Banana", "Mango", "Orange"];

  render() {
    return (
      <div>
        <h2>Fruits Lis</h2>
        <ul>
          {this.fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Component1;
