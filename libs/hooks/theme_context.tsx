"use client";
import React, { createContext, useState } from "react";
import { PaletteMode } from "@mui/material";

interface ThemeContextProps {
    theme: PaletteMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "dark",
    toggleTheme: () => {},
});

export default function ThemeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState<PaletteMode>("dark");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
