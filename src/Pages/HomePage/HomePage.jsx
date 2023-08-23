import { useEffect, useState } from "react"
import "./HomePage.css"
import { auth } from "../../FirebaseConfig"
import SideNav from "../../components/SideNav/SideNav"

function HomePage() {

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
        <div className="Home">
            <SideNav/>
            <h1>HOME</h1>
        </div>        
    )
}

export default HomePage
