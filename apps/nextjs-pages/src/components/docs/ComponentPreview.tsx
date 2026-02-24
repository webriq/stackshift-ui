import { Component, type ReactNode, type ErrorInfo } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error boundary to catch preview rendering errors
class PreviewErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Preview error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-red-600 bg-red-50 rounded-lg">
          <p className="font-medium">Preview error</p>
          <p className="text-sm mt-1">{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Preview header */}
      <div className="px-4 py-2 bg-gray-50 border-b text-xs text-gray-500 font-medium">
        Preview
      </div>

      {/* Preview content */}
      <div className="p-6 bg-white">
        <PreviewErrorBoundary>
          <div className="flex items-center justify-center min-h-[80px]">
            {children}
          </div>
        </PreviewErrorBoundary>
      </div>
    </div>
  );
}
