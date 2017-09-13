import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconDashboard = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M15.5 13H1V1h14.5v12zM3 11h10.5V3H3v8zm12.5 22H1V16h14.5v17zM3 31h10.5V18H3v13zm30-13H18.5V1H33v17zm-12.5-2H31V3H20.5v13zM33 33H18.5V21H33v12zm-12.5-2H31v-8H20.5v8z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconDashboard.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconDashboard;
