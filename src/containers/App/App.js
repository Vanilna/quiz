import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./../../assets/logo.png";
import classes from "./App.module.css";
import StartQuiz from "../../components/StartQuiz/StartQuiz";
import Question from "../Question/Question";
import Result from "../../components/Result/Result";
import * as actions from "../../store/actions/index";

function App(props) {
  useEffect(props.onQuizInit, []);

  return (
    <Router>
      <div className={classes.App}>
        <header className={classes.Logo}>
          <img src={logo} alt="Quiz time" />
        </header>
        <Switch>
          <Route
            path="/result"
            render={() => (
              <Result length={props.questions.length} answers={props.answers} />
            )}
          />
          <Route path={"/:id"} component={Question} />
          <Route path="/" exact component={StartQuiz} />
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
    answers: state.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onQuizInit: () => dispatch(actions.fetchQuestions())
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
