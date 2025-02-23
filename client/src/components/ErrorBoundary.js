import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5">
          <h2 className="text-white mb-4">Oops! Something went wrong.</h2>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
            style={{
              background: 'linear-gradient(45deg, #64ffda, #48bb78)',
              border: 'none',
              boxShadow: '0 4px 15px rgba(100, 255, 218, 0.3)'
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
