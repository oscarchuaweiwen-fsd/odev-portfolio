"use client";
import { Box, Container, Drawer, Typography } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import { HeaderLinks } from "@/libs/constant";
import CustomLink from "@/components/common/custom/custom_link";

export default function SideMenu() {
    const [toggle, setToggle] = React.useState<boolean>(false);
    const pathname = usePathname();
    const data =
        pathname!.split("/")[1] == "" ? "Home" : pathname!.split("/")[1];
    return (
        <>
            <Container
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                        md: "none",
                        lg: "none",
                        xl: "none",
                    },
                    position: "fixed",
                    padding: "0 !important",
                    top: "50%",
                    left: "0 !important",
                    width: "2rem",
                }}
            >
                <Box
                    sx={({ palette }) => {
                        return {};
                    }}
                    onClick={() => {
                        return setToggle((prev) => {
                            return true;
                        });
                    }}
                >
                    <Typography
                        sx={{
                            textOrientation: "mixed !important",
                            writingMode: "vertical-rl",
                            padding: "0.2rem",
                            borderTopRightRadius: "2px solid #fff",
                        }}
                    >
                        Menu
                    </Typography>
                </Box>
            </Container>

            <Drawer
                sx={{
                    zIndex: 10000,
                    backgroundFilter: "blur(10px)",
                }}
                anchor={"left"}
                open={toggle}
                onClose={() => {
                    setToggle((prev) => {
                        return false;
                    });
                }}
            >
                <Box
                    sx={({ palette }) => {
                        return {
                            height: "100%",
                            width: "10rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            background:
                                palette.mode == "light" ? "#F0E7DB" : "#121212",
                        };
                    }}
                >
                    {HeaderLinks.map((link, index) => {
                        return (
                            <Box
                                key={link}
                                sx={({ palette }) => {
                                    return {
                                        background:
                                            palette.mode == "light"
                                                ? "#F0E7DB"
                                                : "#121212",
                                        width: "100%",
                                        padding: "1rem",
                                    };
                                }}
                            >
                                <CustomLink
                                    key={link}
                                    link={link}
                                    isActive={
                                        data.toLowerCase() == link.toLowerCase()
                                    }
                                    index={index}
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Drawer>
        </>
    );
}
