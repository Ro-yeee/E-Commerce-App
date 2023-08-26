import SideNav from "../../components/SideNav/SideNav"
import "./Product.css"

function Product() {
  return (
    <div className="ProductPage">
        <SideNav/>
        <div className="ProductContainer">
            <div className="ProductImagesSection">
                <div className="mainImage" >
                    <img src="https://www.urbanmonkey.com/cdn/shop/products/um-archives-002-13.jpg?v=1678259456" alt="" />
                </div>
                <div className="allProductImages">
                    <div className="subImages">
                        <img src="https://www.urbanmonkey.com/cdn/shop/products/um-archives-002-13.jpg?v=1678259456" alt="" />
                    </div>
                    <div className="subImages">
                        <img src="https://www.urbanmonkey.com/cdn/shop/products/um-archives-002-01.jpg?v=1678259456" alt="" />
                    </div>
                    <div className="subImages">
                        <img src="https://www.urbanmonkey.com/cdn/shop/products/um-archives-002-02.jpg?v=1678259456" alt="" />
                    </div>
                    <div className="subImages">
                        <img src="https://www.urbanmonkey.com/cdn/shop/products/um-archives-002-03.jpg?v=1678259456" alt="" />
                    </div>
                </div>
            </div>
            <div className="ProdutDetailsSection">
                <h2>DESCRIPTION</h2>
                <p className="firstp">This classic combination of light blue denim and a beautiful tan suede brim is an Urban monkey signature. Featuring high defintion embroidery patches all over, this baseball cap is an ode to our sold out bestsellers. Featuring our iconic vintage designs from the past for an unexpected twist. This summer, go beyond your most-loved denim cap and try this fresh take.</p>
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
