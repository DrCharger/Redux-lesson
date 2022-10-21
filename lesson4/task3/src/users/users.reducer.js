import { users } from '../users/users';

const usersReducer = (state = users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
