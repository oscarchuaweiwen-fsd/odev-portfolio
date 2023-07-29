"use client";
import Holder from "@/components/common/holder";
import { HeaderLinks } from "@/libs/constant";
import { Image } from "@mui/icons-material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import CustomLink from "../custom/custom_link";
import { useContext, useMemo } from "react";
import { ThemeContext } from "@/libs/hooks/theme_context";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = () => {
    const pathname = usePathname();
    const data = pathname.split("/")[1] == "" ? "Home" : pathname.split("/")[1];
    const { toggleTheme, theme } = useContext(ThemeContext);

    const currentTheme = useMemo(() => {
        return theme;
    }, [theme]);

    return (
        <Holder
            sx={{
                top: 0,
                zIndex: 2,
                position: "sticky",
                display: "flex",
                padding: "16px 24px !important",
                boxSizing: "border-box",
                backdropFilter: "blur(50px)",
                justifyContent: "space-between !important",
                alignItems: "center",
            }}
        >
            <Box>
                <Image />
            </Box>

            <Box>
                <Holder
                    sx={{
                        display: {
                            xs: "none",
                            sm: "flex",
                            md: "flex",
                            lg: "flex",
                            xl: "flex",
                        },
                        justifyContent: "space-evenly",
                        width: "100%",
                        gridGap: 30,
                    }}
                >
                    {HeaderLinks.map((link, index) => {
                        return (
                            <CustomLink
                                key={link}
                                link={link}
                                isActive={
                                    data.toLowerCase() == link.toLowerCase()
                                }
                                index={index}
                            />
                        );
                    })}
                </Holder>
            </Box>

            <Box>
                {currentTheme == "dark" ? (
                    <DarkModeIcon onClick={toggleTheme} />
                ) : (
                    <LightModeIcon onClick={toggleTheme} />
                )}
            </Box>
        </Holder>
    );
};

export default Navbar;
