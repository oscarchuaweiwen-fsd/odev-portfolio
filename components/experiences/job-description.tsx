import { JobDescription } from "@/libs/constant/job_description";
import { Box, Chip, Typography } from "@mui/material";

const JobDescription = ({ job }: { job: JobDescription }) => {
    return (
        <>
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
                <Typography variant="subtitle2" fontWeight={"1000"}>
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
                                        color: palette.custom.grey,
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
        </>
    );
};

export default JobDescription;
