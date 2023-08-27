import { useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Shop.css"
import { ToastContainer } from "react-toastify"

function Shop() {

  const products = useSelector(state => state.products)

  return (
    <div className="Shop">
        <SideNav/>
        <div className="ShopContainer">
            {
                products.all.map(ele =>(
                    <div className="picccs">
                       <img src={ele.picture} alt=""/>
                    </div>
                ))
            }
        </div>
        <ToastContainer />
    </div>
  )
}

export default Shop
