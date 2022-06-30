import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import "./index.css";

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  <Router>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </Router>,
  document.getElementById("root")
);
