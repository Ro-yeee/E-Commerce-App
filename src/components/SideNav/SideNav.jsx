import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faShop, faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./SideNav.css"
import { Link,NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { auth } from "../../FirebaseConfig"



function SideNav() {

    const [use,setUse] = useState("")
    const [pic,setPic] = useState("")
    useEffect(()=>(
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log(user)
                setUse(user.displayName)
                setPic(user.photoURL)
                console.log(use)
            }
        })
    ),[])

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
            <img src={pic} alt="" />
            <span>{use}</span>
        </div>
        <NavLink className={({isActive})=> isActive === true ? "linkActive sideLinks" : "sideLinks"} to="/">
            <FontAwesomeIcon className="icons" icon={faHouse} />
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
    </div>
  )
}

export default SideNav
