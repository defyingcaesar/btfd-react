import * as React from 'react';

// import { useAuth0 } from "@auth0/auth0-react";

const Reports = () => {
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Bearer ',
    //         'Accept': 'application/csv',
    //         'Content-Type': 'application/vnd.flux',
    //         'data': 'from(bucket:"example-bucket")|> range(start: -12h)|> filter(fn: (r) => r._measurement == "example-measurement")|> aggregateWindow(every: 1h, fn: mean)'
    //     },
    //     body: JSON.stringify({ title: 'React POST Request Example' })
    // };
    // fetch('https://reqres.in/api/posts', requestOptions)
    // .then(response => response.json())
    // .then(data => this.setState({ postId: data.id }));

  return (
    <div>
    
    <h2>Reports</h2>
      <div className="row">
      <div className="col-md-12 col-sm-12 mb-3">
        <a href="https://grafana.comdatech.xyz/d/h9Tk0jX7k/da-gama-reporting?orgId=1&from=now-30d&to=now&inspect=2&inspectTab=data" className="btn btn-info btn-lg btn-block" target="_blank" rel="noreferrer">Da Gama Reports</a>
      </div>
      </div>  
    </div>
  );
};

export default Reports;
