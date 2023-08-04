import Footer from "@/components/common/footer";
import Cursor from "@/components/common/custom/custom_cursor";
import Experience from "@/components/experiences";
import Navbar from "@/components/common/header/navbar";
import React from "react";
import SideMenu from "@/components/common/SideMenu";

export default function page() {
    return (
        <div>
            <Navbar />

            <Experience />

            <SideMenu />
            <Footer />
        </div>
    );
}
