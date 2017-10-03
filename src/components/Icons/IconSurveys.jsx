import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

const IconSurveys = ({color, size, large}) => (
  <Icon color={color} size={size} large={large} viewBox="0 0 34 42.5">
    <path d="M16.9 12.2H9.4v-1h7.5v1zm-7.5 5h15.1v-1H9.4v1zm5 5h10.1v-1H14.4v1zm0 5h10.1v-1H14.4v1zm-5-12.5h15.1v-1H9.4v1zm1.9 7.3l-.7-.7-.7.7 1.4 1.4 2.4-2.4-.7-.7-1.7 1.7zm0 5l-.7-.7-.7.7 1.4 1.4 2.4-2.4-.7-.7-1.7 1.7zM28 5.7v27H6v-27h6.2V3.8h2.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5h2.2v1.8H28zM16.5 3.8c0 .2.1.3.1.3l.4.5.4-.4c.1-.1.1-.2.1-.3 0-.3-.2-.5-.5-.5s-.5.2-.5.4zm-2.3 3.9h5.5V5.8h-5.5v1.9zm11.8 0h-4.2v2h-9.5v-2H8v23h18v-23z"/>
    <text y="49" fontSize="5">Created by Lucas Almeida</text>
    <text y="54" fontSize="5">from the Noun Project</text>
  </Icon>
);

IconSurveys.propTypes = {
  color: PropTypes.string, // The fill color of the icon. If omitted, will default to the current text color
  size: PropTypes.number, // Size of the icon in rem units, defaults to 1
  large: PropTypes.bool, // Large icon (2rem)
}

export default IconSurveys;
