import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";


const FoodCard2 = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  // Handle add to cart
  const handleAddtoCart = () => {
    if (user) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosInstance.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            text: "Successfully added to cart",
            timer: 2000,
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Yor are not logged in!",
        text: "Please login to add to cart.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center bg-base-200 pb-6">
      <figure className="relative w-full">
        <img className="h-56 w-full object-cover" src={image} alt="Image" />
        <span className="absolute top-4 right-4 bg-slate-800 p-2 text-white rounded">
          ${price}
        </span>
      </figure>
      <h3 className="font-bold text-center my-4">{name}</h3>
      <p className="text-center flex-grow">{recipe}</p>
      <button
        onClick={() => handleAddtoCart()}
        className="w-fit mt-4 border-4 border-[#BB8506] border-x-transparent border-t-transparent hover:bg-black duration-500 capitalize rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg text-[#BB8506]"
      >
        add to cart
      </button>
    </div>
  );
};

export default FoodCard2;
FoodCard2.propTypes = {
  item: PropTypes.object.isRequired,
};
