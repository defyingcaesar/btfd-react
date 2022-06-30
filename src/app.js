import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, Banksy, Level, Pipes, PipeOne, PipeTwo, PipeThree, PipeFour, PipeFive, Downstream } from "./views";
import Inflow from "./views/inflow";
import Reports from "./views/reports";
import Overview from "./views/overview";;


const App = () => {


  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/banksy" component={Banksy} />
          <Route path="/level" component={Level} />
          <Route path="/inflow" component={Inflow} />
          <Route path="/pipes" component={Pipes} />
          <Route path="/pipe-one" component={PipeOne} />
          <Route path="/pipe-two" component={PipeTwo} />
          <Route path="/pipe-three" component={PipeThree} />
          <Route path="/pipe-four" component={PipeFour} />
          <Route path="/pipe-five" component={PipeFive} />
          <Route path="/downstream" component={Downstream} />
          <Route path="/reports" component={Reports} />
          <Route path="/overview" component={Overview} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
