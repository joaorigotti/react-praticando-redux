import actionTypes from './actionTypes';

const INITIAL_STATE = {
  number: 0,
  numberList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.NUMBER_CHANGED:
      return { ...state, number: action.payload };

    case actionTypes.APPLIED:
      return { number: 0, numberList: [...state.numberList, action.payload] };

    default:
      return state;
  }
};
