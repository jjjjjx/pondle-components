import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconLogout = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M11.7 14.6h15.1L25.1 13l2.1-2.1 5.1 5.1-5.1 5.2-2.1-2.1 1.7-1.6H11.7"/>
    <path d="M19.7 19.7v7.7H4.3V4.7h15.4v7.7h3V1.8H1.4v28.5h21.3V19.7"/>
  </Icon>
);

IconLogout.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconLogout;
