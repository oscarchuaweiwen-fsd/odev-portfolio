"use client";
import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { useForm, Controller, set } from "react-hook-form";
import Holder from "../common/holder";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SignJWT } from "jose";
import { signJWTTokens } from "@/libs/jwt";

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
    const [messageState, setMessageState] = React.useState<boolean>(false);
    const [snackbarState, setSnackbarState] = React.useState<boolean>(false);
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactData>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: any) => {
        setMessageState(true);

        const signedJWT = await signJWTTokens();
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + signedJWT,
                }),
            });
            setMessageState(false);
            if (response.ok) {
                setSnackbarState(true);

                reset({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => {
                    setSnackbarState(false);
                }, 3000);
            } else {
                setSnackbarState(true);
                reset({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => {
                    setSnackbarState(false);
                }, 3000);
            }
        } catch (error) {
            setMessageState(false);
        }
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
                            <TextField
                                id="name"
                                {...field}
                                sx={{ display: "flex", my: 2 }}
                                placeholder={"Name"}
                                error={errors.name ? true : false}
                                helperText={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                id="email"
                                {...field}
                                sx={{ display: "flex", my: 2 }}
                                placeholder={"Email"}
                                error={errors.email ? true : false}
                                helperText={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                multiline
                                rows={4}
                                id="message"
                                {...field}
                                placeholder={"Message"}
                                sx={{ display: "flex", my: 2 }}
                                error={errors.message ? true : false}
                                helperText={errors.message?.message}
                            />
                        )}
                    />

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            type="submit"
                            sx={{ background: "white", my: 2 }}
                        >
                            {messageState ? "Sending..." : "Submit"}
                        </Button>
                    </Box>
                </form>
                <Snackbar
                    sx={{ zIndex: 9999 }}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={snackbarState}
                    message="Your message is well received! I will get back to you soon!"
                    key={"top" + "center"}
                />
            </Box>
        </Holder>
    );
}
