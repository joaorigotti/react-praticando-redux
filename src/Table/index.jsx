import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = () => (
  <tr>
    <th>Número</th>
    <th>Número randômico</th>
  </tr>
);

const TableRow = item => (
  /* eslint-disable no-underscore-dangle */
  <tr key={item._id}>
    <td>{item.number}</td>
    <td>{item.randomNumber}</td>
  </tr>
);

const Table = props => (
  <table>
    <thead>
      {TableHeader()}
    </thead>
    <tbody>
      {props.data.map(TableRow)}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
