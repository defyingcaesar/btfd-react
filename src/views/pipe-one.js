import React from "react";

import Dropdown from "../components/dropdown";

// import { useAuth0 } from "@auth0/auth0-react";

const PipeOne = () => {

const BaseUrl = "https://grafana.comdatech.xyz/d-solo/QrfhicPnk"
const GraphFolder = "da-gama-pipes"
const orgId = "orgId=1"
const refresh = "refresh=10m"

const options = [
    { label: '1d', value: 'now-1d' },
    { label: '2d', value: 'now-2d' },
    { label: '3d', value: 'now-3d' },
    { label: '4d', value: 'now-4d' },
    { label: '5d', value: 'now-5d' },
    { label: '6d', value: 'now-6d' },
    { label: '7d', value: 'now-7d' },
    { label: '15d', value: 'now-15d' },
    { label: '30d', value: 'now-30d' }
  
  ];
const panelIds = [
  { label: 'Pipe 1 Current', value: '2' },
  { label: 'Pipe 1 Acc', value: '8' },
  { label: 'Pipe 1 History', value: '18' }
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
        <h2>Pipe One</h2>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src={`${BaseUrl}/${GraphFolder}?${orgId}&${refresh}&from=now&to=now-1d&panelId=2`} width="100%" height="500" frameBorder="0" title={`${panelIds.[0].label}`}></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src={`${BaseUrl}/${GraphFolder}?${orgId}&${refresh}&from=now&to=${value}&panelId=8`} width="100%" height="100%" frameBorder="0" title={`${panelIds.[1].label}`}></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 mb-3">
              <iframe src={`${BaseUrl}/${GraphFolder}?${orgId}&${refresh}&from=now&to=${value}&panelId=18`} width="100%" height="350" frameBorder="0" title={`${panelIds.[2].label}`}></iframe>
            </div>
          </div>
    </div>
  );
};

export default PipeOne;
