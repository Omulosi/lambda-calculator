import React from "react";

const NumberButton = (props) => {
  let zeroBtn = '';
  if (props.number === '0') {
    zeroBtn = 'zero'
  }

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button id={zeroBtn} 
        onClick={() => props.updateDisplay(props.number)}>
        {props.number}
      </button>
    </>
  );
};

export default NumberButton;
