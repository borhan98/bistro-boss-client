import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slideImage1 from "../../assets/home/01.jpg";
import slideImage2 from "../../assets/home/02.jpg";
import slideImage3 from "../../assets/home/03.png";
import slideImage4 from "../../assets/home/04.jpg";
import slideImage5 from "../../assets/home/05.png";
import slideImage6 from "../../assets/home/06.png";

const Banner = () => {
  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={true} interval={2000} transitionTime={1000}>
        <div>
          <img src={slideImage1} />
        </div>
        <div>
          <img src={slideImage2} />
        </div>
        <div>
          <img src={slideImage3} />
        </div>
        <div>
          <img src={slideImage4} />
        </div>
        <div>
          <img src={slideImage5} />
        </div>
        <div>
          <img src={slideImage6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
