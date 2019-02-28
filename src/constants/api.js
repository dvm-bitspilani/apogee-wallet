import { WALLET_TOKEN } from "@/.env"

//Routes
export const API_ROOT = "http://139.59.64.214/wallet"
export const TICKET_MANAGER = "http://139.59.64.214/tickets-manager"

export const LOGIN = `${API_ROOT}/auth`

export const GET_VENDORS = `${API_ROOT}/vendor/`

export const GET_ORDERS = `${API_ROOT}/orders/`
export const PLACE_ORDER = `${API_ROOT}/orders/`

export const ADD_MONEY = `${API_ROOT}/monetary/add/swd`
export const TRANSFER_MONEY = `${API_ROOT}/monetary/transfer`

export const GET_MY_PROFSHOWS = `${TICKET_MANAGER}/tickets`
export const GET_ALL_PROFSHOWS = `${TICKET_MANAGER}/shows`
export const BUY_TICKETS = `${TICKET_MANAGER}/signup`

//Wallet
export { WALLET_TOKEN };

//LocalStorage Key
export const LOCALSTORAGE_LOGIN = "apooge-login"
