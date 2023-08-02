"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Holder from "../common/holder";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type ContactData = {
    name: string;
    email: string;
    message: string;
};

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        message: yup.string().required(),
    })
    .required();

export default function Contact() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactData>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <Holder
            sx={({ palette }) => {
                return {
                    display: "flex",
                    justifyContent: "center",
                    mt: "20px",
                };
            }}
        >
            <Box
                sx={({ palette }) => {
                    return {
                        width: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "5px",
                        padding: "20px",
                    };
                }}
            >
                <Typography sx={{ textAlign: "center" }} variant="subtitle1">
                    Any Doubt? Just drop me a message!
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <TextField
                                    {...field}
                                    placeholder={"Name"}
                                    error={errors.name ? true : false}
                                    helperText={errors.name?.message}
                                />
                            </Box>
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <TextField
                                    {...field}
                                    placeholder={"Email"}
                                    error={errors.email ? true : false}
                                    helperText={errors.email?.message}
                                />
                            </Box>
                        )}
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            type="submit"
                            sx={{ background: "white", my: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Holder>
    );
}
