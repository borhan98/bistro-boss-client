import Cover from "../Shared/Cover";
import saladImage from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import MenuItemCard from "../../Components/MenuItemCard";
import OrderButton from "../../Components/OrderButton";

const Salads = () => {
  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover
        img={saladImage}
        title="salads"
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="container mx-auto grid gap-6 md:grid-cols-2 my-20">
        {salads.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <OrderButton />
      </div>
    </div>
  );
};

export default Salads;
