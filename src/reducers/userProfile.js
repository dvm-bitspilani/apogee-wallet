import * as userProfile from '@/constants/userProfile'

const initialState = {
  qrCode: null,
  phone: null,
  occupation: null,
  userId: null,
  email: null,
  bitsianId: null,
  name: null,
  isBitsian: null
}

const reducer = (state = initialState, action) => {
  const { type } = action;
  if(type === userProfile.SET_PROFILE) {
    const {payload: { 
      qr_code: qrCode,
      phone,
      occupation, 
      user_id: userId, 
      email,
      bitsian_id: bitsianId,
      name, 
      isBitsian
    }} = action
    const newState =  {
      ...state,
      qrCode,
      phone,
      occupation,
      userId,
      email,
      bitsianId,
      name,
      isBitsian
    }
    console.log(newState)
    return newState;
  }
  return {
    ...state
  }
}

export {
  reducer as userProfile
}