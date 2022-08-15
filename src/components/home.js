import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => {
  return (
      <div className="linkBody">
        <div className="links">
          <ul className="">
          <li className="linkBtn"><NavLink exact to="/mary">PISS MARY</NavLink></li>
          <li className="linkBtn"><NavLink to="/banksy">NOT BANKSY</NavLink></li>
          <li className="linkBtn"><NavLink to="/">COMING SOON, NGL</NavLink></li>
          </ul>
        </div>
      </div>
  );
};

export default Home;