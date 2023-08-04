"use client";
import Cursor from "@/components/common/custom/custom_cursor";
import Navbar from "@/components/common/header/navbar";
import Home from "@/components/home";
import SideMenu from "@/components/common/SideMenu";
import { Box } from "@mui/material";

export default function Page() {
    return (
        <Box sx={{ display: "relative" }}>
            <Navbar />
            <Home />
            <SideMenu />
        </Box>
    );
}
