export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const CLEAR_CART = 'CLEAR_';
export const REMOVE = 'REMOVE';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_AMOUNT = 'GET_AMOUNT';

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
