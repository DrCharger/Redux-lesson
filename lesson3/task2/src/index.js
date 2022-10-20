import store, { increment, decrement } from './counter';

store.subscribe(() => store.getState());

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
