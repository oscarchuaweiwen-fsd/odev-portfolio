import Provider from "@/app/provider";
import ThemeLayout from "@/libs/hooks/theme_context";
import type { Metadata } from "next";
import "./global.css";
import GoogleAnalytics from "./google_analytics";
import React from "react";

export const metadata: Metadata = {
    title: "Odev | Home",
    description: "Odev's Home",
    icons: "/icon.png",
    creator: "Oscar Chua Wei Wen",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <GoogleAnalytics />
                <ThemeLayout>
                    <Provider>{children}</Provider>
                </ThemeLayout>
            </body>
        </html>
    );
}
