import { FaBook, FaUsers } from "react-icons/fa";
import { TbCardsFilled } from "react-icons/tb";
import { GrDeliver } from "react-icons/gr";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const AdminHomeCard = () => {
    const axiosSecure = useAxios();

    const { data: stats } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/admin-stats");
            return res.data;
        }
    })

    return (
        <div className="grid gap-6 md:grid-cols-4 text-white">
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-purple-700 to-slate-200 rounded-md">
                <span className="text-4xl"><TbCardsFilled /></span>
                <div>
                    <h4 className="text-3xl font-bold ">{stats?.revenue}</h4>
                    <span className="capitalize text-lg">revenue</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-[#D1A054] to-slate-200 rounded-md">
                <span className="text-4xl"><FaUsers /></span>
                <div>
                    <h4 className="text-3xl font-bold ">{stats?.users}</h4>
                    <span className="capitalize text-lg">Customers</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-pink-700 to-slate-200 rounded-md">
                <span className="text-3xl"><FaBook /></span>
                <div>
                    <h4 className="text-3xl font-bold ">{stats?.menuItems}</h4>
                    <span className="capitalize text-lg">menus</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center items-center py-6 bg-gradient-to-r from-[#D1A054] to-slate-200 rounded-md">
                <span className="text-4xl"><GrDeliver /></span>
                <div>
                    <h4 className="text-3xl font-bold ">{stats?.orders}</h4>
                    <span className="capitalize text-lg">orders</span>
                </div>
            </div>
        </div>
    );
};

export default AdminHomeCard;