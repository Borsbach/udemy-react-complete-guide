import React, { useEffect, useRef, useContext } from "react";
import AuthContext from '../../context/auth-context'
import styled from "styled-components";
import "../Cockpit/Cockpit.css";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alternate ? "red" : "green")};
  color: white;
  font: inherent;
  border: 1px solid black;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.alternate ? "salmon" : "lightgreen")};
    color: black;
  }
`;

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http requests possible
    // const timer = setTimeout(() => {
    //   alert("The timer is running");
    // }, 500);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  // if passing [props.persons] will will re-render every time a change occurs
  // you can use multiple useEffects!

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] 2nd cleanup work in useEffect");
    };
  });

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div>
      <h1>
        {props.title}
        <br />
        This is Alex's React App
      </h1>
      <p className={classes.join(" ")}>
        This is continuously updated as I learn more React!
      </p>
      <StyledButton
        ref={toggleBtnRef}
        alternate={props.showPersons}
        onClick={props.clicked}
      >
        Toggle Names
      </StyledButton>     
        <StyledButton onClick={authContext.login}>Log in</StyledButton>
    </div>
  );
};

export default cockpit;
