import * as Styled from "./styled"

import * as React from "react";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
children?: ReactNode;
}

interface State {
hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
public state: State = {
hasError: false
};

public static getDerivedStateFromError(_: Error): State {
return { hasError: true };
}

public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
console.error("Uncaught error:", error, errorInfo);
}

public render() {
if (this.state.hasError) {
return <Styled.Container>Sorry.. there was an error</Styled.Container>;
}

return this.props.children;
}
}

export default ErrorBoundary;