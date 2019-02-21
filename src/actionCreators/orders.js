import request from 'request'

import * as orders from '@/constants/orders'
import * as api from '@/constants/api'

export const setPastTransactions = transactions => ({
  type: orders.SET_PAST_TRANSACTIONS,
  payload: transactions,
})

export const getPastTransactions = () => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_ORDERS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': 'samp1e_Token',
      'Authorization': `JWT ${getState().auth.JWT}`
    }
  }, (error, response, body) => {
    try {
      body = JSON.parse(body)
      const pastTransactionStatusCodes = [3, 4];
      body = body.filter(({ status }) => pastTransactionStatusCodes.includes(status))
      dispatch(setPastTransactions(body))
    } catch (e) { 
      console.log(e)
    }
  });
}