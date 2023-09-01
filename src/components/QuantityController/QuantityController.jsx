import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./QuantityController.css"
import { faCircleMinus ,faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux"
import { changeQuantity } from "../../slices/cart"
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../../FirebaseConfig"

function QuantityController({product}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const {id,name,qty,price,picture} = product

    const handleQtyControl = (type)=>{
        if(type === "decrease" && qty === 1 ) return
        else if(type === "decrease"){
            updateDoc(doc(db,"users",`${user.id}`),{
                cart : arrayRemove({
                    id,
                    name,
                    price,
                    picture,
                    qty
                })
            })
            .then(()=>{
                updateDoc(doc(db,"users",`${user.id}`),{
                    cart : arrayUnion({
                        id,
                        name,
                        price,
                        picture,
                        qty : qty - 1
                    })
                })
            })
            .then(()=>{
                dispatch(changeQuantity({id,type}))
            })
            .catch(error => console.log(error))
        }else{
            updateDoc(doc(db,"users",`${user.id}`),{
                cart : arrayRemove({
                    id,
                    name,
                    price,
                    picture,
                    qty
                })
            })
            .then(() =>{
                updateDoc(doc(db,"users",`${user.id}`),{
                    cart : arrayUnion({
                        id,
                        name,
                        price,
                        picture,
                        qty : qty + 1
                    })
                })
            })
            .then(()=>{
                dispatch(changeQuantity({id,type}))
            })
            .catch(error => console.log(error))
        }
    }

  return (
    <div className="quantityControl">
        <button onClick={()=>handleQtyControl("decrease")}>
            <FontAwesomeIcon className="quantityControlIcons" size="xl" icon={faCircleMinus}/>
        </button>
        <output>{qty}</output>
        <button onClick={()=>handleQtyControl("increase")}>
            <FontAwesomeIcon className="quantityControlIcons" size="xl" icon={faCirclePlus}/>
        </button>
    </div>
  )
}

export default QuantityController
