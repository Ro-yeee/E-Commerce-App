import { useEffect } from 'react'
import Cart from './Pages/Cart/Cart'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Shop from './Pages/Shop/Shop'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './FirebaseConfig'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn } from './slices/user'
import Product from './Pages/Product/Product'
import { getProducts } from './slices/products'
import PrivateRoutesForAuth from './PrivateRoutesForAuth'
import PrivateRoutesWithAuth from './PrivateRoutesWithAuth'


function App() {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  let all = []
  let caps = []
  let eyeware = []
  let featured = []

  const fetchProducts = () =>{
    getDocs(query(collection(db,"products")))
      .then(snapShot =>{
        snapShot.forEach(element =>{
          all = [...all , {id:element.id, ...element.data()}]
          switch(element.data().category){
              case "caps"     : caps = [...caps , {id:element.id , ...element.data()}]
                                break
              case "eyeware"  : eyeware = [...eyeware , {id:element.id, ...element.data()}]
                                break
          }
        })
        featured = all.filter(element => element.featured === true)
        dispatch(getProducts({
          all,
          caps,
          eyeware,
          featured
        }))
      })
      .catch(error => console.log(error))
  }

  useEffect(()=>{
    fetchProducts()
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
  },[])

  return (
    <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path="*" element={<Navigate to="/"/>} />  
        <Route path='/shop' element={<Shop/>}/>
        <Route element={<PrivateRoutesForAuth/>}>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
        </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Product/>}/>
    </Routes>
  )
}

export default App
