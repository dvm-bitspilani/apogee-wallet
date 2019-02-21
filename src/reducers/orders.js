import * as orders from '@/constants/orders'

const initialState = {
  pastTransactions: []
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === orders.SET_PAST_TRANSACTIONS) {
    return {
      ...state,
      pastTransactions: action.payload
    }
  }
  return {
    ...state
  }
}

export {
  reducer as orders
}