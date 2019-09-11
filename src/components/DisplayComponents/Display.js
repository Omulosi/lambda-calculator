import React from "react";

const Display = (props) => {
  const displayValue = props.numberDisplay.slice(0, 10);
  return <div className="display">{displayValue}</div>;
};

export default Display;
