import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route index element ={<h1>HELLo</h1>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App
