import React from "react";
import {NavLink} from "react-router-dom";

// import { useAuth0 } from "@auth0/auth0-react";

const Pipes = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
      <h2>Pipes And Release</h2>
      <div className="row">
      <div className="col-md-4 col-sm-12 mb-3">
        <iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&from=now-2d&to=now&panelId=54" width="1000" height="200" frameBorder="0" title="dam-pipes"></iframe>
      </div>
      </div>
        <div className="row">
        <NavLink to="/pipe-one" className={"btn btn-primary btn-lg btn-block"}>Pipe One</NavLink>
        <NavLink to="/pipe-two" className={"btn btn-primary btn-lg btn-block"}>Pipe Two</NavLink>
        <NavLink to="/pipe-three" className={"btn btn-primary btn-lg btn-block"}>Pipe Three</NavLink>
        <NavLink to="/pipe-four" className={"btn btn-primary btn-lg btn-block"}>Pipe Four</NavLink>
        <NavLink to="/pipe-five" className={"btn btn-primary btn-lg btn-block"}>Pipe Five</NavLink>
      </div>
    </div>
  );
};

export default Pipes;
