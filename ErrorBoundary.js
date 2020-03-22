import React, { Component } from 'react';

export class ErrorBoundary extends Component {
    
    state = { hasError: false }
  
    static getDerivedStateFromError (error) {
      return { hasError: true }
    }
  
    componentDidCatch (error, info) {
      logErrorToService(error, info.componentStack)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
          }
      
          return this.props.children; 
        }
}

export default ErrorBoundary;