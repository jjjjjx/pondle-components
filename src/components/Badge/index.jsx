import React from "react";
import PropTypes from "prop-types";
import styles from "./Badge.css";
import cx from "classnames";
import classNamesBind from "classnames/bind";

const Badge = (props) => {
  const { children, round, backgroundColor, textColor, style, className, ...otherProps } = props;

  let moduleClassNames = classNamesBind.bind(styles);

  const classes = moduleClassNames({
    badge: true,
    round: round
  });

  const badgeStyles = {
    backgroundColor: backgroundColor,
    color: textColor,
    ...style
  };

  return (
    <span className={cx(classes, "pndl-badge", className)} style={badgeStyles} {...otherProps}>
      {children}
    </span>
  );
};

export default Badge;

Badge.propTypes = {
  round: PropTypes.bool, // Optional circular badge
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  style: PropTypes.object, // Custom styles object
  className: PropTypes.string // Optional class name
};

Badge.defaultProps = {
  backgroundColor: "#454747",
  textColor: "#fff"
}
