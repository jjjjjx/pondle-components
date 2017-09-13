import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconArrowRight = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 28 53">
    <path d="M27.6 25.4L2.6.4C2-.1 1-.1.4.4s-.6 1.5 0 2.1l23.9 23.9-23.9 24c-.6.6-.6 1.5 0 2.1.3.4.7.5 1.1.5.4 0 .8-.1 1.1-.4l25-25c.5-.6.5-1.6 0-2.2z"/>
  </Icon>
);

IconArrowRight.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconArrowRight;
