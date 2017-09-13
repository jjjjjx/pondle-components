import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconArrowLeft = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 28 53">
    <path d="M.4 27.6l25 25c.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1l-23.9-24 24-23.9c.6-.6.6-1.5 0-2.1-.3-.3-.7-.5-1.1-.5s-.8.1-1.1.4l-25 25c-.5.6-.5 1.6 0 2.2z"/>
  </Icon>
);

IconArrowLeft.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconArrowLeft;
