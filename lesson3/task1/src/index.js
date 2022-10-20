import { decrement, increment, reset } from './counter.actions';
import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 76, name: 'Dimon' }));
store.dispatch(increment());
store.dispatch(addUser({ id: 77, name: 'Alena' }));
store.dispatch(increment());
store.dispatch(deleteUser(77));
store.dispatch(decrement());

store.dispatch(addUser({ id: 2, name: 'Nikite' }));
store.dispatch(increment());

store.dispatch(updateUser(76, { name: 'Dimon Nasa', age: 27 }));
store.dispatch(reset());
