import { createStore } from 'redux';

const initialState = {
  // result: JSON.parse(`{"Iphone 12":64,"Samsung S20":-28,"OnePlus 8T":-36}`),
  result: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_RESULT":
      return {...state, result: action.payload};
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;