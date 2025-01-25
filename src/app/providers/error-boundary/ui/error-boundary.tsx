import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/page-error';

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return(
        <Suspense fallback=''>
          <PageError />
        </Suspense>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
