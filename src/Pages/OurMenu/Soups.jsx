import Cover from "../Shared/Cover";
import soupImage from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import MenuItemCard from "../../Components/MenuItemCard";
import OrderButton from "../../Components/OrderButton";

const Soups = () => {
  const [menu] = useMenu();
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={soupImage}
        title="Soups"
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <div className="container mx-auto grid gap-6 md:grid-cols-2 my-20">
        {soups.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <OrderButton />
      </div>
    </div>
  );
};

export default Soups;
