import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const { email, name, message } = req.body;

    if (req.method == "POST") {
        try {
            // @ts-ignore
            const transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                secureConnection: false,
                port: 587,
                service: "outlook",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    ciphers: "SSLv3",
                },
            } as SMTPTransport.Options);

            const info = await transporter.sendMail({
                from: '"Fred Foo 👻" <chuaweiwen12345@hotmail.co.uk>', // sender address
                to: "oscarchuaweiwen.personal@gmail.com", // list of receivers
                subject: "Oscar's portfolio contact", // Subject line
                html: `email:${email}, name:${name}, message:${message}`, // html body
            });

            if (info)
                return res.status(200).json({
                    message:
                        "Your message is well received. I will contact you soon",
                    status: true,
                });
        } catch (error) {
            return res.status(500).json({
                message: "Something went wrong",
                status: false,
            });
        }
    }
}
