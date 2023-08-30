import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "bag",
    initialState: {
        cart: [],
        total_qty: 0,
        total_amt: 0
    },
    reducers:{
        addToCart: (state,action)=>{
            state.cart = [...state.cart ,{  id: action.payload.id,  
                                            name: action.payload.name, 
                                            price: action.payload.price,
                                            picture: action.payload.picture,
                                            qty: 1
                                           }]
            state.total_qty = state.cart.reduce((a,b) => a + b.qty,0 )
        }, 
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer