import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "../Gallery";
import Loading from "../Loading";
import Nav from "../Nav";
import "./App.css";

function App() {
  console.log(window.screen.width);
  console.log(window.screen.availWidth);
  return (
    <Router>
      <div className="App">
        <Nav>
          {window.screen.width > 760 ? (
            <h1>CarrieAndTyler.us</h1>
          ) : (
            <h1>C&T</h1>
          )}
        </Nav>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
