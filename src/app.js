import React from "react";
import "./app.css";
import {
  Switch,
  Route,
  HashRouter as Router } from "react-router-dom";
import { 
  Home, 
  Mary, 
  Banksy, 
  LogoImg,
  } from "./components";

const App = () => {


  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1 animated2 blurIn delayer0_5s">
        <LogoImg />
      <Router>
        <Switch className ="switch">
          <Route path="/" component={Home} exact />
          <Route path="/banksy" component={Banksy} />
          <Route path="/mary" component={Mary} />
        </Switch>
      </Router>
      </div>
    </div>
  ); 
};

export default App;
