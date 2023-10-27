import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn : sessionStorage.getItem("userLoggedIn") === 'true',userData: null},
  reducers: {
    login: (state,action)=>{
      state.isLoggedIn = true
      sessionStorage.setItem('userLoggedIn','true')
      state.userData = action.payload
      // localStorage.setItem("user_id",JSON.stringify(action.payload))
      
    },
    // socket:(state,action)=>{
    //        state.socket = action.payload

    // },
    userData: (state,action)=>{
      state.userData = action.payload
    },
    logout: (state) =>{
      state.isLoggedIn = false
      sessionStorage.setItem('userLoggedIn','false')
    }
  }
})

export const {login, logout,userData} = userSlice.actions
export default userSlice.reducer


