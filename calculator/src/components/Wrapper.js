/* The Wrapper component is the frame of our calculator, 
holding each children in place. It also allows us to center the app. */

import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
