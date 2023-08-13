// ClientOnly.tsx // Typed by ChatGPT

import React, { ReactElement, useEffect, useState, ComponentType } from "react";

interface ClientOnlyProps {
    component: () => Promise<{ default: ComponentType<any> }>;
    fallback: React.ReactNode;
}

function ClientOnly(props: ClientOnlyProps): ReactElement {
    const [Component, setComponent] = useState<ComponentType<any> | null>(null);

    useEffect(() => {
        setComponent(() => React.lazy(props.component));
    }, []);

    if (Component) {
        return (
            <React.Suspense fallback={props.fallback}>
                <Component />
            </React.Suspense>
        );
    }

    return <>{props.fallback}</>;
}

export function Loading() {
    return <div>Loading...</div>;
}

export { ClientOnly };
