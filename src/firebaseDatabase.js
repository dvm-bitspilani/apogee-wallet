import firebase from "firebase/app"
import { updateBalance } from "@/actionCreators/userProfile"
import { updateOrderStatuses } from "@/actionCreators/orders"

export const setupRealtimeBalance = (isBitsian, id, dispatch) => {
  if (id === null || id === undefined) return;

  const pre = isBitsian ? 'bitsian' : 'participant'
  const userPath = `users/${pre} - ${id}`;
  const database = firebase.database();

  const balancePath = `${userPath}/total_balance`
  const balanceRef = database.ref(balancePath)
  balanceRef.on('value', snap => {
    const balance = snap.val()
    dispatch(updateBalance(balance));
  })
 
}

export const setupRealtimeOrders = (isBitsian, id, dispatch) => {
  if (id === null || id === undefined) return;

  const pre = isBitsian ? 'bitsian' : 'participant'
  const userPath = `users/${pre} - ${id}`;
  const database = firebase.database();

  console.log("here")
  const ordersPath = `${userPath}/orders`
  const ordersRef = database.ref(ordersPath)
  ordersRef.on('value', snap => {
    const statuses = snap.val()
    dispatch(updateOrderStatuses(statuses))
  })

}