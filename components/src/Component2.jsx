import React, { Component } from "react";

class Component2 extends Component {
  render() {
    const students = [
      { id: 1, name: "Sampada" },
      { id: 2, name: "Sravanthi" },
      { id: 3, name: "Triveni" },
      { id: 4, name: "Yogi" }
    ];

    return (
      <div>
        <h2>Student Names</h2>
        <ol>
          {students.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Component2;
