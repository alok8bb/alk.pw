import React from "react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import "./PageShell.css";

export { PageShell };

function PageShell({
    children,
    pageContext,
}: {
    children: React.ReactNode;
    pageContext: PageContext;
}) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <div className="mx-auto flex flex-col min-h-screen max-w-[872px] gap-14 p-4 md:gap-20 md:py-16 ">
                    {children}
                </div>
            </PageContextProvider>
        </React.StrictMode>
    );
}
