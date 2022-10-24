import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import counterReducer from './counter/counter.reducers';

const appReducer = combineReducers({
  users: usersReducer,
  currentPage: counterReducer,
});

const store = createStore(appReducer);

export default store;
