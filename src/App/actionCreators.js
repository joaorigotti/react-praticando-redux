import actionTypes from './actionTypes';

export const changeNumber = e => ({
  type: actionTypes.NUMBER_CHANGED,
  payload: parseInt(e.target.value, 10),
});

export const sum = (n1, n2) => {
  const payload = n1 + n2;

  return {
    type: actionTypes.ADDED,
    payload,
  };
};

export const subtract = (n1, n2) => {
  const payload = n1 - n2;

  return {
    type: actionTypes.SUBTRACTED,
    payload,
  };
};

export const multiply = (n1, n2) => {
  const payload = n1 * n2;

  return {
    type: actionTypes.MULTIPLIED,
    payload,
  };
};

export const division = (n1, n2) => {
  const div = n2 === 0 ? 1 : n2;
  const payload = n1 / div;

  return {
    type: actionTypes.DIVIDED,
    payload,
  };
};

export const applyCalculations = payload => [
  sum(payload.randomNumber, payload.number),
  subtract(payload.randomNumber, payload.number),
  multiply(payload.randomNumber, payload.number),
  division(payload.randomNumber, payload.number),
];

export const handleSubmit = (number) => {
  const payload = {};

  /* eslint-disable no-underscore-dangle */
  payload._id = new Date().getTime();
  payload.number = parseInt(number, 10);
  payload.randomNumber = Math.round(Math.random() * number * 100);

  return [
    { type: actionTypes.SUBMITTED, payload },
    applyCalculations(payload),
  ];
};
