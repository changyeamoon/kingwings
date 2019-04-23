import { combineReducers } from 'redux';

import menuReducer from './menuReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  menu: menuReducer,
  employee: employeeReducer,
});
