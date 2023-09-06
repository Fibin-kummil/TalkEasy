import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn : sessionStorage.getItem("userLoggedIn") === 'true',userData: null},
  reducers: {
    login: (state,action)=>{
      state.isLoggedIn = true
      sessionStorage.setItem('userLoggedIn','true')
      state.userData = action.payload
      console.log(action.payload+"cc");
      localStorage.setItem("user_id",JSON.stringify(action.payload))
      
    },
    logout: (state) =>{
      state.isLoggedIn = false
      sessionStorage.setItem('userLoggedIn','false')
    }
  }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer


