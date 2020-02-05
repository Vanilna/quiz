import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import classes from "./StartQuiz.module.css";
import Button from "./../../components/Button/Button";
import * as actions from "../../store/actions/index";

const StartQuiz = props => {
  const startQuiz = () => {
    props.onQuizInit();
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

const mapDispatchToProps = dispatch => {
  return {
    onQuizInit: () => dispatch(actions.fetchQuestions())
  };
};

export default connect(null, mapDispatchToProps)(withRouter(StartQuiz));
