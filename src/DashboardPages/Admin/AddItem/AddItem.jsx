import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAxios from "../../../Hooks/useAxios";

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosInstance = useAxios();

  // handle add item to database
  const onSubmit = async (data) => {
    // handle host image to imgbb
    const imageFile = { image: data.image[0] };
    const imageRes = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });

    // check if img successfully host to imgbb
    // then add new item to the database with POST API
    if (imageRes.data.success) {
        const newItem = {
            name: data.name,
            recipe: data.recipe,
            image: imageRes.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price)
        }
        const res = await axiosInstance.post("/menu", newItem);
        if (res.data.insertedId) {
            reset();
            toast.success("Successfully added the item", {
                style: {
                    background: "#000",
                    color: "#FFF"
                }
            })
        }
    }
  };

  return (
    <div>
      <SectionTitle header={"add an item"} subHeader={"what's new"} />
      <div className="p-10 m-10 rounded-md shadow-md drop-shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Recipe name */}
          <div>
            <label htmlFor="name">Recipe name</label>
            <input
              {...register("name", { required: true })}
              className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
              type="text"
              id="name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Category name */}
            <div>
              <label htmlFor="category">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                id="category"
              >
                <option disabled>Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soups</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* Price */}
            <div>
              <label htmlFor="price">Price</label>
              <input
                {...register("price", { required: true })}
                className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
                type="text"
                id="price"
              />
            </div>
          </div>
          {/* Recipe details */}
          <div>
            <label htmlFor="recipe">Recipe details</label>
            <textarea
              {...register("recipe", { required: true })}
              className="w-full py-1 md:py-3 px-2 md:px-4 focus:outline-none rounded-md"
              id="details"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          {/* File attached */}
          <div>
            <input type="file" {...register("image", { required: true })} />
          </div>
          {/* Add Item button */}
          <div>
            <button
              type="submit"
              className={
                "flex items-center bg-[#D1A054] capitalize text-white text-lg tracking-wider font-medium py-1 md:py-3 px-2 md:px-4 mt-6 focus:outline-none rounded-md"
              }
            >
              add item <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
