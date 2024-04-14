/* The Button component provides the interactivity for the app. 
Each component will have the value and onClick props.
In the stylesheet, we also include the styles for the equal button. 
We use Button props to access the class later on. */

import "./Button.css";
import React, {useState} from 'react';

/* the Button component so it can detect different button types and 
execute the assigned function once the specific button is pressed. */

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
