import React from 'react';

// Types
import PropTypes from 'prop-types';

// Styles
import './EmployeeExplorer.scss';

const EmployeeExplorer = () => {
  return (
    <div className="employee__explorer--container">
      <h1>Employee Explorer</h1>
      <div className="search__form--container">
        <form className="form-inline">
          <div className="form-group">
            <input
              type="search"
              className="form-control"
              placeholder="Type Employee Name"
              name="search"
            />
          </div>
          <button type="submit" className="btn btn-primary text-uppercase">search</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeExplorer;
