import { useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Shop.css"
import { ToastContainer } from "react-toastify"
import ProductGridView from "../../components/ProductGridView/ProductGridView"

function Shop() {

  const products = useSelector(state => state.products.all)

  return (
    <div className="Shop">
        <SideNav/>
        <div className="ShopContainer">
            <div className="ShopControls">
                <div className="listBtns">
                    
                </div>
            </div>
            <ProductGridView products={products}/>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Shop
