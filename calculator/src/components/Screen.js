/* The Screen component is the top section child of the Wrapper component,
and its purpose is to display the calculated values.
We use a small library called react-textfit for display output resizing on length,
meaning longer values must shrink in size. */

import { Textfit } from "react-textfit";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit className="screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
