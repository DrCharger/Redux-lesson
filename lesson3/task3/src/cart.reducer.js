import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(prod => prod.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
