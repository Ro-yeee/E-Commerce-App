import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState:{
        all : [],
        caps : [],
        eyeware : []
    },
    reducers:{
        setProducts : (state,action) =>{
            state.all = action.payload.all
            state.caps = action.payload.caps
            state.eyeware = action.payload.eyeware
        }
    }
})

export const {setProducts} = productSlice.actions

export default productSlice.reducer