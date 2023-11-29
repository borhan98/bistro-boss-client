import FoodCard from "../../Components/FoodCard";
import SectionTitle from "../../Components/SectionTitle";
import recommendsImage1 from "../../assets/home/slide1.jpg";
import recommendsImage2 from "../../assets/home/slide2.jpg";
import recommendsImage3 from "../../assets/home/slide3.jpg";

const Recommends = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle header={"chef recommends"} subHeader={"Should Try"} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 1 */}
        <FoodCard img={recommendsImage1} />
        {/* 2 */}
        <FoodCard img={recommendsImage2} />
        {/* 3 */}
        <FoodCard img={recommendsImage3} />
      </div>
    </div>
  );
};

export default Recommends;
