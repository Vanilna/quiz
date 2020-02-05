import React, { Fragment } from "react";
import { withRouter } from "react-router";
import classes from "./Question.module.css";
import Button from "../Button/Button";

const Question = props => {
  const id = props.match.params.id.slice(1);
  if (id === props.questions.length - 1) {
    // REDIRECT
  }
  const answers = [...props.questions[id].incorrect_answers];
  const correctAnswer = props.questions[id].correct_answer;
  const randomIndex = (Math.random() * 3).toFixed(0);
  answers.splice(randomIndex, 0, correctAnswer);

  const answerElements = answers.map(answer => (
    <Button
      type="button"
      name={answer}
      handleClick={answer => props.onAnswerSubmit(answer)}
      key={answer}
    />
  ));

  return (
    <Fragment>
      <Button
        type="button"
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
      <p className={classes.Question}>{props.questions[id].question}</p>
      {answerElements}
    </Fragment>
  );
};

export default withRouter(Question);
