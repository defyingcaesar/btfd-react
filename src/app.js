import React from "react";
import "./app.css";
import {
  Link,
  HashRouter as Router } from "react-router-dom";
import { Home } from "./views";
import { Mary, Banksy, LogoImg } from "./components";

const App = () => {


  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1 animated2 blurIn delayer0_5s">
        <LogoImg />
        <Router>
          <Link to="/" exact component={Home}></Link>
          <Link to="/banksy" component={Banksy}></Link>
          <Link path="/mary" component={Mary}></Link>
        </Router>
      </div>
    </div>
  ); 
};

export default App;
