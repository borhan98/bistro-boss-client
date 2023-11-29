import { FaBars, FaCalendar, FaHome, FaListUl, FaPaypal, FaShopify, FaShoppingCart, FaStar } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Sidebar = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from database
  const isAdmin = true;

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Bistro Boss</h2>
        <p>
          <small className="tracking-widest">Resturent</small>
        </p>
      </div>
      <ul className="menu menu-sm mt-3 space-y-2">
        <li>
          <NavLink to={"/dashboard/userHome"}>
            <FaHome /> User Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/reservation"}><FaCalendar /> Reservation</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/paymentHistory"}><FaPaypal /> Payment History</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/mycart"}><FaShoppingCart /> My Cart ({cart.length})</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/addReview"}><FaStar /> Add Review</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/myBooking"}><FaListUl /> My Booking</NavLink>
        </li>
        {/* Devider */}
        <div className="divider"></div>
        <li>
          <NavLink to={"/"}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            <FaBars /> Menu
          </NavLink>
        </li>
        <li>
          <NavLink to={"/ourshop"}>
            <FaShopify /> Shop
          </NavLink>
        </li>
        <li>
          <NavLink to={"/"}>
            <MdContactMail /> Contact
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
