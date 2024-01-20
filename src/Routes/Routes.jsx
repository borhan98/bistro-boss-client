import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../DashboardPages/Admin/AllUsers/AllUsers";
import AddItem from "../DashboardPages/Admin/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import MyCart from "../DashboardPages/User/MyCart/MyCart";
import Payment from "../DashboardPages/User/Payment/Payment";
import AdminHome from "../DashboardPages/Admin/AdminHome/AdminHome";
import UserHome from "../DashboardPages/User/UserHome/UserHome";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "shop/:category",
        element: <OurShop />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // User routes
      {
        path: "userHome",
        element: <PrivateRoute><UserHome /></PrivateRoute>
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />
      },

      // Addmin routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: "allusers",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);
