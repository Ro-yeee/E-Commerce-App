import { Link } from "react-router-dom"
import "./ProductListView.css"

function ProductListView({products}) {
    return (
        <div className="ListContainer">
            {
                products.map(element =>(
                    <Link key={element.id} className="ListCard" to={`/product/${element.id}`}>
                        <div className="ListCardPic">
                            <img src={`${element.picture}`} alt={`${element.name}`} />
                        </div>
                        <div className="ListCardDetails">
                            <div className="cardTop">
                                <h2>{element.name}</h2>
                                <p>RS. {element.price}</p>
                            </div>
                            <div className="cardBottom">
                                <img src="../../images/CardMonkey.jpeg" alt="" />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
      )
}

export default ProductListView
