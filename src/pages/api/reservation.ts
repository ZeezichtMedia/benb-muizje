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

        // Send confirmation email to user
        const userEmailContent = `
          <h1>Bedankt voor uw reserveringsaanvraag</h1>
          <p>Beste ${name},</p>
          <p>We hebben uw aanvraag voor een verblijf bij Zeeuwse Buurn in goede orde ontvangen.</p>
          
          <h2>Overzicht van uw aanvraag:</h2>
          <ul>
            <li><strong>Periode:</strong> ${checkin} t/m ${checkout}</li>
            <li><strong>Aantal personen:</strong> ${guests}</li>
            <li><strong>Huisdier:</strong> ${pet === 'yes' ? 'Ja' : 'Nee'}</li>
          </ul>

          <p>We gaan de beschikbaarheid controleren en nemen zo spoedig mogelijk contact met u op om de reservering definitief te maken.</p>
          <br>
          <p>Met vriendelijke groet,</p>
          <p><strong>Zeeuwse Buurn</strong></p>
        `;

        await sendEmail(email, 'Ontvangstbevestiging reservering | Zeeuwse Buurn', userEmailContent);

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error('Reservation API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
};
