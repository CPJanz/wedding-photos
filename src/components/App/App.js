import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "../Gallery";
import Loading from "../Loading";
import Nav from "../Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <h1>Welcome</h1>
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
