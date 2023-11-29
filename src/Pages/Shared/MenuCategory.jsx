import { Link } from "react-router-dom";
import MenuItemCard from "../../Components/MenuItemCard";
import OrderButton from "../../Components/OrderButton";
import SectionTitle from "../../Components/SectionTitle";
import Cover from "./Cover";
import PropTypes from "prop-types";

const MenuCategory = ({ img, category, title, subTitle, items, header, subHeader }) => {
  return (
    <div>
      <Cover img={img} title={title} subTitle={subTitle} />
      {header && <SectionTitle header={header} subHeader={subHeader} />}
      <div className="container mx-auto grid gap-6 md:grid-cols-2 my-20">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="w-fit mx-auto">
        <Link to={`/shop/${category}`}>
          <OrderButton />
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
MenuCategory.propTypes = {
  img: PropTypes.string.isRequired,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  items: PropTypes.array.isRequired,
};
