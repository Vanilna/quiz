import React from "react";
import { withRouter } from "react-router";

import classes from "./StartQuiz.module.css";
import Button from "../Button/Button";

const StartQuiz = props => {
  return (
    <div className={classes.StartButton}>
      <Button
        type="button"
        styling="normal"
        handleClick={() => props.history.push("/:0")}
        name="Start Quiz"
      />
    </div>
  );
};

export default withRouter(StartQuiz);
