import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconProfile = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M17 15.5c4 0 7.2-3.3 7.2-7.2S21 1 17 1 9.8 4.3 9.8 8.2s3.2 7.3 7.2 7.3zM17 16C9.6 16 3.5 23.2 3.5 32v1h27v-1c0-8.8-6.1-16-13.5-16z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconProfile.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconProfile;
