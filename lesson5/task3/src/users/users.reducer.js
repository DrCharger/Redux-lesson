import users from './usersData';
import { FILTERED } from './users.actions';

const initialState = {
  filterText: '',
  usersList: users,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED:
      return {
        ...state,
        filterText: action.payload.event.target.value,
      };
    default:
      return state;
  }
};

export default usersReducer;
