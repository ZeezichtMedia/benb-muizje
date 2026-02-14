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

        const formatDate = (dateStr: string) => {
            if (!dateStr) return '';
            return new Date(dateStr).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        };

        const checkinDate = formatDate(checkin);
        const checkoutDate = formatDate(checkout);

        // Send email to admin
        const adminEmailContent = `
      <h1>Nieuwe Reserveringsaanvraag</h1>
      <p><strong>Periode:</strong> ${checkinDate} t/m ${checkoutDate}</p>
      
      <h2>Gastgegevens</h2>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${phone}</p>
      
      <h2>Verblijf details</h2>
      <p><strong>Aantal personen:</strong> ${guests}</p>
      <p><strong>Leeftijd oudste gast:</strong> ${age_oldest}</p>
      <p><strong>Huisdier:</strong> ${pet === 'yes' ? 'Ja' : 'Nee'}</p>
      
      <h2>Opmerkingen</h2>
      <p>${remarks ? remarks.replace(/\n/g, '<br>') : 'Geen'}</p>
    `;

        const adminResult = await sendEmail(
            import.meta.env.MAIL_FROM, // Send to self/admin
            `Nieuwe Reservering: ${name} (${checkinDate} - ${checkoutDate})`,
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
            <li><strong>Periode:</strong> ${checkinDate} t/m ${checkoutDate}</li>
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
