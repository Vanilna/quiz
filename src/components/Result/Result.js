import React from "react";
import { withRouter } from "react-router";

import Button from "../Button/Button";
import classes from "./Result.module.css";

const Result = props => {
  return (
    <div className={classes.Result}>
      <h2 className={classes.Heading}>Your result is:</h2>
      <p className={classes.Number}>
        {props.answers}/{props.length}
      </p>
      <Button
        type="button"
        handleClick={() => props.history.push("/")}
        name="Try Again"
      />
    </div>
  );
};

export default withRouter(Result);
