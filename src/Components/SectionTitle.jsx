import PropTypes from "prop-types";

const SectionTitle = ({ header, subHeader }) => {
    return (
        <div className="space-y-2 w-fit text-center mx-auto mt-24 mb-10">
           <p className="text-[#D99904] capitalize">--- {subHeader} ---</p>
           <h3 className="text-4xl font-medium uppercase border-y-4 w-fit px-10 py-2">{header}</h3>
        </div>
    );
};

export default SectionTitle;
SectionTitle.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
}