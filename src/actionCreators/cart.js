import request from 'request'

import * as cart from '@/constants/cart'
import * as api from '@/constants/api'

export const addNewItemToCart = (stallName, stallId, itemName, itemId, price) => ({
  type: cart.ADD_TO_CART,
  stallName,
  stallId,
  itemName,
  itemId,
  price
});

export const addToCart = (stallName, stallId, itemName, itemId, price) => (dispatch, getState) => {
  let cart = getState().cart;

  if (cart[stallId] && cart[stallId].items[itemId]) {
    dispatch(increaseQty(stallId, itemId));
  }
  else {
    dispatch(addNewItemToCart(stallName, stallId, itemName, itemId, price));
  }
}

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

export const placeOrder = () => (dispatch, getState) => {
  let requestBody = {};
  let cart = getState().cart;

  Object.keys(cart).forEach(stallId => {
    requestBody[stallId] = {};
    Object.keys(cart[stallId].items).forEach(itemId => {
      requestBody[stallId][itemId] = cart[stallId].items[itemId].quantity;
    })
  })

  request({
    method: 'POST',
    url: api.PLACE_ORDER,
    body: JSON.stringify({orderdict: requestBody}),
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN, 
      'Authorization': `JWT ${getState().auth.JWT}`,
      'Access-Control-Allow-Origin' : '*'
    }}, (error, response, body) => {
      console.log(response);
      console.log(error);
      console.log(body);
  });
}
