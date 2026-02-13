import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { type, ...fields } = data; // type = 'contact' | 'booking'

        // Validate required fields
        if (!fields.email || !fields.name) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            host: import.meta.env.SMTP_HOST,
            port: parseInt(import.meta.env.SMTP_PORT || '587'),
            secure: import.meta.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: import.meta.env.SMTP_USER,
                pass: import.meta.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false // Sometimes needed for shared hosting self-signed certs
            }
        });

        // Email Content
        let subject = '';
        let htmlContent = '';

        if (type === 'booking') {
            subject = `Nieuwe Reserveringsaanvraag: ${fields.name} (${fields.checkin} - ${fields.checkout})`;
            htmlContent = `
                <h2>Nieuwe Reserveringsaanvraag</h2>
                <p><strong>Naam:</strong> ${fields.name}</p>
                <p><strong>Email:</strong> ${fields.email}</p>
                <p><strong>Telefoon:</strong> ${fields.phone}</p>
                <p><strong>Periode:</strong> ${fields.checkin} t/m ${fields.checkout}</p>
                <p><strong>Gasten:</strong> ${fields.guests} (Oudste: ${fields.age_oldest})</p>
                <p><strong>Huisdier:</strong> ${fields.pet}</p>
                <p><strong>Opmerkingen:</strong><br>${fields.remarks || '-'}</p>
            `;
        } else {
            subject = `Nieuw Contactbericht: ${fields.name}`;
            htmlContent = `
                <h2>Nieuw Contactbericht</h2>
                <p><strong>Naam:</strong> ${fields.name}</p>
                <p><strong>Email:</strong> ${fields.email}</p>
                <p><strong>Bericht:</strong><br>${fields.message}</p>
            `;
        }

        // 1. Send Admin Notification
        await transporter.sendMail({
            from: `"Zeeuwse Buurn Website" <${import.meta.env.SMTP_USER}>`,
            to: import.meta.env.SMTP_USER,
            replyTo: fields.email,
            subject: subject,
            html: htmlContent
        });

        // 2. Send User Confirmation
        const userSubject = type === 'booking'
            ? 'Ontvangstbevestiging Reserveringsaanvraag - Zeeuwse Buurn'
            : 'Ontvangstbevestiging Contact - Zeeuwse Buurn';

        const userHtml = type === 'booking'
            ? `<p>Beste ${fields.name},</p>
               <p>Bedankt voor uw reserveringsaanvraag bij Zeeuwse Buurn! We hebben de volgende gegevens ontvangen:</p>
               <ul>
                   <li><strong>Periode:</strong> ${fields.checkin} t/m ${fields.checkout}</li>
                   <li><strong>Gasten:</strong> ${fields.guests}</li>
               </ul>
               <p>We controleren de beschikbaarheid en nemen zo snel mogelijk contact met u op.</p>
               <p>Met vriendelijke groet,<br>Geert & Marianne</p>`
            : `<p>Beste ${fields.name},</p>
               <p>Bedankt voor uw bericht. We hebben het in goede orde ontvangen en komen er zo snel mogelijk op terug.</p>
               <p>Met vriendelijke groet,<br>Geert & Marianne</p>`;

        await transporter.sendMail({
            from: `"Zeeuwse Buurn" <${import.meta.env.SMTP_USER}>`,
            to: fields.email,
            subject: userSubject,
            html: userHtml
        });

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        console.error('SMTP Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message || error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
