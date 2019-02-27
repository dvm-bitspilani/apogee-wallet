import * as orders from '@/constants/orders'

const initialState = {
  pastTransactions: [],
  currentOrders: []
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === orders.SET_PAST_TRANSACTIONS) {
    return {
      ...state,
      pastTransactions: action.payload
    }
  }
  else if(type === orders.SET_CURRENT_ORDERS) {
    return {
      ...state,
      currentOrders: action.payload
    }
  }
  
  return {
    ...state
  }
}

export {
  reducer as orders
}