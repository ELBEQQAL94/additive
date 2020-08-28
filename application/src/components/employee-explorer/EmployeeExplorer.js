import React, { useState } from 'react';

// Components
import Alert from '../Alert';
import Spinner from '../Spinner';

// Types
import PropTypes from 'prop-types';

// Styles
import './EmployeeExplorer.scss';

const EmployeeExplorer = ({
  request,
  error,
  loading,
  loadingSwitch
}) => {

  const [employeeName, setEmployeeName] = useState('');

  const handleSearch = (e) => {
    setEmployeeName(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    // run loading
    loadingSwitch();

    // send request
    request(employeeName.toLowerCase());
  };

  const renderForm = () => (
    <form className="form-inline" onSubmit={submit}>
      {
        loading ? <Spinner />: (
          <>
            <div className="form-group">
              <input
                type="search"
                onChange={handleSearch}
                className="form-control"
                placeholder="Type Employee Name"
                name="search"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary text-uppercase"
            >
              search
            </button>
          </>
        )
      }
    </form>
  )


  return (
    <div className="employee__explorer--container">
      <h1>Employee Explorer</h1>
      <div className="search__form--container">
        { error && <Alert/>}
        { renderForm() }
      </div>
    </div>
  );

};

EmployeeExplorer.propTypes = {
  request: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loadingSwitch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default EmployeeExplorer;
