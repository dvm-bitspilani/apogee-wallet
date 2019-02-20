import * as cart from '@/constants/cart'

const initialState = {}

const reducer = (state = initialState, action) => {
  const { type } = action;

  if (type === cart.ADD_TO_CART) {
    let newState;
    if (state[action.stallId]) {
      newState = {
        ...state,
        [action.stallId]: {
          ...state[action.stallId],
          items: [
            {
              itemName: action.itemName,
              itemId: action.itemId,
              price: action.price
            },
            ...state[action.stallId].items.slice(0)
          ]
        }
      }
    }
    else {
      newState = {
        ...state,
        [action.stallId]: {
          stallName: action.stallName,
          items: [
            {
              itemName: action.itemName,
              itemId: action.itemId,
              price: action.price
            }
          ]
        }
      }
    }
    return newState;
  }

  return {
    ...state
  }
}

export {
  reducer as cart
}