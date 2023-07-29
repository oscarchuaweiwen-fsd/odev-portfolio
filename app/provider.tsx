"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "@/libs/theme/theme";
import React, { useContext } from "react";
import { ThemeContext } from "@/libs/hooks/theme_context";

export default function Provider({ children }: { children: React.ReactNode }) {
    const themeContext = useContext(ThemeContext);

    return (
        <ThemeProvider theme={getTheme(themeContext.theme)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
