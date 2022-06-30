import React from "react";
import {NavLink} from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const Dashboards = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
    <h2>Dashboards</h2>
      <div className="row">
      <NavLink to="/overview" className={"btn btn-primary btn-lg btn-block"}><i class="fa fa-info-circle" aria-hidden="true"></i> | Overview</NavLink>
      <NavLink to="/inflow" className={"btn btn-success btn-lg btn-block"}><i class="fa fa-arrow-up" aria-hidden="true"></i> | Inflow</NavLink>
      <NavLink to="/level" className={"btn btn-danger btn-lg btn-block"}><i class="fa fa-thermometer-full" aria-hidden="true"></i> | Dam Level</NavLink>
      <NavLink to="/pipes" className={"btn btn-warning btn-lg btn-block"}><i class="fa fa-random" aria-hidden="true"></i> | Pipes and Release</NavLink>
      <NavLink to="/downstream" className={"btn btn-primary btn-lg btn-block"}><i class="fa fa-arrow-down" aria-hidden="true"></i> | Down Stream Weir</NavLink>
      <NavLink to="/reports" className={"btn btn-secondary btn-lg btn-block"}><i class="fa fa-table" aria-hidden="true"></i> | Reporting</NavLink>
      </div>
    </div>
  );
};

export default Dashboards;
