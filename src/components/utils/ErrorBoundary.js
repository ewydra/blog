import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-wrapper">
          <h1 className="title">Something went wrong</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
