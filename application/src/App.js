import React, { useState } from 'react';

// Components
import EmployeeExplorer  from './components/employee-explorer/EmployeeExplorer';
import EmployeeOverview  from './components/employee-overview/EmployeeOverview';

// service
import instance from "./services";

import './App.scss';

function App() {

  const [show, setShow] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');

  // switch loading
  const loadingSwitch = () => {
    setLoading(true);
  };

  const request = async (employeeName) => {
    try {
      const res =  await instance.get(employeeName);
      setName(employeeName);
      setError(false);
      setResults(res.data);
      setLoading(false);
      setShow(true);
    } catch(error) {
      setLoading(false);
      setError(true);
      setShow(false);
    };
  };


  return (
    <div className="App">
      {
        show ? <EmployeeOverview results={results} name={name} />
        : <EmployeeExplorer
            request={request}
            error={error}
            loadingSwitch={loadingSwitch}
            loading={loading}
          />
      }
    </div>
  );
};

export default App;
