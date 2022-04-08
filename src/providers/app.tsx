import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { queryClient } from "lib/react-query";
import { Button } from "@mui/material";
import Theme from "styles/Theme";
import Global from "stores/Global";
import { MainLayout } from "components/Layout";

interface IAppProvider {
    children?: JSX.Element;
}

const ErrorFallback = () => {
    return (
        <div>
            <h2>Oops, something went wrong :( </h2>
            <Button
                onClick={() => window.location.assign(window.location.origin)}
            >
                Refresh
            </Button>
        </div>
    );
};

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    return (
        <Theme>
            <Global>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <QueryClientProvider client={queryClient}>
                        <MainLayout>{children}</MainLayout>
                    </QueryClientProvider>
                </ErrorBoundary>
            </Global>
        </Theme>
    );
};