import React, { useState } from "react";
import "./App.css";
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Alex', age: 43 },
      { name: 'Julia', age: 36 },
      { name: 'Anthony', age: 11 }
    ],
    otherState: 'some other value'
  })

  console.log(personsState)

  const switchNameHandler = () => {
    // console.log('was clicked')
    setPersonsState({
      persons: [
        { name: 'Alexander', age: 43 },
        { name: 'Julia', age: 36 },
        { name: 'Anthony', age: 13 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This really works!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >My Hobbies: Video Games</Person>
    </div>
  );
}


export default app;




