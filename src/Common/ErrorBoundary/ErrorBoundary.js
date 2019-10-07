import React, { Component } from 'react'

const errorBoundary = msg => WrappedComponent => {
    return class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        // change state of error
        static getDerivedStateFromError(error) {
            return { hasError: true };
        }

        // log error
        componentDidCatch(error, errorInfo) {
            console.log(error);
        }

        render() {
            if (this.state.hasError) {
                return <h1>{msg}</h1>;
            }

            return <WrappedComponent {...this.props} />;
        }
    }
}

export default errorBoundary;