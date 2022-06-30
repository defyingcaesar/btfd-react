import React from "react";

const logo ="https://i.ibb.co/rsjsrtg/cdt-icon-transparent.png";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img className="mb-3 app-logo" src={logo} alt="Comdatech logo" width="25" />
    <p>
      Developed by {" "}
      <a target="_blank" rel="noopener noreferrer" href="https://comdatech.co.za">
        Comdatech
      </a>
    </p>
  </footer>
);

export default Footer;
