import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Odev | Projects",
    description: "Odev's Projects",
    creator: "Oscar Chua Wei Wen",
};

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
