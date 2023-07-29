import Holder from "@/components/common/holder";
import { Box, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import Footer from "../common/footer";

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
                        textShadow: "4px 1px #0FFBF9, -4px 1px #FF3F4A",
                    }}
                    exit={{ opacity: 0 }}
                >
                    Odev
                </TextMotion>

                <Typography sx={{ color: "white" }}>
                    Work hard in silence, let success make the noise.
                </Typography>

                <Typography
                    variant={"subtitle1"}
                    sx={({ palette }) => {
                        return {
                            color: palette.custom.grey,
                            lineHeight: "2",
                            textAlign: "justify",
                        };
                    }}
                >
                    I&apos;m Oscar Chua Wei Wen, a full stack developer from
                    Malaysia. I build software both for fun and for a living.
                    I&apos;m passionate about learning new technologies and
                    building things that make people&apos;s lives easier.
                </Typography>

                <Typography
                    variant={"subtitle1"}
                    sx={({ palette }) => {
                        return {
                            color: palette.custom.grey,
                            lineHeight: "2",
                            textAlign: "justify",
                        };
                    }}
                >
                    I have been coding since 2021, and it all started when I
                    received my last year of university project from my mentor.
                    Later on, I got my first job and landed as a full stack
                    developer at Hatio Sea Sdn Bhd.
                </Typography>

                <Typography
                    variant={"subtitle1"}
                    sx={({ palette }) => {
                        return {
                            color: palette.custom.grey,
                            lineHeight: "2",
                            textAlign: "justify",
                        };
                    }}
                >
                    Typescript, Java, Javascript are my primary language in my
                    career path, although I believe that I am capable of using
                    other languages as well, aside from PHP. Most of my time is
                    focusing on web applications, mobile applications, backend
                    applications. You can find my projects in my github repo.
                </Typography>
            </Box>

            <Footer />
        </Holder>
    );
}
