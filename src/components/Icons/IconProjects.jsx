import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconProjects = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 24 30">
    <path d="M23 13.5L20.5 1h-17L1 13.5V23h22v-9.5zM5.2 3h13.7L21 13.5H3.1L5.2 3zM21 21H3v-5.5h18V21z"/>
    <path d="M18 16.7h-2v1H8v-1H6v3h12M14.7 10.4H5.6l-.4 2h13.6l-.4-2M15.4 9.2h2.8l-.4-2H6.2l-.4 2h1.9M13.8 6.1h3.7l-.4-2H6.9l-.4 2h.4"/>
    <text y="39" fontSize="5">Created by Lucas Almeida</text>
    <text y="44" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconProjects.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconProjects;
