import store, { increment, decrement, reset } from './store';
import './index.scss';

const counter = document.querySelector('.counter__result');
const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incBtn.addEventListener('click', onIncrement);
decBtn.addEventListener('click', onDecrement);
resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, elem) => acc + Number(elem), 0);
  const historyString = state.history.join('');
  counter.textContent = state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
