import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noNavFoot =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {!noNavFoot && <Navbar />}
      <Outlet />
      {!noNavFoot && <Footer />}
    </div>
  );
};

export default Main;
