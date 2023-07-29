import { Typography } from "@mui/material";
import Holder from "./holder";

export default function Footer() {
    return (
        <Holder
            sx={{
                display: "flex",
                width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                textAlign: "center",
            }}
        >
            <Typography
                variant={"subtitle2"}
                sx={({ palette }) => {
                    return {
                        color: palette.custom.grey,
                    };
                }}
            >
                &copy; 2023 - Oscar Chua Wei Wen. All rights reserved.
            </Typography>
        </Holder>
    );
}
