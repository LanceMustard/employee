import { FETCH_EMPLOYEE, FETCH_EMPLOYEES } from '../actions/index';

const INITIAL_STATE = { all: [], employee: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_EMPLOYEES:
      return { ...state, all: action.payload.data };
    case FETCH_EMPLOYEE:
      return { ...state, post: action.payload.data };
    default:
      return state;
  }
}