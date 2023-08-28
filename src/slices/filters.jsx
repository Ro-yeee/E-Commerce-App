import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        filteredProducts : [],
        allProducts : [],
        sorting_value : "",
        isGridView: true,
        query: ""
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
        setGridView: (state)=>{
            state.isGridView = true
        },
        setListView: (state)=>{
            state.isGridView = false
        },
        setQuery: (state,action)=>{
            state.query = action.payload.toLowerCase()
        },
        Search: (state)=>{
            state.filteredProducts = state.allProducts.filter(element => (
                element.name.toLowerCase().includes(state.query) || element.category.toLowerCase().includes(state.query) || element.type.toLowerCase().includes(state.query)
            ))
        }
    }
})

export const {setSorting,Sort,getProd,setGridView,setListView,setQuery,Search} = filterSlice.actions

export default filterSlice.reducer