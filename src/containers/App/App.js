import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import logo from "./../../assets/logo.png";
import classes from "./App.module.css";
import StartQuiz from "../../components/StartQuiz/StartQuiz";
import Question from "../../components/Question/Question";
import * as actions from "../../store/actions/index";

function App(props) {
  const [logoClass, setLogoClass] = useState(classes.Logo);
  useEffect(props.onQuizInit, []);

  const logoHandler = () => {
    setLogoClass(classes["Logo--quiz"]);
  };

  return (
    <Router>
      <div className={classes.App}>
        <header className={logoClass}>
          <img src={logo} alt="Quiz time" />
        </header>
        <Switch>
          <Route
            path={"/:id"}
            exact
            render={() => (
              <Question
                questions={props.questions}
                submitHandler={props.onAnswerSubmit}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={() => <StartQuiz changeLogo={logoHandler} />}
          />
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
    onQuizInit: () => dispatch(actions.fetchQuestions()),
    onAnswerSubmit: (answer, id) => dispatch(actions.setAnswer(answer, id))
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
