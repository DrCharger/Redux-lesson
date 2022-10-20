import { createStore, combineReducers } from 'redux';
import userReducer from './users.reducer';
import counterReduser from './counter.reducer';

const appReducer = combineReducers({
  counter: counterReduser,
  users: userReducer,
});

const store = createStore(appReducer);

export default store;
