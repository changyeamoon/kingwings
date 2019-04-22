import types from '../constants/actionTypes';

const initialState = {
  employees: [
    { id: 0, firstName: 'Chang', lastName: 'Moon', hourly: '7.50', position: 'Software Engineer' },
    { id: 1, firstName: 'Jackson', lastName: 'Moon', hourly: '17.50', position: 'Co-Owner' },
    { id: 2, firstName: 'Sang', lastName: 'Moon', hourly: '27.50', position: 'Owner' },
  ],
  schedule: { 1: [{ employeeId: 0, startTime: '12:00', endTime: '4:00' }] },
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default employeeReducer;
