require('dotenv').config();
import nodemailer from 'nodemailer';

const host = process.env.MAIL_HOST as string
const port = process.env.MAIL_PORT as unknown as number
const user = process.env.MAIL_USER as string
const pass = process.env.MAIL_PASS as string

const transporter = nodemailer.createTransport({
    host,
    port,
    secure: true,
    tls: {
        ciphers: "SSLv3",
    },
    requireTLS: true,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user,
        pass
    },
});

const sendMail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: user,
        to: user,
        subject,
        text,
    };

    return transporter.sendMail(mailOptions).then(e => {
        console.log(e);
        
    });
};

export default sendMail;

