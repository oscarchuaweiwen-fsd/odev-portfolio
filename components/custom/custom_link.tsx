import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
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
    useContext(ThemeContext);

    return (
        <Link
            key={link}
            href={{ pathname: `/${link !== "Home" ? link.toLowerCase() : ""}` }}
            style={{ textDecoration: "none" }}
        >
            <BoxMotion
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            >
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
