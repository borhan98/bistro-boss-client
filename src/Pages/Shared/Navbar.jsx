import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [cart] = useCart();

  // Handle logout user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logged out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const menuLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/shop/salad">Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed z-10 w-full bg-[#0000008e] text-white">
      <div className="navbar px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/dashboard"}>
            <button className="btn btn-sm md:btn-md mr-2">Dash</button>
          </Link>

          <Link to={"/dashboard/mycart"}>
            <button className="btn btn-sm md:btn-md mr-2">
              <MdOutlineShoppingCart className="text-xl" />
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>

          {user ? (
            <button onClick={handleLogout} className="btn btn-sm md:btn-md">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-sm md:btn-md">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
