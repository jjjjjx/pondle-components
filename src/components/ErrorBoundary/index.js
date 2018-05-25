import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      error: error
    });
    if (this.props.onError) this.props.onError(error);
  }

  render() {
    const { hasError, error } = this.state;
    const { render } = this.props;

    if (hasError) {
      return render ? render(error) : (
        <div className={styles.container}>
          <h2>Something went wrong</h2>
          <p style={{fontStyle: "italic"}}>See browser console for more info.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  render: PropTypes.func, // A custom component to show when an error occurs within the error boundary. Receives the error object as a prop.
  onError: PropTypes.func // Optional function to call when an error occurs within the error boundary. Receives the error object as a parameter.
}
