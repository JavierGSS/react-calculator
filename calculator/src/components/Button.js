/* The Button component provides the interactivity for the app. 
Each component will have the value and onClick props.
In the stylesheet, we also include the styles for the equal button. 
We use Button props to access the class later on. */

import "./Button.css";

const Button = ({ className, value, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {value}
    </Button>
  );
};

export default Button;
