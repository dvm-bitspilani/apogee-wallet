import { WALLET_TOKEN } from "@/../.env"

//Routes
export const API_ROOT = "http://139.59.64.214/wallet"

export const OUTSTATION_LOGIN = `${API_ROOT}/auth`
export const GET_VENDORS = `${API_ROOT}/vendor/`

export const GET_ORDERS = `${API_ROOT}/orders/`
export const PLACE_ORDER = `${API_ROOT}/orders/`

//Wallet
export { WALLET_TOKEN };

//LocalStorage Key
export const LOCALSTORAGE_LOGIN = "apooge-login"
