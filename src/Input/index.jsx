import React from 'react';
import PropTypes from 'prop-types';

const Input = props => (
  <div>
    <label htmlFor="number">Número</label>
    <input
      type="number"
      value={props.number}
      id="number"
      name="number"
      min="0"
      onChange={props.changeNumber}
    />
    <button onClick={() => props.apply(props.number)}>Aplicar</button>
  </div>
);

Input.propTypes = {
  number: PropTypes.number.isRequired,
  changeNumber: PropTypes.func.isRequired,
  apply: PropTypes.func.isRequired,
};

export default Input;
