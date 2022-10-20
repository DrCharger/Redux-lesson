export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART/DELETE_PRODUCT';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  };
};
export const removeProduct = id => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};
