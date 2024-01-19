import {
  FaBarcode,
  FaBars,
  FaCalendar,
  FaHome,
  FaListUl,
  FaPaypal,
  FaShopify,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

const Sidebar = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">Bistro Boss</h2>
        <p>
          <small className="tracking-widest">Resturent</small>
        </p>
      </div>
      <ul className="menu menu-sm mt-3 space-y-2">
        {isAdmin ? (
          <>
            <li>
              <NavLink to={"/dashboard/adminHome"}>
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/additem"}>
                <FaUtensils /> Add Item
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/manageitem"}>
                <FaBarcode /> Manage Iitems
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/bookings"}>
                <FaListUl /> Manage Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/allusers"}>
                <FaUsers /> All Users
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/dashboard/userHome"}>
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/Payment"}>
                <FaCalendar /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/paymentHistory"}>
                <FaPaypal /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/mycart"}>
                <FaShoppingCart /> My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addReview"}>
                <FaStar /> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/myBooking"}>
                <FaListUl /> My Booking
              </NavLink>
            </li>
          </>
        )}
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
          <NavLink to={"/shop/salad"}>
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
