import store, { increment, decrement, reset } from './store';
import './index.scss';

const counter = document.querySelector('.counter__result');
const incBTN = document.querySelector('[data-action = "increment"]');
const decBTN = document.querySelector('[data-action = "decrement"]');
const resetBTN = document.querySelector('[data-action = "reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incBTN.addEventListener('click', onIncrement);
decBTN.addEventListener('click', onDecrement);
resetBTN.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, elem) => acc + Number(elem), 0);
  const historyString = state.history.reduce((acc, elem) => acc + elem, 0);
  counter.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
