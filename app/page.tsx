"use client";
import Cursor from "@/components/custom/custom_cursor";
import Navbar from "@/components/header/navbar";
import Home from "@/components/home";

export default function Page() {
    return (
        <>
            <Navbar />
            <Home />
            <Cursor />
        </>
    );
}
