import React from "react";
import Main from "./components/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotMatch from "./components/NotMatch";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/Login" component={Login} />
        <Route path="/SignUp" component={SignUp} />
        <Route component={NotMatch} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
