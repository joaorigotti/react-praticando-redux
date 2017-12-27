import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './App/reducer';
import App from './App';

const reducers = combineReducers({
  app: appReducer,
});

/* eslint-disable no-undef */
render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
