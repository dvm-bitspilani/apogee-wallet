import firebase from "firebase/app"
import { updateBalance } from "@/actionCreators/userProfile"

export const setupRealtimeDatabase = (isBitsian, id, dispatch) => {
  if (!id) return;

  const pre = isBitsian ? 'bitsian' : 'participant'
  const userPath = `users/${pre} - ${id}`;
  const database = firebase.database();

  const balancePath = `${userPath}/total_balance`
  const balanceRef = database.ref(balancePath)
  balanceRef.on('value', snap => {
    const balance = snap.val()
    dispatch(updateBalance(balance));
  })

  const ordersPath = `${userPath}/orders`
  const ordersRef = database.ref(ordersPath)
  ordersRef.on('value', snap => {
    const balance = snap.val()
    console.log(balance)
    // dispatch(updateBalance(balance));
  })
}