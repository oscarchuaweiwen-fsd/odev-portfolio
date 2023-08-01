import Holder from "@/components/common/holder";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Footer from "../common/footer";
import { Descriptions } from "@/libs/constant";

export default function Home() {
    const imgAnimation = useAnimation();
    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e;

        const moveX = clientX - innerWidth / 2;
        const moveY = window.outerHeight - window.innerHeight - clientY;
        imgAnimation.start({
            x: -moveX / 10,
            y: moveY / 2,
        });
    };
    const TextMotion = motion(Typography);

    return (
        <Holder
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                height: "auto",
                marginY: "20px",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    gridGap: "20px",
                }}
            >
                <TextMotion
                    animate={imgAnimation}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={() => {
                        imgAnimation.start({
                            x: 0,
                            y: 0,
                        });
                    }}
                    variant={"h2"}
                    fontWeight={1000}
                    sx={{
                        zIndex: 9999,
                        textShadow: "4px 1px #0FFBF9, -4px 1px #FF3F4A",
                    }}
                    exit={{ opacity: 0 }}
                >
                    Odev
                </TextMotion>

                <Typography
                    sx={({ palette }) => {
                        return {
                            color:
                                palette.mode == "dark"
                                    ? palette.custom.white
                                    : palette.custom.black,
                        };
                    }}
                >
                    Work hard in silence, let success make the noise.
                </Typography>

                {Descriptions.map((items, index) => {
                    return (
                        <Typography
                            key={index}
                            variant={"subtitle1"}
                            sx={({ palette }) => {
                                return {
                                    color:
                                        palette.mode == "dark"
                                            ? palette.custom.grey
                                            : palette.custom.black,
                                    lineHeight: "2",
                                    textAlign: "justify",
                                };
                            }}
                        >
                            {items}
                        </Typography>
                    );
                })}
            </Box>
            <Footer />
        </Holder>
    );
}
