import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const CartItem = ({ item, index, refetch }) => {
  const { _id, image, name, price } = item;
  const axiosInstance = useAxios();

  const handleDelete = (id) => {
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
        axiosInstance.delete(`/carts/${id}`).then((res) => {
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
      <td>
        <img className="w-16" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="block text-xl p-2 bg-red-600 w-fit text-white ml-auto"
        >
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  refetch: PropTypes.func.isRequired,
};
