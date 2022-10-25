import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './counter/counter.reducers';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  counter: counterReducer,
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

const store = createStore(appReducer, composeEnhancers(applyMiddleware(logger)));

export default store;
