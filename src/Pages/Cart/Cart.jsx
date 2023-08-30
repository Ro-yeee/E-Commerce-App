import { useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Cart.css"
import ProductListView from "../../components/ProductListView/ProductListView"
import CartProductCard from "../../components/CartProductCrad/CartProductCard"

function Cart() {

    const bag = useSelector(state => state.bag)
    const user = useSelector(state => state.user)
    const {cart,total_qty,total_amt} = bag
    
  return (
    <div className="Cart">
        <SideNav/>
        <div className="CartContainer">
            <h2 className="cartHeading">{user.name.split(" ")[0]}'s Cart ({total_qty} Items)</h2>
            <CartProductCard products={cart}/>
        </div>
    </div>
  )
}

export default Cart
