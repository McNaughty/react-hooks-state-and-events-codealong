import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  //callback function to update the state
  function handleClick(){
    setIsOn((isOn) => !isOn);
  }

  // conditional rendering for background color depending on state
  const color = isOn ? "red" : "white";

  //Conditional rendering to determine the button's text based on our state variable.
  return <button  style={{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>; 
}

export default Toggle;
