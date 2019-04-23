import types from '../constants/actionTypes';

const initialState = {
  items: [],
  totalItems: 0,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ITEM_ADD:
      console.log('add action.payload: ', action.payload);
      return { ...state };

    case types.ITEM_DELETE:
      console.log('delete action.payload: ', action.payload);
      return { ...state };

    default:
      return state;
  }
};

export default menuReducer;
