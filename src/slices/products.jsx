import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState:{
        all : [],
        caps : [],
        eyeware : [],
        featured : []
    },
    reducers:{
        getProducts : (state,action) =>{
            state.all = action.payload.all
            state.caps = action.payload.caps
            state.eyeware = action.payload.eyeware
            state.featured = action.payload.featured
        }
    }
})

export const {getProducts} = productSlice.actions

export default productSlice.reducer