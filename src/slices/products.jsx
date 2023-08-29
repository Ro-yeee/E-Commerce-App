import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState:{
        all : [],
        featured : [],
        categories : []
    },
    reducers:{
        getProducts : (state,action) =>{
            state.all = action.payload.allProducts
            state.featured = action.payload.featured
            state.categories = action.payload.categories
        }
    }
})

export const {getProducts} = productSlice.actions

export default productSlice.reducer