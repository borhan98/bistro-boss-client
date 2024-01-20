import useAuth from "../../../Hooks/useAuth";
import HomeCard from "./UserHomeCard";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { TbTruckLoading } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className="p-6">
            <h3>
                <span className="capitalize text-2xl font-medium mb-6 block">Hi, Welcome {user?.displayName ? user?.displayName : "back"} </span>
            </h3>
            <HomeCard />
            <div className="grid md:grid-cols-2 mt-6">
                <div className="w-full h-96 rounded-l-md bg-[#f7d3ea] border-r-2 border-[#D1A054] flex flex-col gap-6 justify-center items-center">
                    <figure>
                        <img className="w-40 h-40 rounded-full" src="https://i.ibb.co/fCZ6h1x/Borhan-Uddin.jpg" alt="" />
                    </figure>
                    <h3 className="text-3xl font-medium">Borhan Uddin</h3>
                </div>
                <div className="w-full h-96 rounded-r-md bg-[#d19f5466] flex flex-col justify-center px-10">
                    <h4 className="text-xl capitalize">Your activities</h4>
                    <ul>
                        <li className="flex gap-2 items-center">
                            <span><FaShoppingCart /></span>
                            <span>Orders: {6}</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span><FaStar /></span>
                            <span>Reviews: {6}</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span><TbTruckLoading /></span>
                            <span>bookings: {6}</span>
                        </li>
                        <li className="flex gap-2 items-center">
                            <span><MdOutlinePayments /></span>
                            <span>Payment: {6}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;