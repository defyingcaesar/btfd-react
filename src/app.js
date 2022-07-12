import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import { Home, Banksy, Mary } from "./views";

const App = () => {


  return (
    <div id="app" className="d-flex flex-column h-100">
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/banksy" component={Banksy} />
          <Route path="/mary" component={Mary} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
