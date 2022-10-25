import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import usersReducer from './users/users.reducer';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  users: usersReducer,
});

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(appReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
