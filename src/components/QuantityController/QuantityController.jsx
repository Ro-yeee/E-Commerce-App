import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./QuantityController.css"
import { faCircleMinus ,faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { changeQuantity } from "../../slices/cart"

function QuantityController({id,quantity}) {

    const dispatch = useDispatch()

    const handleQtyControl = (type)=>{
        if(type === "decrease" && quantity === 1 ) return
        dispatch(changeQuantity({id,type}))
    }

  return (
    <div className="quantityControl">
        <button onClick={()=>handleQtyControl("decrease")}>
            <FontAwesomeIcon className="quantityControlIcons" size="xl" icon={faCircleMinus}/>
        </button>
        <output>{quantity}</output>
        <button onClick={()=>handleQtyControl("increase")}>
            <FontAwesomeIcon className="quantityControlIcons" size="xl" icon={faCirclePlus}/>
        </button>
    </div>
  )
}

export default QuantityController
