"use client";
import Holder from "@/components/common/holder";
import { HeaderLinks } from "@/libs/constant";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import CustomLink from "@/components/common/custom/custom_link";
import { useContext, useMemo } from "react";
import { ThemeContext } from "@/libs/hooks/theme_context";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion, useAnimate } from "framer-motion";
import logo from "@/public/images/icons/android-icon-192x192.png";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
    const pathname = usePathname();
    const data =
        pathname!.split("/")[1] == "" ? "Home" : pathname!.split("/")[1];
    const { toggleTheme, theme } = useContext(ThemeContext);
    const [scope, animate] = useAnimate();
    const router = useRouter();

    const currentTheme = useMemo(() => {
        return theme;
    }, [theme]);

    const MotionBox = motion(Box);

    const toggleAnimation = async () => {
        await animate(scope.current, { scale: 1 });
        await animate(scope.current, { scale: 0.1 });
        toggleTheme();
    };

    return (
        <Holder
            sx={{
                top: 0,
                zIndex: 9999,
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
                <Link href="/">
                    <Image
                        onClick={() => {
                            router.push("/");
                        }}
                        src={logo}
                        alt="logo"
                        height={36}
                        width={36}
                    />
                </Link>
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

            <Box
                sx={{ display: "flex", flexDirection: "row", gridGap: "10px" }}
            >
                <Box>
                    <LinkedInIcon
                        onClick={() =>
                            router.push(
                                "https://www.linkedin.com/in/oscar-chua-wei-wen-489047216/",
                            )
                        }
                    />
                </Box>

                <Box>
                    <GitHubIcon
                        onClick={() =>
                            router.push(
                                "https://github.com/oscarchuaweiwen-fsd",
                            )
                        }
                    />
                </Box>
                <MotionBox ref={scope}>
                    {currentTheme == "dark" ? (
                        <DarkModeIcon
                            onClick={toggleAnimation}
                            sx={({ palette }) => {
                                return {
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: palette.custom.grey,
                                    },
                                };
                            }}
                        />
                    ) : (
                        <LightModeIcon
                            onClick={toggleAnimation}
                            sx={({ palette }) => {
                                return {
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: palette.custom.grey,
                                    },
                                };
                            }}
                        />
                    )}
                </MotionBox>
            </Box>
        </Holder>
    );
};

export default Navbar;
