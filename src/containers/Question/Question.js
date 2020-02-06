import React, { Fragment } from "react";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";

import classes from "./Question.module.css";
import Button from "../../components/Button/Button";
import * as actions from "../../store/actions/index";

const Question = props => {
  // redirect to start page on browser refresh
  if (props.questions.length === 0) {
    return <Redirect to="/" />;
  }

  // redirect to result page after last question
  const id = props.match.params.id.slice(1);
  if (+id === props.questions.length - 1) {
    props.history.push("/result");
  }

  const submitAnswer = result => {
    props.onAnswerSubmit(result);
    props.history.push(`/:${parseFloat(id) + 1}`);
  };

  // shuffle answers
  const answers = [...props.questions[id].incorrect_answers];
  const correctAnswer = props.questions[id].correct_answer;
  const randomIndex = (Math.random() * 3).toFixed(0);
  answers.splice(randomIndex, 0, correctAnswer);
  const answerElements = answers.map(answer => {
    const result = answer === correctAnswer ? true : false;
    return (
      <Button
        type="button"
        name={answer}
        handleClick={() => submitAnswer(result)}
        key={answer}
      />
    );
  });

  // prevent returning to start page when clicking "back"
  const disabledBackButton = id === "0" ? true : false;

  return (
    <Fragment>
      <div className={classes.Navigation}>
        <Button
          type="button"
          disabled={disabledBackButton}
          name="back"
          handleClick={() => {
            props.history.goBack();
          }}
        />
        <Button
          type="button"
          name="skip"
          handleClick={() => {
            props.history.push(`/:${parseFloat(id) + 1}`);
          }}
        />
      </div>
      <div className={classes.Answers}>
        <p className={classes.Question}>{props.questions[id].question}</p>
        {answerElements}
      </div>
    </Fragment>
  );
};

const mapStateToProp = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswerSubmit: answer => dispatch(actions.setAnswer(answer))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(Question));
