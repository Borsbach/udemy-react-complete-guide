import React, { Component } from "react";
import Person from "./Person/Person";
import styled from "styled-components";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import "./App.css";

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherent;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Alex", age: 43 },
      { id: "2", name: "Julia", age: 36 },
      { id: "3", name: "Anthony", age: 12 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; //spread operator, immutable style preferred
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return ( 
            <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}               
                name={person.name}
                age={person.age}
              />
            </ErrorBoundary>  
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // let classes = ['red', 'bold'].join(' ')
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, this is Alex's React App</h1>
        <p className={classes.join(" ")}>
          This is continuously updated as I learn more React!
        </p>
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          Toggle Names
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
