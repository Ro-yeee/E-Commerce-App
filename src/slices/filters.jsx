import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filteredProducts : [],
        allProducts : [],
        sorting_value : "",
        isGridView: true
    },
    reducers: {
        getProd: (state,action)=>{
            state.allProducts = action.payload.all
            state.filteredProducts = action.payload.all
        },
        setSorting: (state,action)=>{
            state.sorting_value = action.payload
        },
        Sort: (state)=>{
            switch(state.sorting_value){
                case "a-z" :  state.filteredProducts = state.allProducts.sort((a,b)=> a.name.localeCompare(b.name))
                              break
                case "z-a" :  state.filteredProducts = state.allProducts.sort((a,b)=> b.name.localeCompare(a.name))
                              break
                case "low-high" :  state.filteredProducts = state.allProducts.sort((a,b)=> a.price - b.price)
                                   break       
                case "high-low" :  state.filteredProducts = state.allProducts.sort((a,b)=> b.price - a.price)
                                   break        
            }
        },
        toggleView: (state)=>{
            state.isGridView = !state.isGridView
        }
    }
})

export const {setSorting,Sort,getProd,toggleView} = filterSlice.actions

export default filterSlice.reducer