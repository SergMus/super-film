import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Films from "./components/Films/Films";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <StartPage {...props} />} />
          <Route path="/films" render={(props) => <Films {...props} />} />
        </Switch>
      </main>
    </>
  );
}
