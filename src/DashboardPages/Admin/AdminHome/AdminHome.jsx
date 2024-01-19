import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h3>
                <span className="capitalize">Hi, Welcome {user?.displayName ? user?.displayName : "back"} </span>
            </h3>
        </div>
    );
};

export default AdminHome;