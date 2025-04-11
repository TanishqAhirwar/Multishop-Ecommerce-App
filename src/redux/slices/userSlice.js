import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState : {
        User : {},
        isLoggedIn : false

    },
    reducers : {
        loginUserdata : (state,action)=>{
          state.User = action.payload
          state.isLoggedIn = true
        },
        LogOut : (state,action)=>{
            state.User = {}
            state.isLoggedIn = false
        }
    }
});

export default userSlice.reducer;