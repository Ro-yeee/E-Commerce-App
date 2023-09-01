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
        changeQuantity: (state,action)=>{
            if(action.payload.type === "increase"){
                state.cart = state.cart.map(item => item.id === action.payload.id ? {...item , qty: item.qty+1 } : item)
            }else{
                state.cart = state.cart.map(item => item.id === action.payload.id ? {...item , qty: item.qty-1 } : item)
            }
            state.total_qty = state.cart.reduce((a,b) => a + b.qty,0 )
        },
        initializeCart: (state,action)=>{
            state.cart = action.payload
            state.total_qty = state.cart.reduce((a,b) => a + b.qty,0)
        },
        removeItem: (state,account)=>{
            state.cart = state.cart.filter(item => item.id !== account.payload.id)
            state.total_qty = state.cart.reduce((a,b) => a + b.qty,0)
        },
        setTotalAmt: (state) =>{
            state.total_amt = state.cart.reduce((a,b) => a + (b.qty * b.price),0)
        },
        clearCart: (state) =>{
            state.cart = [],
            state.total_amt = 0,
            state.total_qty = 0
        } 
    }
})

export const {addToCart,initializeCart,changeQuantity,removeItem,setTotalAmt,clearCart} = cartSlice.actions

export default cartSlice.reducer