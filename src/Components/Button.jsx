import PropTypes from "prop-types";

const Button = ({text}) => {
  return (
    <button className="border-4 border-x-transparent border-t-transparent hover:border-x-inherit duration-500 capitalize rounded-md btn-xs sm:btn-sm md:btn-md lg:btn-lg">
      {text}
    </button>
  );
};

export default Button;
Button.propTypes = {
    text: PropTypes.string.isRequired,
}