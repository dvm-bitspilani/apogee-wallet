import * as userProfile from '@/constants/userProfile'

export const setProfile = (payload) => {
  return {
    type: userProfile.SET_PROFILE, 
    payload 
  }
}