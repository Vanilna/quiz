import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./../../assets/logo.png";
import classes from "./App.module.css";
import Button from "../../components/Button/Button";
import Question from "../../components/Question/Question";
import * as actions from "../../store/actions/index";

function App(props) {
  const startQuiz = () => {
    props.onQuizInit();
    props.history.push("/:0");
  };

  return (
    <Router>
      <div className={classes.App}>
        <header className={classes.Logo}>
          <img src={logo} alt="Quiz time" />
        </header>
        <Switch>
          <Route path="/" exact>
            <div className={classes.StartButton}>
              <Button
                type="button"
                styling="normal"
                handleClick={startQuiz}
                name="Start Quiz"
              />
            </div>
          </Route>
          <Route path={"/:id"} exact component={Question} />
        </Switch>

        <p className={classes.Reference}>
          Logo created by Freshcare from{" "}
          <a className={classes.Reference__link} href="https://pngtree.com/">
            Pngtree.com
          </a>
        </p>
      </div>
    </Router>
  );
}

const mapStateToProp = state => {
  return {
    questions: state.questions,
    answers: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAnswerSubmit: answer => dispatch(actions.setAnswer(answer)),
    onQuizInit: () => dispatch(actions.fetchQuestions())
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
