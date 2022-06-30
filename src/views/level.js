import React from "react";
import Dropdown from "../components/dropdown";

// import { useAuth0 } from "@auth0/auth0-react";

const Level = () => {

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

const [value, setValue] = React.useState('now-7d');

const handleChange = (event) => {
    setValue(event.target.value);
};
  return (
    <div>
      <div className="row pb-2">
        <div className="col-md-4 col-sm-12 mb-3">
          <h2>Dam Level</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=2" width="auto" height="100%" frameBorder="0" title="dam-level"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Dam Percent Full</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=3&tv=kiosk" width="auto" height="100%" title="dam-percent" frameBorder="0"></iframe>
        </div>
        <div className="col-md-4 col-sm-12 mb-3">
        <h2>Dam Volume</h2>
          <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=now-1d&to=now&panelId=13" width="auto" height="100%" frameBorder="0" title="dam-volume"></iframe>
        </div>
      </div>
			<div className="row mt-5">
				<div className="col-md-6 col-sm-12 mb-3">
				<Dropdown 
        label="Time Range To Apply "
        options={options}
        value={value}
        onChange={handleChange}
        />
				</div>
				<div className="col-md-6 col-sm-12 mb-2">
				<a href={`https://grafana.comdatech.xyz/d/h9Tk0jX7k/da-gama-reporting?orgId=1&from=${value}&to=now&inspect=2&inspectTab=data`} className="btn btn-info btn-lg btn-block" target="_blank" rel="noreferrer">Generate Report</a>
				</div>
			</div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Volume Trendline</h2>
          <iframe src={`https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=${value}&&to=now&panelId=5`} width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Level Trendline</h2>
          <iframe src={`https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=${value}&&to=now&panelId=29`} width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 col-sm-12 mb-3">
        <h2>Percentage Trendline</h2>
          <iframe src={`https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&refresh=15m&from=${value}&to=now&panelId=30`} width="100%" height="400" title="dam-table" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Level;
