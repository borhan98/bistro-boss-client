import Cover from "../Shared/Cover";
import ourShopCoverImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import CategoryTab from "./CategoryTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        img={ourShopCoverImg}
        title="our shop"
        subTitle="Would you like to try a dish?"
      />
      <div className="container mx-auto my-20">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* Tabs */}
          <div className="w-fit mx-auto">
            <TabList className={"uppercase pb-10"}>
              <Tab>Salads</Tab>
              <Tab>Pizzas</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </TabList>
          </div>
          {/* Tab details */}
          <div>
            <TabPanel>
              <CategoryTab category={salads} />
            </TabPanel>
            <TabPanel>
              <CategoryTab category={pizzas} />
            </TabPanel>
            <TabPanel>
              <CategoryTab category={soups} />
            </TabPanel>
            <TabPanel>
              <CategoryTab category={desserts} />
            </TabPanel>
            <TabPanel>
              <CategoryTab category={drinks} />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
