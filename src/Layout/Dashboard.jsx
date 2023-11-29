import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Shared/Sidebar";

const Dashboard = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-3 bg-[#D1A054] p-4 min-h-screen">
          <Sidebar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
