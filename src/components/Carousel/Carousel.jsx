import "./Carousel.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Carousel() {

  const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

  return (
    <Slider className="slider" {...settings}>
        <div>
            <picture>
                <source className="BannerPic" media="(min-width:800px)" srcSet="./images/Banner/shirts-large.jpeg"/>
                <source className="BannerPic" media="(max-width:800px)" srcSet="./images/Banner/shirts-small.jpeg"/>
                <img className="BannerPic" src="./images/shirts-large.jpeg"/>
            </picture>
        </div>
         <div>
            <picture>
                <source className="BannerPic" media="(min-width:800px)" srcSet="./images/Banner/caps-large.webp"/>
                <source className="BannerPic" media="(max-width:800px)" srcSet="./images/Banner/caps-small.webp"/>
                <img className="BannerPic" src="./images/caps-large.jpeg"/>
            </picture>
        </div>
        <div>
            <picture>
                <source className="BannerPic" media="(min-width:800px)" srcSet="./images/Banner/backpack-large.webp"/>
                <source className="BannerPic" media="(max-width:800px)" srcSet="./images/Banner/backpack-small.webp"/>
                <img className="BannerPic" src="./images/backpack-large.webp"/>
            </picture>
        </div>
        <div>
            <picture>
                <source className="BannerPic" media="(min-width:800px)" srcSet="./images/Banner/denim-large.webp"/>
                <source className="BannerPic" media="(max-width:800px)" srcSet="./images/Banner/denim-small.webp"/>
                <img className="BannerPic" src="./images/denim-large.jpeg"/>
            </picture>
        </div>
    </Slider>
  )
}

export default Carousel
