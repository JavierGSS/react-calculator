import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import React, { useState } from "react";

/* We create an array representation of the data in the wireframe,
so we can map through and render all the buttons in the ButtonBox: */

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  /* We declare our state variables: num, 
  the entered value; sign, the selected sign;
  and res, the calculated value. We use an object
  to set all states at once:*/

  const [calc, setCalc] = React.useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
