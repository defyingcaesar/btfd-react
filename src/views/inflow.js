import * as React from 'react';

// import { useAuth0 } from "@auth0/auth0-react";

const Inflow = () => {
  // const options = [
  //   { label: '1d', value: '1d' },
  //   { label: '2d', value: '2d' },
  //   { label: '3d', value: '3d' },
  // ];
  // const [days, setDays] = React.useState.('days');
  
  // const handleChange = (event) => {
  //   setDays(event.target.value);
  // };

  return (
    <div>
      {/* <Dropdown
        label="Time Range?"
        options={options}
        value={value}
        onChange={handleChange}
      /> */}
    <h2>Inflow</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&refresh=15m&from=now&to=now-7d&panelId=48" width="100%" height="350" frameBorder="0" title="Pipe 3 History"></iframe>
        </div>
      </div>  
    </div>
  );
};

export default Inflow;
