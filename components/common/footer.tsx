"use client";
import { Typography } from "@mui/material";
import Holder from "./holder";

export default function Footer() {
    return (
        <Holder
            sx={{
                display: "flex",
                width: "80vw",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "40px",
                textAlign: "center",
            }}
        >
            <Typography
                variant={"subtitle2"}
                sx={({ palette }) => {
                    return {
                        color:
                            palette.mode == "dark"
                                ? palette.custom.grey
                                : "#000",
                    };
                }}
            >
                &copy; 2023 - Oscar Chua Wei Wen. All rights reserved.
            </Typography>
        </Holder>
    );
}
