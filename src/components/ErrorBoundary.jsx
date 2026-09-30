import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ErrorBoundary] Caught error:', error, errorInfo);
  }

  handleReset() {
    this.setState({ hasError: false });
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-canvas p-4 font-body">
        <div className="w-[min(100%,_28rem)] rounded-[1.5rem] bg-white p-8 text-center text-ink shadow-[0_1rem_2rem_rgb(4_8_25_/_8%)]">
          <h1 className="font-display text-[1.5rem] font-semibold">Something went wrong</h1>
          <p className="mt-3 text-body">We apologize for the inconvenience.</p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              className="cursor-pointer rounded-[999px] bg-brand-lime px-6 py-3 font-medium text-ink"
              onClick={this.handleReset}
            >
              Try Again
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-[999px] border border-solid border-line bg-white px-6 py-3 font-medium text-ink"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
