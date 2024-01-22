import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  currentUser: object
  accessToken: string
  isLogged: boolean
}

const initialState = { 
    currentUser: {},
    accessToken: '',
    isLogged: false
 } as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUser(state, action: PayloadAction<object>) {
      state.currentUser = action.payload
    },
    getAccessToken(state, action: PayloadAction<string>) {
        state.accessToken = action.payload
    },
    checkLogin(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload
    }
  },
})

export const { getCurrentUser, getAccessToken, checkLogin } = userSlice.actions
export default userSlice.reducer
