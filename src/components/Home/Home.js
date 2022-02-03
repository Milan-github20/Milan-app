import React from "react";
import styles from "./Home.module.css";
import Navigation from "../Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import First from "../../pages/First/First";
import Second from "../../pages/Second/Second";
import Third from "../../pages/Third/Third";
import Fourth from "../../pages/Fourth/Fourth";

const Home = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <div className={styles.MainHome}>
            <h1>Faculty of Information Technology</h1>
            <h2>Programming and software engineering</h2>
          </div>
        </Route>

        <Route path="/first">
          <First />
        </Route>
        <Route path="/second">
          <Second />
        </Route>
        <Route path="/third">
          <Third />
        </Route>
        <Route path="/fourth">
          <Fourth />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
