import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNumber, handleSubmit } from './actionCreators';

import Input from '../Input';
import Table from '../Table';
import Result from '../Result';

const App = props => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Input
        number={props.number}
        changeNumber={props.changeNumber}
        handleSubmit={props.handleSubmit}
      />
      <Table data={props.numberList} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Result title="Soma" data={props.result.sum} />
      <Result title="Subtração" data={props.result.subtract} />
      <Result title="Multiplicação" data={props.result.multiply} />
      <Result title="Divisão" data={props.result.division} />
    </div>
  </div>
);

App.propTypes = {
  number: PropTypes.number.isRequired,
  numberList: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeNumber: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  result: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  number: state.app.number,
  numberList: state.app.numberList,
  result: state.app.result,
});

const mapDispatchToProps = dispatch => (bindActionCreators({
  changeNumber,
  handleSubmit,
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
