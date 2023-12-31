import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../DashboardPages/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../DashboardPages/Admin/AllUsers/AllUsers";
import AddItem from "../DashboardPages/Admin/AddItem/AddItem";
import AdminRoute from "./AdminRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "menu",
                element: <OurMenu />
            },
            {
                path: "shop/:category",
                element: <OurShop />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart />
            },

            // Addmin routes
            {
                path: "allusers",
                element: <AllUsers />
            },
            {
                path: "additem",
                element: <AdminRoute><AddItem /></AdminRoute>
            },
        ]
    }
])