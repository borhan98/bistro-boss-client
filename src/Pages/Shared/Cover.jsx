import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax blur={{min: -20, max: 20 }} bgImage={img} strength={-200} >
      <div
        className={`relative h-[600px] bg-center flex flex-col justify-center items-center`}
        
      >
        <div className="absolute w-full h-full bg-[#000000] opacity-40"></div>
        <div className="absolute bg-[#0000008e] container mx-auto py-20 px-32 text-center text-white space-y-1">
          <h3 className="uppercase text-5xl font-medium">{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
Cover.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
