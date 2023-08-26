import { useEffect } from 'react'
import Cart from './Pages/Cart/Cart'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Shop from './Pages/Shop/Shop'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './FirebaseConfig'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn } from './slices/user'


function App() {

  const currentUser = useSelector(state => state.user)
    const dispatch = useDispatch()

  useEffect(()=>(
    onAuthStateChanged(auth,(user)=>{
        if(user){
            getDoc(doc(db,"users",`${user.uid}`))
                .then(docSnap =>{
                    if(!docSnap.exists()){
                        setDoc(doc(db,"users",`${user.uid}`),{
                            name: user.displayName,
                            email: user.email,
                            photo: user.photoURL
                        })
                    }else{
                        console.log("Already Exist")
                        //get The Data docSnap.data()
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
                dispatch(LogIn({
                    id : user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                    })
                ) 
        }
    })
  ),[])

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
