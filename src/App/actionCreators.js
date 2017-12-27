import actionTypes from './actionTypes';

export const changeNumber = e => ({
  type: actionTypes.NUMBER_CHANGED,
  payload: parseInt(e.target.value, 10),
});

export const apply = (number) => {
  const payload = {};

  /* eslint-disable no-underscore-dangle */
  payload._id = new Date().getTime();
  payload.number = parseInt(number, 10);
  payload.randomNumber = Math.round(Math.random() * number * 100);

  return {
    type: actionTypes.APPLIED,
    payload,
  };
};
