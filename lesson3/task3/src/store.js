import { createStore, combineReducers } from 'redux';
import userReducer from './user.reducer';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(appReducer);

export default store;
