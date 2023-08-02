"use client";

import { Box } from "@mui/material";
import { motion, useAnimate } from "framer-motion";

export default function Cursor() {
    const BoxMotion = motion(Box);
    const [scope, animate] = useAnimate();

    const handleMouseMove = (e: any) => {
        if (e.clientX > window.innerWidth - 10) return;
        if (e.clientY > window.innerHeight - 10) return;

        animate(
            scope.current,
            {
                display: "block",
                position: "absolute",
                width: 20,
                height: 20,
                top: e.clientY - 10,
                left: e.clientX,
                transform: "translate(-50%)",
                borderRadius: "50%",
                background: "transparent",
                backdropFilter: "blur(50px)",
                border: "2px solid #fff",
                cursor: "none",
            },
            { duration: 0 },
        );
    };

    return (
        <BoxMotion
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                cursor: "none",
            }}
            onMouseMove={handleMouseMove}
        >
            <BoxMotion
                ref={scope}
                initial={{
                    width: 20,
                    height: 20,
                    top: 0,
                    left: 0,
                    cursor: "pointer",
                }}
            ></BoxMotion>
        </BoxMotion>
    );
}
