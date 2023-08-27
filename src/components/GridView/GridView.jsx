import { Link } from "react-router-dom"
import "./GridView.css"

function GridView({products}) {
 
  return (
    <div className="GridContainer">
        {
            products.map(element =>(
                <Link key={element.id} className="GridCard" to={`/product/${element.id}`}>
                    <div className="CardPic">
                        <img src={`${element.picture}`} alt={`${element.name}`} />
                    </div>
                    <div className="CardDetails">
                        <h4>{element.name}</h4>
                        <p>RS. {element.price}</p>
                    </div>
                </Link>
            ))
        }
    </div>
  )
}

export default GridView
