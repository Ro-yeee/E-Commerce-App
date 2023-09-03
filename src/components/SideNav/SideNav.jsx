import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faShop, faCartShopping, faRightFromBracket, faRightToBracket } from "@fortawesome/free-solid-svg-icons"
import "./SideNav.css"
import { Link,NavLink } from "react-router-dom"
import { auth } from "../../FirebaseConfig"
import { signOut } from "firebase/auth"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from "react-redux"
import { LogOut } from "../../slices/user"


function SideNav() {

    const currentUser = useSelector(state => state.user)
    const {total_qty} = useSelector(state => state.bag)
    const dispatch = useDispatch()

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
                <img src="../../images/bgg.png" alt="UM" />
            </div>
        </Link>
        { currentUser.isLoggedIn &&
        <div className="profile">
            <img src={currentUser.photo} alt="" />
            <span>{currentUser.name}</span>
        </div>
        }
        { currentUser.isLoggedIn &&
            <div onClick={logOut} className="sideLinks" style={{cursor:"pointer"}}>
                <FontAwesomeIcon className="icons" icon={faRightFromBracket} size="lg" />
                <span>Logout</span>
            </div>
        }
        { !currentUser.isLoggedIn &&
            <Link className="sideLinks" to="/login">
                <FontAwesomeIcon className="icons" icon={faRightToBracket} size="lg" />
                <span>Login</span>
            </Link>
        }
        <NavLink className={({isActive})=> isActive ? "linkActive sideLinks" : "sideLinks"} to="/">
            {({ isActive}) => (
                <>
                    <FontAwesomeIcon className={isActive ? "linkActive icons" : "icons"} icon={faHouse}  />
                    <span >Home</span>
                </>
            )}
        </NavLink>
        <NavLink className={({isActive})=> isActive ? "linkActive sideLinks" : "sideLinks"} to="/shop">
            {({isActive}) =>(
                <>
                    <FontAwesomeIcon className={isActive ? "linkActive icons" : "icons"} icon={faShop} />
                    <span>Shop</span>
                </>
            )}
        </NavLink>
        <NavLink className={({isActive})=> isActive ? "linkActive sideLinks" : "sideLinks"} to="/cart">
            {({isActive}) =>(
                <>
                    <FontAwesomeIcon className={isActive ? "linkActive icons" : "icons"} icon={faCartShopping} />
                    <span>Cart</span>
                    <span className="cartQty">{total_qty}</span>
                </>
            )}
        </NavLink>
        <div className="bottomLinks">
            <Link to="/">Help</Link>
            <Link to="/">Contact Us</Link>
        </div>
    </div>
  )
}

export default SideNav
