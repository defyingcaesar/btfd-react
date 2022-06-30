import React from "react";
import Dropdown from "../components/dropdown";

const Overview = () => {
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
			<Dropdown 
			label="Time Range To Apply "
			options={options}
			value={value}
			onChange={handleChange}
			/>
			<div className="row pb-5">
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
			<div className="row">
				<div className="col-md-4 col-sm-12 mb-3">
					<h2>Pipe Overview</h2>
					<iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&from=now-2d&to=now&panelId=54" width="1000" height="200" frameBorder="0" title="dam-pipes"></iframe>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 col-sm-12 mb-3">
					<h2>Upstream Weir</h2>
					<iframe src="https://grafana.comdatech.xyz/d-solo/u_11G1Pnz/calibration-dashboard?orgId=1&refresh=15m&from=now&to=now-7d&panelId=48" width="100%" height="350" frameBorder="0" title="Pipe 3 History"></iframe>
				</div>
			</div>
			<div className="row">
        <div className="col-md-12 col-sm-12 mb-3">
				<h2>Downstream Weir</h2>
        <iframe src="https://grafana.comdatech.xyz/d-solo/uAmm-cE7k/da-gama-dam-level?orgId=1&from=now&to=now-6h&panelId=27" width="100%" height="450" frameBorder="0" title="Downstream"></iframe>
        </div>
      </div>
		</div>
	);
};

export default Overview;