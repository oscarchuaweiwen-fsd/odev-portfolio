import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const GA_TRACKING_ID = "G-BY4L6X200R";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
    (window as any).gtag("config", GA_TRACKING_ID as string, {
        page_path: url,
    });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
    action: any,
    { event_category, event_label, value }: any,
) => {
    (window as any).gtag("event", action, {
        event_category,
        event_label,
        value,
    });
};

export const useGtag = () => {
    const pathname = usePathname(); // Get current route

    // Save pathname on component mount into a REF
    const savedPathNameRef = useRef(pathname);

    useEffect(() => {
        if (process.env.NODE_ENV === "development") return;

        const handleRouteChange = (url: URL) => {
            pageview(url);
        };

        if (savedPathNameRef.current !== pathname) {
            // @ts-ignore
            handleRouteChange(new URL(pathname, window.location.origin));
            // Update REF
            savedPathNameRef.current = pathname;
        }
    }, [pathname]);
};
