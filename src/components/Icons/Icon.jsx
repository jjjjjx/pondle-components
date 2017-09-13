import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => {
  const { children, viewBox, color, size, large } = props;
  const iconSize = size ? `${size}rem` : "1rem";

  const style = {
    fill: color || "currentColor",
    // width: size === "large" ? "2rem" : "1rem",
    // height: size === "large" ? "2rem" : "1rem",
    width: large ? "2rem" : iconSize,
    height: large ? "2rem" : iconSize,
    display: "inline-block",
    verticalAlign: "middle"
  };

  return (
    <svg
      style={style}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg" >
      {children}
    </svg>
  );
};

Icon.propTypes = {
  viewBox: PropTypes.string.isRequired,
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
};

export default Icon;
