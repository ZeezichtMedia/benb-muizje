import type { APIRoute } from 'astro';
import { sendEmail } from '../../lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        const {
            checkin, checkout,
            name, email, phone,
            guests, age_oldest,
            pet, remarks
        } = data;

        if (!checkin || !checkout || !name || !email) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
        }

        // Send email to admin
        const adminEmailContent = `
      <h1>New Reservation Request</h1>
      <p><strong>Period:</strong> ${checkin} to ${checkout}</p>
      
      <h2>Guest Details</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      
      <h2>Stay Details</h2>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Age of Oldest Guest:</strong> ${age_oldest}</p>
      <p><strong>Pet:</strong> ${pet === 'yes' ? 'Yes' : 'No'}</p>
      
      <h2>Remarks</h2>
      <p>${remarks ? remarks.replace(/\n/g, '<br>') : 'None'}</p>
    `;

        const adminResult = await sendEmail(
            import.meta.env.MAIL_FROM, // Send to self/admin
            `New Reservation: ${name} (${checkin} - ${checkout})`,
            adminEmailContent,
            email // Reply to the sender
        );

        if (!adminResult.success) {
            throw new Error('Failed to send admin email');
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error('Reservation API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};
