"use client";
import { Box, Chip, Divider, Typography } from "@mui/material";
import Holder from "../common/holder";
import JobDescription from "./job-description";
import { getJobDescription } from "@/libs/constant/job_description";

export default function Experience() {
    return (
        <Holder
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box>
                {getJobDescription.map((job, idx) => {
                    return (
                        <>
                            <Box
                                key={idx}
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
                                <JobDescription job={job} />
                            </Box>

                            <Divider />
                        </>
                    );
                })}
            </Box>
        </Holder>
    );
}
