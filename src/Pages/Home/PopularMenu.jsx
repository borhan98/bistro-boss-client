import SectionTitle from "../../Components/SectionTitle";
import Button from "../../Components/Button";
import MenuItemCard from "../../Components/MenuItemCard";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <div className="container mx-auto">
      <SectionTitle header={"our popular Items"} subHeader={"check it out"} />
      <div className="grid gap-6 md:grid-cols-2">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="w-fit mx-auto mt-10">
        <Button text="View full menu" />
      </div>
    </div>
  );
};

export default PopularMenu;
