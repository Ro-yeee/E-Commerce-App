import { useEffect, useState } from "react"
import "./HomePage.css"
import { auth } from "../../FirebaseConfig"
import SideNav from "../../components/SideNav/SideNav"
import Carousel from "../../components/Carousel/Carousel"
import Ads from "../../components/Ads/Ads"

function HomePage() {

    return (
        <div className="Home">
            <SideNav/>
            <div className="HomeRightSection">
                <Carousel/>
                <div className="freeReturn">
                    <h2>FREE RETURNS ON ALL ORDERS</h2>
                </div>
                <Ads/>
            </div>
        </div>        
    )
}

export default HomePage
