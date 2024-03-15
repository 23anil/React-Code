import React, { Component } from "react";
import FallBack from "../components/FallBack";

 class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError executed");
    console.log("============================");
    console.log("error", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch executed");
    // error and info can be reported using any reporting services
    console.log("===========================");
    console.log("info", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <FallBack />
        </>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}

export default ErrorBoundary;
