import Slider from "react-slick";
import "./Collaborations.css"

function Collaborations() {

    const settings = {
        infinite:true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 745,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    
    return (
        <div className="Collaborations">
            <h3 className="collabHeading">OUR COLLABORATIONS</h3>
            <Slider className="CollaborationSlider" {...settings}>
                <div className="CollabPicWrapper">
                    <img src="./images/Collabs/monkey1.svg" alt="" />
                </div>
                <div className="CollabPicWrapper">
                    <img src="./images/Collabs/monkey2.svg" alt="" />
                </div>
                <div className="CollabPicWrapper">
                    <img src="./images/Collabs/monkey3.svg" alt="" />
                </div>
                <div className="CollabPicWrapper">
                    <img src="./images/Collabs/monkey4.svg" alt="" />
                </div>
                <div className="CollabPicWrapper">
                    <img src="./images/Collabs/monkey5.svg" alt="" />
                </div>
            </Slider>
        </div>
  )
}

export default Collaborations
