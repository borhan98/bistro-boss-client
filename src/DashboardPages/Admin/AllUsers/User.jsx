import PropTypes from "prop-types";
import { RiDeleteBin6Line, RiUser3Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const User = ({ user, index, refetch }) => {
  const { name, email } = user;
  const axiosInstance = useAxios();

  // Handle make admin
  const handleMakeAdmin = (email) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.patch(`/users/admin/${email}`).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              text: `${name} is an Admin now`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Handle delete user
  const handleDeleteUser = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/users/${email}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {user?.role === "admin" ? (
          "Admin"
        ) : (
          <button
            onClick={() => handleMakeAdmin(email)}
            className="block text-xl p-2 bg-[#D1A054] w-fit text-white ml-auto"
          >
            <RiUser3Fill />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDeleteUser(email)}
          className="block text-xl p-2 bg-red-600 w-fit text-white ml-auto"
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default User;
User.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
