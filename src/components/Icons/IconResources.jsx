import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconResources = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 24 30">
    <path d="M20.4 2.7c-2.1-2.1-5.6-2.1-7.8 0l-9.7 9.7 1.3 1.3L13.9 4c.7-.7 1.6-1.1 2.6-1.1s1.9.4 2.6 1.1c.7.7 1.1 1.6 1.1 2.6s-.4 1.9-1.1 2.6L7.8 20.4c-.9.9-2.3.9-3.2 0s-.9-2.3 0-3.2L15.2 6.6c.4-.4.9-.4 1.3 0 .2.2.3.4.3.6s-.1.5-.3.6L5.9 18.5l1.3 1.3L17.8 9.2c.5-.5.8-1.2.8-1.9s-.3-1.4-.8-1.9c-1.1-1.1-2.8-1.1-3.9 0L3.3 15.9c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.9 1.2 2.9 1.2s2.1-.4 2.9-1.2l11.3-11.3c2.1-2.1 2.1-5.6 0-7.7z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconResources.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconResources;
