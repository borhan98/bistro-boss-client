import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../../Components/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/reviews")
      .then((res) => setReviews(res.data));
  }, [axiosInstance]);

  return (
    <div className="container mx-auto mb-20">
      <SectionTitle
        header={"testimonials"}
        subHeader={"What our clients say?"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="max-w-xl mx-auto flex gap-4 flex-col items-center text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <span className="text-5xl">
                <FaQuoteLeft />
              </span>
              <p>{review.details}</p>
              <h3 className="text-xl text-[#D99904] font-medium">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
