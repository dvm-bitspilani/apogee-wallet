import * as cart from '@/constants/cart'

export const addToCart = (stallName, stallId, itemName, itemId, price) => ({
  type: cart.ADD_TO_CART,
  stallName,
  stallId,
  itemName,
  itemId,
  price
});

// export const increaseQty = (stallName, stallId, )
