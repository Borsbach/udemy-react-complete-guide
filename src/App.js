import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
// import Age from "./Age/Age"

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 43 },
      { name: "Julia", age: 36 },
      { name: "Anthony", age: 12 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 43 },
      { name: "Julia", age: 36 },
      { name: "Anthony", age: 12 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 43 },
        { name: "Julia", age: 36 },
        { name: "Anthony", age: 12 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render () {
    const style = {
      backgroundColor: "white",
      font: "inherent",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
    <div className="App">
      <h1>Hi, this is Alex's React App</h1>
      <p>This is continuously update as I learn more React!</p>
      <button 
        style={style} 
        onClick={this.togglePersonHandler}>
        Show Names
      </button>
      { this.state.showPersons ? 
      <div>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler}
        changed={this.nameChangedHandler}>My Hobbies: Basketball</Person>
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
      />       
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      >
      </Person>
      </div> : null
      }
    </div>
    )
  }
};

export default App
