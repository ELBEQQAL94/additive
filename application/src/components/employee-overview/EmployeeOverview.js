import React from 'react';

// Types
import PropTypes from 'prop-types';

// Components
import Spinner from '../Spinner';

// Styles
import './EmployeeOverview.scss';

const EmployeeOverview = ({results, name}) => {

  const data = results.length > 1 && Object.values(results[1])

  return (
    <div className="employee__overview">
      <div className="container">
        <h1 className="text-center">Employee Overview</h1>
        <div className="subordinates">
          <h2>
            Subordinates of employee
            <strong className="text-capitalize">{name.length > 0 ? name : <Spinner />}</strong>:
          </h2>
          <ul className="list-group">
            {
              data ?
              data[0]?.map((name, index) => (
                <li key={index} className="list-group-item">{name}</li>
              )) : <p>No Subordinates of employee! </p>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

EmployeeOverview.propTypes = {
  results: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default EmployeeOverview;
