import { useParams } from "react-router"
import SideNav from "../../components/SideNav/SideNav"
import "./Product.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

function Product() {

    const {id} = useParams()
    const product = useSelector(state => state.products.all)
    const requiredProduct = product.filter(element => element.id === id)
    
    const [item,setItem] = useState()

    useEffect(()=>{
        setItem(requiredProduct[0])
    },[requiredProduct])

  return (
    item &&
    <div className="ProductPage">
        <SideNav/>
        <div className="ProductContainer">
            <div className="ProductImagesSection">
                <div className="mainImage" >
                    <img src={`${item.picture}`} alt={`${item.name}`} />
                </div>
                <div className="allProductImages">
                    {
                        item.images.map((element, index) =>(
                            <div key={index} className="subImages">
                                <img src={`${element}`} alt={`${item.name}`} />
                             </div>
                        ))
                    }
                </div>
            </div>
            <div className="ProdutDetailsSection">
                <h2>DESCRIPTION</h2>
                <p className="firstp">{item.description}</p>
                <p>Genderless Apparel by Urban Monkey®</p>
                <div className="spantags">
                    <span>country of origin - China</span>
                    <span>imported by - Venture Innovations, Mumbai, Maharashtra</span>
                </div>
                <h2>CORE FEATURES</h2>
                <ul className="coreFeatures">
                    <li>
                        composition: denim + suede
                    </li>
                    <li>
                        design: all over embroidered patches
                    </li>
                    <li>
                        color: light blue denim + tan
                    </li>
                    <li>
                        style: baseball cap
                    </li>
                    <li>
                        fitting: one size fits most (adjustable strap - 53.5 to 59.5 cm)
                    </li>
                    <li>
                        warranty: 1 year stitching warranty
                    </li>
                </ul>
                <h2>SHIPPING & RETURNS</h2>
                <p className="firstp">We dispatch your order every day at 4 pm except on public holidays.</p>
                <p>After dispatch, it takes about:</p>
                <ul className="coreFeatures">
                    <li>2 to 5 working days for metro cities</li>
                    <li>4 to 7 working days for the rest of India.</li>
                </ul>
                <p>We ship your order from Mumbai, Maharashtra.</p>
                <p>Incase of return items must be returned in their original condition with our box + packaging + tags / labels as delivered to you, or it will not be accepted by our warehouse.</p>
                <p>Please check our returns policy for more details.</p>
                <br />
            </div>
        </div>
    </div>
  )
}

export default Product
