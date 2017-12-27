import actionTypes from './actionTypes';

const INITIAL_STATE = {
  number: 0,
  numberList: [],
  result: {
    sum: 0,
    subtract: 0,
    multiply: 0,
    division: 0,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NUMBER_CHANGED:
      return { ...state, number: action.payload };

    case actionTypes.SUBMITTED:
      return { ...state, number: 0, numberList: [...state.numberList, action.payload] };

    case actionTypes.ADDED:
      return { ...state, result: { ...state.result, sum: action.payload } };

    case actionTypes.SUBTRACTED:
      return { ...state, result: { ...state.result, subtract: action.payload } };

    case actionTypes.MULTIPLIED:
      return { ...state, result: { ...state.result, multiply: action.payload } };

    case actionTypes.DIVIDED:
      return { ...state, result: { ...state.result, division: action.payload } };

    default:
      return state;
  }
};
