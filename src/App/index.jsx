import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNumber, apply } from './actionCreators';

import Input from '../Input';
import Table from '../Table';

const App = props => (
  <div>
    <Input number={props.number} changeNumber={props.changeNumber} apply={props.apply} />
    <Table data={props.numberList} />
  </div>
);

App.propTypes = {
  number: PropTypes.number.isRequired,
  numberList: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeNumber: PropTypes.func.isRequired,
  apply: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  number: state.app.number,
  numberList: state.app.numberList,
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  changeNumber,
  apply,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
