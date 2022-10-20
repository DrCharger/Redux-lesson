export const ADD_USER = 'USERS/ADD_USER';
export const DELETE_USER = 'USERS/DELETE_USER';

export const setUser = userData => {
  return {
    type: ADD_USER,
    payload: {
      userData,
    },
  };
};

export const removeUser = () => {
  return {
    type: DELETE_USER,
  };
};
