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
    // let ordersExtraData = {};
    // try {
    //   ordersExtraData = JSON.parse(body)
    // } catch (e) { }

    // for (const shell of orders) {
    //   try {
    //     const order = orders[shell]
    //     const shellId = Number(shell.splice(shell.indexOf(' - ') + 3))

    //     for(const item in order) {
    //       const itemStatus = order[item]
    //       const itemId = Number(item.splice(item.indexOf(' - ') + 3))
    //       const itemsData = 
    //         ordersExtraData.find(({id}) => id === shellId) //Find that shell
    //           .orders.find(({id}) => id === itemId)        //Find that order



    //     }

    //   } catch (e) {

    //   }
    // }
    if (!response) { }

    else if (response.statusCode === 200) {
      try {
        body = JSON.parse(body)
        console.log(body)
        const currentOrdersCode = [0, 1, 2];
        /*body = body.map(
          ({orders}) => orders.filter(
            ({status}) => currentOrdersCode.includes(status)))*/

        body = body.map(
          shell => ({
            ...shell,
            orders: shell.orders.filter(({status}) => currentOrdersCode.includes(status))
          })
        )
        console.log(body)
        dispatch(setCurrentOrders(body))
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