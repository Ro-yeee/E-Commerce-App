import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './slices/user.jsx'
import productReducer from './slices/products.jsx'
import filterReducer from './slices/filters.jsx'
import cartReducer from './slices/cart.jsx'
import ScrollToTop from './ScrollToTop.jsx'

const store = configureStore({
  reducer: {
    user : userReducer,
    products : productReducer,
    filters : filterReducer,
    bag : cartReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Provider store={store}>
        <ScrollToTop/>
        <Routes>
          <Route path='*' element={<App/>}/>
        </Routes>
      </Provider>
    </Router>
)
