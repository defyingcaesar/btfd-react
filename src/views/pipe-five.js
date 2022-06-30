import React from "react";
import Dropdown from "../components/dropdown";
// import { useAuth0 } from "@auth0/auth0-react";

const PipeFive = () => {
  const options = [
    { label: '1d', value: 'now-1d' },
    { label: '2d', value: 'now-2d' },
    { label: '3d', value: 'now-3d' },
    { label: '4d', value: 'now-4d' },
    { label: '5d', value: 'now-5d' },
    { label: '6d', value: 'now-6d' },
    { label: '7d', value: 'now-7d' },
    { label: '15d', value: 'now-15d' },
    { label: '30d', value: 'now-30d' },
  
  ];

  const [value, setValue] = React.useState('now-7d');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Dropdown
        label="Time Range To Apply "
        options={options}
        value={value}
        onChange={handleChange}
      />
    <p>Current time range is {value}!</p>
    <h2>Pipe Five</h2>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src="https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=10m&from=now&to=now-6h&panelId=6" width="100%" height="500" frameBorder="0" title="Pipe 5"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src={`https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&to=${value}&panelId=12`} width="100%" height="100%" frameBorder="0" title="Pipe 5 Acc"></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
          <iframe src={`https://grafana.comdatech.xyz/d-solo/QrfhicPnk/da-gama-pipes?orgId=1&refresh=15m&from=now&to=${value}&panelId=22`} width="100%" height="350" frameBorder="0" title="Pipe 3 History"></iframe>
        </div>
      </div>  
    </div>
  );
};

export default PipeFive;
