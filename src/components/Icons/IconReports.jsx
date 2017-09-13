import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconReports = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M30.5 1h-22v5h-5v27h22v-5h5V1zm-7 30h-18V8h3v20h15v3zm5-5h-18V3h18v23zm-11.3-4.2H12v-1h4.5l1.1-2.5 2 3.4 2.7-5 1.4 4.1H27v1h-4l-.9-2.6-2.4 4.5-1.9-3.2-.6 1.3z"/>
    <path d="M19.6 5.1c-2.8 0-5.3 2.2-5.3 5.1s2.3 5.3 5.3 5.3c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zm0 9.1c-2.2 0-4-1.9-4-4s1.7-4.1 4-4.1c.6 0 1.1.1 1.6.4l-2.6 4.1 4.7 1.1c-.6 1.5-2.1 2.5-3.7 2.5zm1-4.4l1.7-2.6c.7.7 1.2 1.9 1.2 3v.4l-2.9-.8z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconReports.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconReports;
