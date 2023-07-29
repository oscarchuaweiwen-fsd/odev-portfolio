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
            await animate(scope.current, { rotate: -90 });
            await animate(scope.current, { scale: 1.5 });
            await animate(scope.current, { rotate: 0 });
            await animate(scope.current, { scale: 1 });
            await animate(
                scope.current,
                { opacity: 1, y: 0 },
                { duration: 1, delay: index * 0.1, ease: "easeInOut" },
            );
        };

        animation();
    }, [theme]);

    return (
        <Link
            key={link}
            href={{ pathname: `/${link !== "Home" ? link.toLowerCase() : ""}` }}
            style={{ textDecoration: "none" }}
        >
            <BoxMotion ref={scope} initial={{ opacity: 1 }}>
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
