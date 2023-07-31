import Footer from "@/components/common/footer";
import Cursor from "@/components/custom/custom_cursor";
import Experience from "@/components/experiences";
import Navbar from "@/components/header/navbar";
import React from "react";

export default function page() {
    return (
        <div>
            <Navbar />

            <Experience />

            <Cursor />
            <Footer />
        </div>
    );
}
