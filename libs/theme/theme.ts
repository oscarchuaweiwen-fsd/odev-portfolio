import { createTheme, PaletteMode } from "@mui/material";
import { colorTheme } from "@/libs/theme/color_theme";
export const getTheme = (mode: PaletteMode) => {
    return createTheme({
        typography: {
            fontFamily: "JetBrains Mono",
        },
        palette: {
            mode: mode,
            primary: {
                main: mode == "light" ? "#1976d2" : "#14a65f",
            },
            secondary: {
                main: "#dc004e",
            },
            background: {
                default: mode === "light" ? "#F0E7DB" : "#121212",
            },
            text: {
                primary: mode === "light" ? "#000" : "#fff",
            },
            custom: {
                ...colorTheme,
            },
        },
    });
};
