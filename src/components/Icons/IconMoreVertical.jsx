import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconMoreVertical = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 33 133">
    <circle cx="16.5" cy="16.5" r="16.5"/>
    <circle cx="16.5" cy="66.5" r="16.5"/>
    <circle cx="16.5" cy="116.5" r="16.5"/>
  </Icon>
);

IconMoreVertical.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconMoreVertical;
