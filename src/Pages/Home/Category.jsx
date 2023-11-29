import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slideImage1 from "../../assets/home/slide1.jpg";
import slideImage2 from "../../assets/home/slide2.jpg";
import slideImage3 from "../../assets/home/slide3.jpg";
import slideImage4 from "../../assets/home/slide4.jpg";
import slideImage5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Components/SectionTitle";

const Category = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle
        header={"order online"}
        subHeader={"from 11:00am to 10:00pm"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage1} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              Salads
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage2} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              Pizzas
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage3} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              soups
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage4} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              desserts
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage5} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              Salads
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage2} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              pizzas
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage3} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              soups
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage4} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              desserts
            </h2>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative">
            <img src={slideImage5} alt="Slide image" />
            <h2 className="absolute bottom-10 text-center w-full text-4xl text-white uppercase">
              Salads
            </h2>
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
