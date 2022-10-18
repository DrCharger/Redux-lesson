export const addUser = obj => {
  return {
    type: 'ADD_USER',
    payload: obj,
  };
};

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    payload: id,
  };
};
