import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faShop, faCartShopping, faRightFromBracket, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import "./SideNav.css"
import { Link,NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { auth } from "../../FirebaseConfig"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux"
import { LogIn, LogOut } from "../../slices/user"


function SideNav() {

    const [use,setUse] = useState()
    const [pic,setPic] = useState("")

    const currentUser = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>(
        onAuthStateChanged(auth,(user)=>{
            if(user){
                dispatch(LogIn({
                    id : user.uid,
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                    })
                )
            }else{
                dispatch(LogOut())
            }
        })
    ),[])

    const notify = (message) =>{
        toast(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    const logOut = () =>{
        signOut(auth)
            .then(()=>{
                notify("You have been logged out")
                dispatch(LogOut())
            })
            .catch(error=>{
                notify(error.message)
            })
    }

  return (
    <div className="sideBar">
        <Link to="/">
            <div className="pagelogo">
                <div className="logoname">
                    <h1>Urban</h1>
                    <h1>Monkey</h1>
                </div>
                <img src="./images/bgg.png" alt="Urban Monkey" />
            </div>
        </Link>
        <div className="profile">
            <img src={currentUser.photo} alt="" />
            <span>{currentUser.name}</span>
        </div>
        { currentUser.id &&
            <Link onClick={logOut} className="sideLinks" to="/">
                <FontAwesomeIcon className="icons" icon={faRightFromBracket} size="lg" />
                <span>Logout</span>
            </Link>
        }
        { !currentUser.id &&
            <Link className="sideLinks" to="/login">
                <FontAwesomeIcon className="icons" icon={faRightToBracket} size="lg" />
                <span>Login</span>
            </Link>
        }
        <NavLink className={({isActive})=> isActive === true ? "linkActive sideLinks" : "sideLinks"} to="/">
            <FontAwesomeIcon className="icons" icon={faHouse}  />
            <span >Home</span>
        </NavLink>
        <NavLink className={({isActive})=> isActive === true ? "linkActive sideLinks" : "sideLinks"} to="/shop">
            <FontAwesomeIcon className="icons" icon={faShop} />
            <span>Shop</span>
        </NavLink>
        <NavLink className={({isActive})=> isActive === true ? "linkActive sideLinks" : "sideLinks"} to="/cart">
            <FontAwesomeIcon className="icons" icon={faCartShopping} />
            <span>Cart</span>
        </NavLink>
        <div className="bottomLinks">
            <Link to="/">Help</Link>
            <Link to="/">Contact Us</Link>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SideNav
