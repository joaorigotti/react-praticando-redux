import React from 'react';
import PropTypes from 'prop-types';

const Result = props => (
  <div>
    <h2>{props.title}</h2>
    <span>{props.data}</span>
  </div>
);

Result.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default Result;
