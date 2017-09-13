import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconSettings = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 24 30">
    <path d="M14.6 23.1H9.4l-.6-2.3c-.2-.1-.5-.2-.7-.3l-2 1.2L2.4 18l1.2-2c-.1-.2-.2-.5-.3-.7L1 14.6V9.3l2.3-.6c.1-.2.2-.5.3-.7L2.4 6l3.7-3.7 2 1.2c.2-.1.5-.2.7-.3L9.4.9h5.2l.6 2.3c.2.1.5.2.7.3l2-1.2L21.6 6l-1.2 2c.1.2.2.5.3.7l2.3.6v5.2l-2.3.6c-.1.2-.2.5-.3.7l1.2 2-3.7 3.7-2-1.2c-.2.1-.5.2-.7.3l-.6 2.5zm-3.7-2H13l.5-1.9.6-.2c.5-.1 1-.3 1.4-.6l.5-.3 1.7 1 1.5-1.5-1-1.7.3-.5c.2-.4.4-.9.6-1.4l.2-.6 1.9-.5V11l-1.9-.5-.4-.5c-.1-.5-.3-1-.6-1.4l-.3-.5 1-1.7L17.6 5 16 6l-.5-.3c-.4-.2-.9-.4-1.4-.6l-.6-.1-.5-2h-2.1l-.4 1.9-.6.2c-.5.1-.9.3-1.4.5l-.5.3-1.6-1-1.5 1.5 1 1.7-.3.5c-.2.3-.4.8-.5 1.3l-.2.5-1.9.5V13l1.9.5.2.5c.1.5.3 1 .6 1.4l.2.5-1 1.7 1.5 1.5 1.7-1 .5.3c.4.3.8.5 1.3.6l.6.2.4 1.9zm1.1-4.3c-2.6 0-4.8-2.1-4.8-4.8S9.4 7.2 12 7.2s4.8 2.1 4.8 4.8-2.2 4.8-4.8 4.8zm0-7.6c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconSettings.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconSettings;
