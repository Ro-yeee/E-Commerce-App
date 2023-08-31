import { Link } from "react-router-dom"
import "./CartProductCard.css"
import QuantityController from "../QuantityController/QuantityController"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { removeItem } from "../../slices/cart"

function CartProductCard({products}) {

    const dispatch = useDispatch()

  return (
    <div className="CartProductCartContainer">
    {
        products.map(element =>(
            <div key={element.id} className="CartCard">
                <Link className="CartCardPic"  to={`/product/${element.id}`}>
                    <img src={`${element.picture}`} alt={`${element.name}`} />
                </Link>
                <div className="cartCardDetails">
                    <div className="ListCardDetails">
                        <div className="cartCardTop">
                            <h2 className="cartCardName">{element.name}</h2>
                            <p className="cartCardPrice">Rs. {element.price}</p>
                            <p className="cartCardPrice">Total : {element.price*element.qty}</p>
                        </div>
                        <div className="cartCardBottom">
                            <QuantityController id={element.id} quantity={element.qty}/>
                        </div>
                        <button 
                            className="trash"
                            onClick={()=>dispatch(removeItem({id:element.id}))}>
                            <FontAwesomeIcon icon={faTrash} size="xl"/>
                        </button>
                     </div>
                     <button 
                        className="removeBtn"
                        onClick={()=>dispatch(removeItem({id:element.id}))}>
                            Remove
                    </button>
                </div>                    
            </div>
        ))
    }
    </div>
  )
}

export default CartProductCard
