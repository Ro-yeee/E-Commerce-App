import { Link } from "react-router-dom"
import "./CartProductCard.css"
import QuantityController from "../QuantityController/QuantityController"

function CartProductCard({products}) {
  return (
    <div className="CartProductCartContainer">
    {
        products.map(element =>(
            <div key={element.id} className="CartCard">
                <Link className="CartCardPic"  to={`/product/${element.id}`}>
                    <img src={`${element.picture}`} alt={`${element.name}`} />
                </Link>
                <div className="ListCardDetails">
                    <div className="cartCardTop">
                        <h2 className="cartCardName">{element.name}</h2>
                        <p className="cartCardPrice">Rs. {element.price}</p>
                        <p className="cartCardPrice">Total : {element.price*element.qty}</p>
                    </div>
                    <div className="cartCardBottom">
                        <QuantityController id={element.id} quantity={element.qty}/>
                    </div>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default CartProductCard
