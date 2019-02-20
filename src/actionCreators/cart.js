import * as cart from '@/constants/cart'

export const addToCart = (stallName, stallId, itemName, itemId, price) => ({
  type: cart.ADD_TO_CART,
  stallName,
  stallId,
  itemName,
  itemId,
  price
});

export const increaseQty = (stallId, itemId) => ({
  type: cart.INC_QTY,
  stallId,
  itemId
});

export const decreaseQty = (stallId, itemId) => ({
  type: cart.DEC_QTY,
  stallId,
  itemId
});
