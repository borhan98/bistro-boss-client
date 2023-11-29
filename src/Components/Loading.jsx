import { CirclesWithBar } from "react-loader-spinner";
import PropTypes from "prop-types";

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    );
  }
};

export default Loading;
Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}