import { Helmet } from "react-helmet-async";
import offerBanner from "../../assets/menu/banner3.jpg";
import dessertBanner from "../../assets/menu/dessert-bg.jpeg";
import pizzaBanner from "../../assets/menu/pizza-bg.jpg";
import saladBanner from "../../assets/menu/salad-bg.jpg";
import soupBanner from "../../assets/menu/soup-bg.jpg";
import MenuCategory from "../Shared/MenuCategory";
import useMenu from "../../Hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  // console.log(menu);
  const offers = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      {/* Today's offer */}
      <MenuCategory
        items={offers}
        img={offerBanner}
        title={"our menu"}
        subTitle={"Would you like to try a dish?"}
        header="today's offer"
        subHeader="don't miss"
      />
      {/* Dessert offer */}
      <MenuCategory
        items={desserts}
        category={"dessert"}
        img={dessertBanner}
        title={"desserts"}
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Pizza offer */}
      <MenuCategory
        items={pizzas}
        category={"pizza"}
        img={pizzaBanner}
        title={"pizzas"}
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Salad offer */}
      <MenuCategory
        items={salads}
        category={"salad"}
        img={saladBanner}
        title={"salads"}
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      {/* Soup offer */}
      <MenuCategory
        items={soups}
        category={"soups"}
        img={soupBanner}
        title={"soups"}
        subTitle="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </div>
  );
};

export default OurMenu;
