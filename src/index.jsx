import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import multi from 'redux-multi';
import appReducer from './App/reducer';
import App from './App';

/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
  app: appReducer,
});

const store = applyMiddleware(multi)(createStore)(reducers, devTools);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
