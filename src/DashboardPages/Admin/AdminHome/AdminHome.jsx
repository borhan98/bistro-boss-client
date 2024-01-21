import useAuth from "../../../Hooks/useAuth";
import AdminHomeCard from "./AdminHomeCard";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div className="p-6">
            <h3>
                <span className="capitalize text-2xl font-medium mb-6 block">Hi, Welcome {user?.displayName ? user?.displayName : "back"} </span>
            </h3>
            <AdminHomeCard />
        </div>
    );
};

export default AdminHome;