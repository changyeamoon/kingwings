import types from '../constants/actionTypes';

const actions = {
  addItem(itemId) {
    return { type: types.ITEM_ADD, payload: itemId };
  },
  deleteItem(itemId) {
    return { type: types.ITEM_DELETE, payload: itemId };
  },
};

export default actions;
