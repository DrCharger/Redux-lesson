const userReducer = (state = { usersList: [] }, action) => {
  switch (action.type) {
    case ADDUSER:
      return {
        usersList: state.usersList.concat(user),
      };
  }
};
