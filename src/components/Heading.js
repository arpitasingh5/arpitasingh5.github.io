import React from "react";
import PropTypes from "prop-types";

const Heading = ({ icon, title }) => {
  const Icon = icon;

  return (
    <div className="heading flex items-center pb-8">
      <Icon size="2.0rem" className="mr-2" />
      <h1 className="font-bold leading-none">{title}</h1>
    </div>
  );
};

Heading.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default Heading;
