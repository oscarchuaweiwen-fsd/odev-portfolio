import Provider from "@/app/provider";
import ThemeLayout from "@/libs/hooks/theme_context";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
    title: "Odev | Home",
    description: "Odev's Home",
    openGraph: {
        url: "https://odev-porfolio.vercel.app",
    },
    icons: {
        icon: "/images/icons/android-icon-96x96.png",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeLayout>
                    <Provider>{children}</Provider>
                </ThemeLayout>
            </body>
        </html>
    );
}
