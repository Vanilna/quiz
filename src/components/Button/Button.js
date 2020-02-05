import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  const styles = [classes.Button];
  if (props.styling === "right") {
    styles.push(classes.Right);
  } else if (props.styling === "wrong") {
    styles.push(classes.Wrong);
  }
  return (
    <div className={classes.Wrapper}>
      <button
        className={classes.Button}
        type={props.type}
        onClick={props.handleClick}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
