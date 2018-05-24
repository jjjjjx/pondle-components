import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { IconMoreVertical } from "../Icons";
import { Popover, Position } from '@blueprintjs/core';
import styles from "./Dashcard.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";

const Dashcard = (props) => {
  const { children, cardStyle, style, utils, className, ...otherProps } = props;

  let moduleClassNames = classNamesBind.bind(styles);

  const classes = moduleClassNames({
    wrapper: true,
    dark: cardStyle === "dark",
    empty: cardStyle === "empty",
    error: cardStyle === "error"
  });

  const pndlClassNames = cx(
    "pndl-dashcard",
    { "pndl-dashcard--dark": cardStyle === "dark" },
    { "pndl-dashcard--empty": cardStyle === "empty" },
    { "pndl-dashcard--error": cardStyle === "error" },
  );


  const Utils = () => {
    const buttonStyles = {
      background: "transparent",
      color: cardStyle === "dark" ? "white" : "#a9abad",
    };
    return (
      <Popover content={utils} position={Position.LEFT} className={cx(styles.utils, "pndl-dashcard__utils")}>
        <Button style={buttonStyles}><IconMoreVertical /></Button>
      </Popover>
    );
  };

  return (
    <div className={cx(classes, pndlClassNames, className)} style={style} {...otherProps}>
      { utils && <Utils /> }
      <div className={cx(styles.inner, "pndl-dashcard__inner")}>
        {props.children}
      </div>
    </div>
  );
};

export default Dashcard;

Dashcard.propTypes = {
  cardStyle: PropTypes.oneOf(["dark", "empty", "error"]), // Optional card types
  style: PropTypes.object, // Custom styles object
  utils: PropTypes.element, // Content to place inside the utilities popover. Use a react component.
};
