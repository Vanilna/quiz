import React from "react";
import classes from "./Button.module.css";

const Button = props => {
  return (
    <div className={classes.Wrapper}>
      <button
        className={classes.Button}
        type={props.type}
        onClick={props.handleClick}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
