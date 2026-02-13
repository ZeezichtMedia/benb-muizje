import nodemailer from 'nodemailer';

async function testSMTP() {
    console.log("Testing SMTP Connection...");

    const config = {
        host: 'smtp.mijn.host',
        port: 587,
        secure: false,
        auth: {
            user: 'info@zeeuwsebuurn.nl',
            pass: 'vDchubMm93cFywXSQ6cd'
        },
        tls: {
            rejectUnauthorized: false
        }
    };

    const transporter = nodemailer.createTransport(config);

    try {
        // 1. Verify Connection
        await transporter.verify();
        console.log("✅ Connection Successful!");

        // 2. Send Test Email
        console.log("Attempting to send test email...");
        const info = await transporter.sendMail({
            from: '"SMTP Test" <info@zeeuwsebuurn.nl>',
            to: 'info@zeeuwsebuurn.nl', // Send to self
            subject: 'Test Email from Zeeuwse Buurn Website',
            text: 'If you receive this, the SMTP configuration is correct! 🚀',
            html: '<b>If you receive this, the SMTP configuration is correct! 🚀</b>'
        });

        console.log("✅ Email Sent!");
        console.log("Message ID:", info.messageId);
        console.log("Response:", info.response);

    } catch (error) {
        console.error("❌ SMTP Error:", error);
    }
}

testSMTP();
