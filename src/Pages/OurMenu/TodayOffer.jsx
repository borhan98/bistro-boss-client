import MenuItemCard from "../../Components/MenuItemCard";
import OrderButton from "../../Components/OrderButton";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";

const TodayOffer = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div className="container mx-auto">
      <SectionTitle title={"today's offer"} subTitle={"Don't miss"} />
      <div className="grid gap-6 md:grid-cols-2 mb-20">
        {offered.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <OrderButton />
      </div>
    </div>
  );
};

export default TodayOffer;
