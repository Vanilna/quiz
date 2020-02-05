import React from "react";
import { withRouter } from "react-router";

import classes from "./StartQuiz.module.css";
import Button from "../Button/Button";

const StartQuiz = props => {
  const startQuiz = () => {
    props.history.push("/:0");
  };

  return (
    <div className={classes.StartButton}>
      <Button
        type="button"
        styling="normal"
        handleClick={startQuiz}
        name="Start Quiz"
      />
    </div>
  );
};

export default withRouter(StartQuiz);
