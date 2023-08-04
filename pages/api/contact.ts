import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import prisma from "@/libs/db";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { email, name, message } = req.body;

    if (req.method == "POST") {
        try {
            // @ts-ignore
            await prisma.contactInfo.create({
                data: {
                    email,
                    name,
                    message,
                },
            });
            return res.status(200).json({
                message:
                    "Your message is well received. I will contact you soon",
                status: true,
            });
        } catch (error: any) {
            return res.status(500).json({
                message: error.toString(),
                status: false,
            });
        }
    }
}
