import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './slices/user.jsx'

const store = configureStore({
  reducer: {
    user : userReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path='*' element={<App/>}/>
        </Routes>
      </Provider>
    </Router>
)
