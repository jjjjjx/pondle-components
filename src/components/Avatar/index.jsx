import React from "react";
import PropTypes from "prop-types";

const Avatar = (props) => {
  const { src, alt, size, ...otherProps } = props;

  const avatarStyles = {
    width: size,
    height: size,
    borderRadius: "50%",
  }

  return (
    <img
      style={avatarStyles}
      src={src}
      alt={alt}
      {...otherProps}
    />
  );
};

export default Avatar;

Avatar.propTypes = {
  src: PropTypes.string, // Image source
  alt: PropTypes.string, // Alternative text for the img
  size: PropTypes.number, // Diameter in px
};

Avatar.defaultProps = {
  src: "data:image/svg+xml;charset=UTF-8,%3csvg id='Layer_1' xmlns='http://www.w3.org/2000/svg' width='184' height='184' viewBox='0 0 184 184'%3e%3cstyle%3e .st0%7bfill:%23E1E1E1;%7d .st1%7bfill:%23FFFFFF;%7d %3c/style%3e%3cpath class='st0' d='M0 0h184v184H0z'/%3e%3cpath class='st1' d='M153.8 55.3c-5.9-4.4-11.4-8.8-13.9-12.3-2.5-3.4-5.1-11.4-13.2-12.7-8.1-1.2-18 .4-20.2 11.9s5.3 14.3 6.2 21.5c.9 7.2-5.6 8.4-13.1 8.1s-29-.3-43.3 10-33.7-5.1-33.7-5.1-.8 31.1 31.6 47.8c9.1 4.6 17.3 6.9 24.5 7.8.2 3.6.5 10.7-.1 14.2-.9 4.8-1.2 7.5 5.6 7.5h28.3s2.2-.3 2.2-2.3-3.9-2.2-3.9-2.2-20.2 2.2-24.5-8.7c0 0 .1-3.9.4-8 13.7-.2 21.9-5.3 21.9-5.3s24.9-10 34.5-29.9c9.6-19.9-4.2-31.1-4.2-31.1s-6.6-3.7-5-7.5c1.7-3.7 14.5 2.1 20.4 5 5.8 2.9 7.1-1.7 7.1-1.7s-1.6-2.7-7.6-7z'/%3e%3c/svg%3e",
  alt: "",
  size: 80,
};
