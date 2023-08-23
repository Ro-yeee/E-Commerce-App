import Cart from './Pages/Cart/Cart'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Shop from './Pages/Shop/Shop'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default App
