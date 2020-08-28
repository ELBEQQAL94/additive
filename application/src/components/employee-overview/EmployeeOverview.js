import React from 'react';

// Types
import PropTypes from 'prop-types';

// Styles
import './EmployeeOverview.scss';

const EmployeeOverview = () => {
  return (
    <div className="employee__overview">
      <div className="container">
        <h1 className="text-center">Employee Overview</h1>
        <div className="subordinates">
          <h2>
            Subordinates of employee
            <strong className="text-capitalize">jhon hartman</strong>:
          </h2>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverview;
