import React from "react";

function Sampada() {
  const fruits = ["apple", "banana", "pineapple", "papaya", "orange", "mangoes"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Sampada;