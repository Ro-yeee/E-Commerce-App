import { useSelector } from "react-redux"
import SideNav from "../../components/SideNav/SideNav"
import "./Cart.css"

function Cart() {

    const bag = useSelector(state => state.bag)
    const {cart,total_qty,total_amt} = bag
    
  return (
    <div className="Cart">
        <SideNav/>
        <div className="CartContainer">
            {
                cart.map(el=>(
                    <>
                        { el.name}
                        <br />
                    </>
                   
                ))
            }
            {total_qty}
        </div>
    </div>
  )
}

export default Cart
