import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconPeople = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M21.1 7.5l.7-1.9c4.5 1.7 7.7 5.6 8.5 10.3l-2 .3c-.7-3.9-3.4-7.3-7.2-8.7zM31 27v1H20.7v-1c0-2.5 1.3-4.6 3.2-5.5-.7-.6-1.1-1.4-1.1-2.4 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1-.4 1.8-1.1 2.4 1.8.9 3.1 3 3.1 5.5zm-6.3-7.9c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1c-.6 0-1.1.5-1.1 1.1zm4.2 6.9c-.4-1.7-1.6-3-3.1-3s-2.7 1.3-3.1 3h6.2zM15 7.7c-.7-.6-1.1-1.4-1.1-2.4 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1-.4 1.8-1.1 2.4 1.9.9 3.2 3 3.2 5.5v1H11.8v-1c0-2.4 1.4-4.6 3.2-5.5zm.9-2.4c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1c-.6 0-1.1.5-1.1 1.1zm-2 6.9H20c-.4-1.7-1.6-3-3.1-3s-2.6 1.3-3 3zm-1-4.7l-.7-1.9C7.8 7.3 4.5 11.3 3.7 16l2 .3c.7-4 3.4-7.4 7.2-8.8zM17 29.8c-1.8 0-3.4-.4-5-1.1l-.9 1.8c1.8.9 3.8 1.4 5.9 1.4 2.1 0 4-.5 5.9-1.4l-.9-1.9c-1.6.8-3.2 1.2-5 1.2zM13.3 28H3v-1c0-2.5 1.3-4.6 3.2-5.5-.7-.6-1.1-1.4-1.1-2.4 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1c0 1-.4 1.8-1.1 2.4 1.9.9 3.2 3 3.2 5.5v1zm-6.2-8.9c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1S8.8 18 8.2 18c-.6 0-1.1.5-1.1 1.1zm4.1 6.9c-.4-1.7-1.6-3-3.1-3S5.4 24.3 5 26h6.2z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconPeople.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconPeople;
