import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from "./../../assets/logo.png";
import classes from "./App.module.css";
import Button from "../../components/Button/Button";
import Question from "../../components/Question/Question";

function App() {
  async function startQuiz() {
    const questions = await fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(questionsJSON => {
        console.log(questionsJSON);
      })
      .catch(error => console.error(error));

    return questions;
  }

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

export default App;
