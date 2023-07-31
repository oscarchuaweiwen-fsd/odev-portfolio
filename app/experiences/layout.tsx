import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Odev | Experience",
    description: "Odev's experience",
    creator: "Oscar Chua Wei Wen",
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
