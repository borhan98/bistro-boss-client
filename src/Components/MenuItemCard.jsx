import PropTypes from "prop-types";

const MenuItemCard = ({item}) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="grid grid-cols-7 gap-4">
            <figure className="col-span-2">
                <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="Item Image" />
            </figure>
            <div className="col-span-4">
                <h4 className="text-xl font-medium">{name}--------</h4>
                <p className="text-sm md:text-base">{recipe}</p>
            </div>
            <p className="col-span-1 text-[#D99904]">${price}</p>
        </div>
    );
};

export default MenuItemCard;
MenuItemCard.propTypes = {
    item: PropTypes.object.isRequired,
}