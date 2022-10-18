import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 76, name: 'Dimon' }));
store.dispatch(addUser({ id: 77, name: 'Alena' }));
store.dispatch(deleteUser(77));

store.dispatch(addUser({ id: 2, name: 'Nikite' }));
store.dispatch(deleteUser(76));

console.log(store.getState());
