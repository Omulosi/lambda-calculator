import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton';

//Import your array data to from the provided data file
import { operators } from '../../data.js';

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorState] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {
         operatorsState.map((operator) => {
           return <OperatorButton operator={operator}/>
         })
      }
    </div>
  );
};
