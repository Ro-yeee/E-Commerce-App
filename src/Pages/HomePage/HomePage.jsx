import { useEffect, useState } from "react"
import "./HomePage.css"
import { auth } from "../../FirebaseConfig"
import SideNav from "../../components/SideNav/SideNav"

function HomePage() {

    return (
        <div className="Home">
            <SideNav/>
            <h1>HOME</h1>
        </div>        
    )
}

export default HomePage
