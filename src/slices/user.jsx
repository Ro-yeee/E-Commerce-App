import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        id: "",
        name: "",
        email: "",
        photo: ""
    },
    reducers:{
        LogIn: (state,action) =>{
            state.id = action.payload.id
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        LogOut: (state) =>{
            state.id = ""
            state.name = ""
            state.email = ""
            state.photo = ""
        }
    }
})


export const {LogIn,LogOut} = userSlice.actions
export default userSlice.reducer