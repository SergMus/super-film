import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Films from "./components/Films/Films";
import Header from "./components/Header/Header";
import "./App.css";
import { useScrollToTop } from "./utils";
import { BrowserRouter as Router } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="App">
          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <StartPage {...props} />}
              />
              <Route path="/films" render={(props) => <Films {...props} />} />
            </Switch>
          </main>
        </div>
        <div className="toTop" onClick={useScrollToTop(true)}></div>
      </div>
    </BrowserRouter>
  );
}
