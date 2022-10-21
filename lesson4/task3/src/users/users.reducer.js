import { users } from '../users/users';

const initialState = {
  usersList: users,
};

const usersReducer = (state = initialState) => state;

export default usersReducer;
