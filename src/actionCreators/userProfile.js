import * as userProfile from '@/constants/userProfile'

export const setProfile = (payload) => {
  return {
    type: userProfile.SET_PROFILE, 
    payload 
  }
}

export const updateBalance = balance => {
  return {
    type: userProfile.UPDATE_BALANCE,
    payload: { balance }
  }
}

export const updateTokens = tokens => {
  return {
    type: userProfile.UPDATE_TOKENS,
    payload: { tokens }
  }
}