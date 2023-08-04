import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Odev | Contact",
    description: "Odev's Contact",
    creator: "Oscar Chua Wei Wen",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
