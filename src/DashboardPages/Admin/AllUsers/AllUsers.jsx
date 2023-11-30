import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import User from "./User";

const AllUsers = () => {
  const axiosInstance = useAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle header={"manage all users"} subHeader={"all users"} />
      <div className="p-10 m-10 rounded-md bg-white">
        <div>
          <h3 className="text-xl font-bold">Total User: {users.length} </h3>
        </div>
        <table className="table mt-6">
          <thead>
            <tr className="bg-[#D1A054] text-white uppercase">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <User key={user._id} user={user} index={index} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
