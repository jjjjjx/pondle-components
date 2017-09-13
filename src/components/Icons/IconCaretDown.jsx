import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconCaretDown = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 45 22">
    <path d="M0 0l22 22L45 0"/>
  </Icon>
);

IconCaretDown.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconCaretDown;
