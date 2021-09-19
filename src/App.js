import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import StartPage from "./components/StartPage/StartPage";
import Films from "./components/Films/Films";
import Header from "./components/Header/Header";
import "./App.css";
// import { UseScrollToTop } from "./utils";

export default function App() {
  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset);
  //   };
  // }, []);

  // const pageUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };

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
        {/* {offset > 150 ? <div className="toTop" onClick={pageUp}></div> : null} */}
      </div>
    </BrowserRouter>
  );
}
