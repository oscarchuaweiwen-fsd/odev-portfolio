import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Odev | Experience",
    description: "Odev's experience",
    openGraph: {
        url: "https://odev-porfolio.vercel.app/experience",
    },
    icons: {
        icon: "/images/icons/android-icon-96x96.png",
    },
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
