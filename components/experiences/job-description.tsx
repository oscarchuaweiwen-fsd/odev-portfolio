import { JobDescription } from "@/libs/constant/job_description";
import { Box, Chip, Typography } from "@mui/material";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const JobDescription = ({
    job,
    index,
}: {
    job: JobDescription;
    index: number;
}) => {
    const MotionBox = motion(Box);

    return (
        <MotionBox
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.5,
                type: "ease",
                bounce: 0.25,
            }}
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "row",
                    lg: "row",
                    xl: "row",
                },
                margin: 5,
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "40%",
                        md: "40%",
                        lg: "40%",
                        xl: "40%",
                    },
                    paddingRight: 10,
                }}
            >
                <Typography
                    variant="subtitle2"
                    sx={({ palette }) => {
                        return {
                            color:
                                palette.mode == "dark"
                                    ? palette.custom.grey
                                    : "black",
                        };
                    }}
                    fontWeight={"1000"}
                >
                    {job.duration}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: {
                        xs: "100%",
                        sm: "60%",
                        md: "60%",
                        lg: "60%",
                        xl: "60%",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gridGap: 10,
                }}
            >
                <Box>{job.position}</Box>
                {job.details.map((res, idx) => {
                    return (
                        <Box key={idx}>
                            <Typography
                                variant="subtitle2"
                                sx={({ palette }) => {
                                    return {
                                        color:
                                            palette.mode == "dark"
                                                ? palette.custom.grey
                                                : "black",
                                    };
                                }}
                            >
                                <li>{res}</li>
                            </Typography>
                        </Box>
                    );
                })}
                <Box
                    sx={{ display: "flex", gridGap: "10px", flexWrap: "wrap" }}
                >
                    {job.lang.map((lang, idx) => {
                        return <Chip key={idx} label={lang} size="small" />;
                    })}
                </Box>
            </Box>
        </MotionBox>
    );
};

export default JobDescription;
