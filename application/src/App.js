import React, { useState } from 'react';

// Components
import EmployeeExplorer  from './components/employee-explorer/EmployeeExplorer';
import EmployeeOverview  from './components/employee-overview/EmployeeOverview';


import './App.scss';

function App() {

  const [show, setShow] = useState(false);

  const showEmployeeView = () => {
    setShow(true);
    console.log("show: ", show);
  }


  return (
    <div className="App">
      {
        show ? <EmployeeOverview />
        : <EmployeeExplorer showEmployeeView={showEmployeeView}/>
      }
    </div>
  );
}

export default App;
