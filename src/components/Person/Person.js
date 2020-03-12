import React, { Component } from "react";
import styled from "styled-components";
import "../Person/Person.css";

// using tagged template literal ``

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  background-color: gainsboro;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Person extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Person.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate");
    console.log(snapshot)
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <StyledDiv>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I'm {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </StyledDiv>
    );
  }
}

export default Person;
