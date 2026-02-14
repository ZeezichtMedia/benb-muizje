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
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

        const adminResult = await sendEmail(
            import.meta.env.MAIL_FROM, // Send to self/admin
            `New Contact from ${name}`,
            adminEmailContent,
            email // Reply to the sender
        );

        if (!adminResult.success) {
            throw new Error('Failed to send admin email');
        }

        // Send confirmation email to user (optional, but good practice)
        /*
        const userEmailContent = `
          <h1>Thank you for contacting Zeeuwse Buurn</h1>
          <p>We have received your message and will get back to you shortly.</p>
        `;
        await sendEmail(email, 'We received your message', userEmailContent);
        */

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error('Contact API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};
