import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, current) => total + current.price, 0);

  return (
    <div>
      <SectionTitle header={"wanna add more?"} subHeader={"my cart"} />
      <div className="p-10 m-10 rounded-md bg-white">
        <div className="grid md:grid-cols-3 items-center">
          <h3 className="text-xl font-bold">Total Orders: {cart.length} </h3>
          <h3 className="text-xl font-bold">Total Price: {totalPrice} </h3>
          <div className="flex justify-end">
            <Link to={"/dashboard/payment"}>
              <button className={`p-2 justify-self-end rounded-md text-white bg-[#D1A054] w-fit text-lg font-bold ${cart.length ? "" : "bg-[#fbdbaa] cursor-not-allowed"}`} disabled={cart.length ? false : true}>
                Pay
              </button>
            </Link>
          </div>
        </div>
        <table className="table mt-6">
          <thead>
            <tr className="bg-[#D1A054] text-white uppercase">
              <th></th>
              <th>Item imgae</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <CartItem key={item._id} item={item} index={index} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
