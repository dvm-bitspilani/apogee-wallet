import { WALLET_TOKEN } from "@/.env"

//Routes
export const API_ROOT = "http://139.59.64.214/wallet"
export const TICKET_MANAGER = "http://139.59.64.214/tickets-manager"

export const OUTSTATION_LOGIN = `${API_ROOT}/auth`
export const GET_VENDORS = `${API_ROOT}/vendor/`

export const GET_ORDERS = `${API_ROOT}/orders/`
export const PLACE_ORDER = `${API_ROOT}/orders/`

export const TRANSFER_MONEY = `${API_ROOT}/monetary/transfer`

export const GET_MY_PROFSHOWS = `${TICKET_MANAGER}/tickets`
export const GET_ALL_PROFSHOWS = `${TICKET_MANAGER}/shows`

//Wallet
export { WALLET_TOKEN };

//LocalStorage Key
export const LOCALSTORAGE_LOGIN = "apooge-login"
