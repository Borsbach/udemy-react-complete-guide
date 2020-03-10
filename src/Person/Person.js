import React from "react";
import styled from 'styled-components'
import "./Person.css";

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
  }`

const person = props => {
  const rnd = Math.random();

  if (rnd > 0.7) {
    throw new Error('Something went wrong')
  }

  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
