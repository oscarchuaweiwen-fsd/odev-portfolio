import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { motion, useAnimate, usePresence } from "framer-motion";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/libs/hooks/theme_context";

const CustomLink = ({
    link,
    isActive,
    index,
}: Readonly<{
    link: string;
    isActive: boolean;
    index: number;
}>) => {
    const BoxMotion = motion(Box);
    const [scope, animate] = useAnimate();
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const animation = async () => {
            await animate(scope.current, { y: 0, delay: index * 0.2 });
        };

        animation();
    }, [theme]);

    return (
        <Link
            key={link}
            href={{ pathname: `/${link !== "Home" ? link.toLowerCase() : ""}` }}
            style={{ textDecoration: "none" }}
        >
            <BoxMotion ref={scope} initial={{ opacity: 1, y: -300 }}>
                <Typography
                    sx={({ palette }) => ({
                        color: isActive
                            ? palette.mode == "dark"
                                ? palette.custom.white
                                : palette.custom.black
                            : palette.custom.grey,
                        "&:hover": {
                            textDecoration: "underline",
                            textUnderlineOffset: 4,
                        },
                    })}
                >
                    {link}
                </Typography>
            </BoxMotion>
        </Link>
    );
};

export default CustomLink;
