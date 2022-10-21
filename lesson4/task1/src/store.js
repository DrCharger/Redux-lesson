import { createStore } from 'redux';
import counterReducer from './counter/counter.reducers';

const store = createStore(counterReducer);

export default store;
