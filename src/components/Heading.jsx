import PropTypes from "prop-types";
const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-primary text-xl md:text-2xl lg:text-4xl font-semibold mb-4">
        {title}
      </h1>
      <p className="text-xs md:text-base text-gray-600 text-center font-normal">
        {subtitle}
      </p>
    </div>
  );
};
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default Heading;
