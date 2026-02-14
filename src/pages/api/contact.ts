import type { APIRoute } from 'astro';
import { sendEmail } from '../../lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const { name, email, message } = data;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        // Send email to admin
        const adminEmailContent = `
      <h1>Nieuw Contactformulier Bericht</h1>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Bericht:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

        const adminResult = await sendEmail(
            import.meta.env.MAIL_FROM, // Send to self/admin
            `Nieuw bericht van ${name}`,
            adminEmailContent,
            email // Reply to the sender
        );

        if (!adminResult.success) {
            throw new Error('Failed to send admin email');
        }

        // Send confirmation email to user
        const userEmailContent = `
          <h1>Bedankt voor uw bericht</h1>
          <p>Beste ${name},</p>
          <p>We hebben uw bericht in goede orde ontvangen en nemen zo spoedig mogelijk contact met u op.</p>
          <br>
          <p>Met vriendelijke groet,</p>
          <p><strong>Zeeuwse Buurn</strong></p>
        `;

        await sendEmail(email, 'Bevestiging van uw bericht | Zeeuwse Buurn', userEmailContent);

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error('Contact API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};
