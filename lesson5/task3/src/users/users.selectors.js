import { createSelector } from 'reselect';

export const usersSelector = state => {
  return state.users.usersList;
};

export const filteredTextSelector = state => {
  return state.users.filterText;
};
export const selectedUsersSelector = createSelector(
  [usersSelector, filteredTextSelector],
  (allUsersList, text) => {
    return allUsersList.filter(
      user =>
        user.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
        ('' + user.age).indexOf(text) > -1,
    );
  },
);
