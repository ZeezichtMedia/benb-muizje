import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: import.meta.env.SMTP_HOST,
    port: parseInt(import.meta.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
    try {
        const info = await transporter.sendMail({
            from: `"${import.meta.env.MAIL_FROM_NAME || 'Zeeuwse Buurn'}" <${import.meta.env.MAIL_FROM}>`,
            to,
            replyTo: replyTo || import.meta.env.MAIL_FROM,
            subject,
            html,
        });
        console.log("Message sent: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email: ", error);
        return { success: false, error };
    }
};
