import Button from "../../Components/Button";
import SectionTitle from "../../Components/SectionTitle";
import featureImage from "../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="relative h-[680px] featured-bg bg-fixed my-20">
      <div className="absolute top-0 left-0 w-full h-full bg-[#0000007f]"></div>
      <div className="absolute top-0 left-5 container mx-auto">
        <div className="py-1 text-white">
          <SectionTitle header={"Our featured menu"} subHeader={"check it out"} />
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-center bg-[#d999044e]">
          <figure>
            <img src={featureImage} alt="Featured Image" />
          </figure>
          <div className="space-y-3 text-white">
            <p>March 10, 2022</p>
            <h3>where can get some?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda sunt ad porro, tenetur in error. Incidunt quos eligendi
              voluptatum natus recusandae minus enim? Libero dignissimos
              recusandae, eaque eius deleniti accusantium!
            </p>
            <Button text="read more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
