import { Link } from "react-router-dom"
import "./CartProductCard.css"
import QuantityController from "../QuantityController/QuantityController"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../slices/cart"
import { arrayRemove, doc, updateDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"

function CartProductCard({products}) {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleRemove = (product) =>{
        if(user.isLoggedIn){
            updateDoc(doc(db,"users",`${user.id}`),{
                cart : arrayRemove({
                    id : product.id,
                    name : product.name,
                    picture: product.picture,
                    price: product.price,
                    qty: product.qty 
                })
            })
            .then(() => {
                dispatch(removeItem({id:product.id}))
            })
            .catch(error => console.log(error))
        }else{
            dispatch(removeItem({id:product.id}))
        }
     
    }

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
                            <QuantityController product={element}/>
                        </div>
                        <button 
                            className="trash"
                            onClick={() => handleRemove(element)}>
                            <FontAwesomeIcon icon={faTrash} size="xl"/>
                        </button>
                     </div>
                     <button 
                        className="removeBtn"
                        onClick={() => handleRemove(element)}>
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


