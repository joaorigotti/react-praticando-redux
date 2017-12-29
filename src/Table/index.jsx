import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = () => (
  <tr>
    <th>Número randômico</th>
    <th>Número</th>
  </tr>
);

const renderRows = (props) => {
  const { data } = props;
  const { selectLine } = props;

  return data.map(item => (
    /* eslint-disable no-underscore-dangle */
    <tr key={item._id} onClick={() => selectLine(item)}>
      <td>{item.randomNumber}</td>
      <td>{item.number}</td>
    </tr>
  ));
};

const Table = props => (
  <table>
    <thead>
      {TableHeader()}
    </thead>
    <tbody>
      {renderRows(props)}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectLine: PropTypes.func.isRequired,
};

export default Table;
