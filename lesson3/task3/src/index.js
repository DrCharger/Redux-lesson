import { setLanguage } from './language.actions';
import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => console.log(store.getState()));
store.dispatch(setLanguage('ua'));
store.dispatch(setUser({ name: 'Dima' }));

store.dispatch(addProduct({ id: 1, name: 'milk' }));
store.dispatch(addProduct({ id: 2, name: 'bread' }));
store.dispatch(addProduct({ id: 3, name: 'cheese' }));
store.dispatch(addProduct({ id: 4, name: 'water' }));
store.dispatch(removeProduct(2));
