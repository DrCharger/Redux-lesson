import './index.scss';
import store, { increment, decrement, reset } from './store.js';

const resultElement = document.querySelector('.counter__result');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');
const resetButton = document.querySelector('[data-action="reset"]');

const onIncrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};

incrementButton.addEventListener('click', onIncrement);
decrementButton.addEventListener('click', onDecrement);
resetButton.addEventListener('click', onReset);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + Number(value), 0);
  const historyString = state.history.join('');
  resultElement.textContent =
    state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
