import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconMessages = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M1 31V3h32v22H8.8L1 31zM3 5v22l5.1-4H31V5H3zm14 11.7c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zm0-3.5c-.4 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm-8 3.5c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zm0-3.5c-.4 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.4-.8-.8-.8zm16 3.5c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zm0-3.5c-.4 0-.8.3-.8.8s.3.8.8.8.8-.3.8-.8-.4-.8-.8-.8z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconMessages.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconMessages;
