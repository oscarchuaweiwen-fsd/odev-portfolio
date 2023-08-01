"use client";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Holder from "../common/holder";
import { Projects } from "@/libs/constant";
import { useRouter } from "next/navigation";

export default function Project() {
    const router = useRouter();
    return (
        <Holder sx={{ display: "flex", marginTop: 2 }}>
            <Grid
                container
                rowSpacing={5}
                columns={{ xs: 4, sm: 8, md: 6, lg: 12 }}
            >
                {Projects.map((item, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                            xs={6}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                "&:hover": { cursor: "pointer" },
                            }}
                        >
                            <Card
                                sx={{
                                    width: "80%",
                                }}
                                onClick={() => {
                                    router.push(item.github_link);
                                }}
                            >
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={item.image_url}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Holder>
    );
}
