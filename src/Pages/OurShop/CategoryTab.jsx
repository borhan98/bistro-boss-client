import FoodCard2 from "./FoodCard2";
import PropTypes from "prop-types";

const CategoryTab = ({ category }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {category.map((item) => (
        <FoodCard2 key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CategoryTab;
CategoryTab.propTypes = {
    category: PropTypes.array.isRequired,
}