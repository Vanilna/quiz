import React from "react";
import logo from "./assets/logo.png";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.Logo}>
        <img src={logo} alt="Quiz time" />
      </header>

      <p className={classes.Reference}>
        Logo created by Freshcare from{" "}
        <a className={classes.Reference__link} href="https://pngtree.com/">
          Pngtree.com
        </a>
      </p>
    </div>
  );
}

export default App;
