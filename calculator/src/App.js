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

  /* numClickHandler() gets triggered only if any of the number buttons 
  (0–9) are pressed. Then it gets the value of the Button and adds 
  that to the current num value. It also makes sure that:
   * no whole numbers start with zero;
   * there are no multiple zeros before the comma;
   * the format will be “0.” if “.” is pressed first; and
   * numbers are entered up to 16 integers long: */

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(typeof value);

    if (calc.num.length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? 0
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  
/*   The commaClickHandler function gets fired only if the decimal point (.) is pressed.
  It adds the decimal point to the current num value, making it a decimal number. 
  It also makes sure that no multiple decimal points are possible: */

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

/* The signClickHandler function gets fired when the user press either +, –, * or /. 
  The particular value is then set as a current sign value in the calc object.
  It also makes sure there’s no effect on repeated calls: */

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };




  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            /* The Button component can detect different button types 
            and execute the assigned function once the specific button is pressed */
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
