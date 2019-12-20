import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
// import { render } from "react-dom";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Alex", age: 43 },
      { name: "Julia", age: 36 },
      { name: "Anthony", age: 11 }
    ],
    otherState: "some other value"
  });

  console.log(personsState);

  const switchNameHandler = newName => {
    // console.log('was clicked')
    setPersonsState({
      persons: [
        { name: newName, age: 43 },
        { name: "Julia", age: 36 },
        { name: "Anthony", age: 13 }
      ]
    });
  };

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Alex", age: 43 },
        { name: event.target.value, age: 36 },
        { name: "Anthony", age: 11 }
      ]
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherent",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Hi, I'm Alex's React App</h1>
      <p>This really works!</p>
      <button style={style} onClick={() => switchNameHandler("ALEX!!")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={() => switchNameHandler("Alex!")}
        changed={nameChangedHandler}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        My Hobbies: Video Games
      </Person>
    </div>
  );
};

export default app;
