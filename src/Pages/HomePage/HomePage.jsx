import "./HomePage.css"
import SideNav from "../../components/SideNav/SideNav"
import Carousel from "../../components/Carousel/Carousel"
import Ads from "../../components/Ads/Ads"
import { ToastContainer } from "react-toastify"
import Collaborations from "../../components/Collaborations/Collaborations"
import { Link } from "react-router-dom"

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
                <div className="Community">
                    <img src="./images/Community.png" alt="Our Community" />
                    <span>SINCE 2024</span>
                    <p>HELPING OUR COMMUNITY EXPLORE THEIR INNER STREET ARTIST</p>
                    <span>Our aim is to build the biggest self-sustaining community by empowering vari.0s artists and athletes.</span>
                    <Link to="/product">
                        Get Your Drip!
                    </Link>
                </div>
                <Collaborations/>
            </div>
            <ToastContainer />
        </div>        
    )
}

export default HomePage
