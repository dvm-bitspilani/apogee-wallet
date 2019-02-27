import request from 'request'

import * as orders from '@/constants/orders'
import * as api from '@/constants/api'
import { setupRealtimeOrders } from '@/firebaseDatabase'

export const setPastTransactions = transactions => ({
  type: orders.SET_PAST_TRANSACTIONS,
  payload: transactions,
})

// export const getPastTransactions = () => (dispatch, getState) => {
//   request({
//     method: 'GET',
//     url: api.GET_ORDERS,
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Wallet-Token': 'samp1e_Token',
//       'Authorization': `JWT ${getState().auth.JWT}`
//     }
//   }, (error, response, body) => {
//     try {
//       body = JSON.parse(body)
//       console.log(body);
//       const pastTransactionStatusCodes = [3, 4];
//       body = body.filter(({ status }) => pastTransactionStatusCodes.includes(status))
//       dispatch(setPastTransactions(body))
//     } catch (e) {
//       console.log(e)
//     }
//   });
// }

export const getCurrentOrders = orders => (dispatch, getState) => {
  request({
    method: 'GET',
    url: api.GET_ORDERS,
    headers: {
      'Content-Type': 'application/json',
      'X-Wallet-Token': api.WALLET_TOKEN,
      'Authorization': `JWT ${getState().auth.JWT}`
    }
  }, (error, response, body) => {
    if (!response) { }
    else if (response.statusCode === 200) {
      try {
        body = JSON.parse(body)
        console.log(body)
        // const currentOrdersCode = [0, 1, 2];
        
        // body = body.map(
        //   shell => ({
        //     ...shell,
        //     orders: shell.orders.filter(({status}) => currentOrdersCode.includes(status))
        //   })
        // )
        // console.log(body)
        dispatch(setCurrentOrders(body))
        setupRealtimeOrders(getState().userProfile.isBitsian, getState().userProfile.userId, dispatch);
      } catch (e) { }
    }

    else {
      try {
        body = JSON.parse(body)
      } catch (e) {

      }
    }
  });
}

export const setCurrentOrders = payload => ({
  type: orders.SET_CURRENT_ORDERS,
  payload
})

export const updateOrderStatuses = payload => ({
  type: orders.UPDATE_ORDER_STATUSES,
  payload
})