import { useEffect } from 'react'
import Cart from './Pages/Cart/Cart'
import HomePage from './Pages/HomePage/HomePage'
import LoginPage from './Pages/LoginPage/LoginPage'
import Shop from './Pages/Shop/Shop'
import SignUpPage from './Pages/SignUpPage/SignUpPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './FirebaseConfig'
import { collection, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { LogIn } from './slices/user'
import Product from './Pages/Product/Product'
import { getProducts } from './slices/products'
import PrivateRoutesForAuth from './PrivateRoutesForAuth'
import PrivateRoutesWithAuth from './PrivateRoutesWithAuth'
import { getProd } from './slices/filters'
import { initializeCart } from './slices/cart'


function App() {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  let allProducts = []
  let featured = []
  let categories = []

  const fetchProducts = () =>{
    getDocs(query(collection(db,"products")))
      .then(snapShot =>{
        snapShot.forEach(element =>{
          allProducts = [...allProducts , {id:element.id, ...element.data()}]
        })
        featured = allProducts.filter(element => element.featured === true)
        categories = [ "all", ...new Set(allProducts.map(element => element.category)) ]
        dispatch(getProducts({
          allProducts,
          featured,
          categories
        }))
        dispatch(getProd(allProducts))
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
                            photo: user.photoURL,
                            cart: []
                        })
                    }else{
                        console.log("Already Exist")
                        dispatch(initializeCart(docSnap.data().cart))
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
