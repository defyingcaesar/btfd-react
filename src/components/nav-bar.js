import React from "react";

import MainNav from "./main-nav";

const logo ="https://i.ibb.co/1d4vnbY/cdt-logo-transparent.png";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo} alt="Loading..." width="40%"/>
          </div>
          <MainNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
