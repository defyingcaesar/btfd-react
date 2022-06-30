import React from "react";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

// import { useAuth0 } from "@auth0/auth0-react";

const Downstream = () => {
  // const { user } = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>

    <h2>Downstream</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
        <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=now&to=now-6h&panelId=27" width="100%" height="450" frameBorder="0" title="Downstream"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
        </div>
      </div>
    </div>
  );
};


export default Downstream;
