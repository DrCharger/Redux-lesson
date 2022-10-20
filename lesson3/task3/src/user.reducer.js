import { ADD_USER, DELETE_USER } from './users.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER:
      return action.payload.userData.name;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
