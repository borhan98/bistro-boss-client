import PropTypes from "prop-types";

const FoodCard = ({img}) => {
  return (
    <div className="flex flex-col items-center bg-base-200 pb-6">
      <figure className="w-full">
        <img
          className="h-56 w-full object-cover"
          src={img}
          alt="Image"
        />
      </figure>
      <h3 className="font-bold text-center my-4">Caeser Salad</h3>
      <p className="text-center">
        Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
      </p>
      <button className="w-fit border-4 border-[#BB8506] border-x-transparent border-t-transparent hover:bg-black duration-500 capitalize rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg text-[#BB8506]">
        add to cart
      </button>
    </div>
  );
};

export default FoodCard;
FoodCard.propTypes = {
    img: PropTypes.string.isRequired,
}