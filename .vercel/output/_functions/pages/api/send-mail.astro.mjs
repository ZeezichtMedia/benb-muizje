import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { type, ...fields } = data;
    if (!fields.email || !fields.name) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      host: "mail.zeeuwsebuurn.nl",
      port: parseInt("587"),
      secure: false,
      // true for 465, false for other ports
      auth: {
        user: "info@zeeuwsebuurn.nl",
        pass: "vDchubMm93cFywXSQ6cd"
      },
      tls: {
        rejectUnauthorized: false
        // Sometimes needed for shared hosting self-signed certs
      }
    });
    let subject = "";
    let htmlContent = "";
    if (type === "booking") {
      subject = `Nieuwe Reserveringsaanvraag: ${fields.name} (${fields.checkin} - ${fields.checkout})`;
      htmlContent = `
                <h2>Nieuwe Reserveringsaanvraag</h2>
                <p><strong>Naam:</strong> ${fields.name}</p>
                <p><strong>Email:</strong> ${fields.email}</p>
                <p><strong>Telefoon:</strong> ${fields.phone}</p>
                <p><strong>Periode:</strong> ${fields.checkin} t/m ${fields.checkout}</p>
                <p><strong>Gasten:</strong> ${fields.guests} (Oudste: ${fields.age_oldest})</p>
                <p><strong>Huisdier:</strong> ${fields.pet}</p>
                <p><strong>Opmerkingen:</strong><br>${fields.remarks || "-"}</p>
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
    await transporter.sendMail({
      from: `"Zeeuwse Buurn Website" <${"info@zeeuwsebuurn.nl"}>`,
      to: "info@zeeuwsebuurn.nl",
      replyTo: fields.email,
      subject,
      html: htmlContent
    });
    const userSubject = type === "booking" ? "Ontvangstbevestiging Reserveringsaanvraag - Zeeuwse Buurn" : "Ontvangstbevestiging Contact - Zeeuwse Buurn";
    const userHtml = type === "booking" ? `<p>Beste ${fields.name},</p>
               <p>Bedankt voor uw reserveringsaanvraag bij Zeeuwse Buurn! We hebben de volgende gegevens ontvangen:</p>
               <ul>
                   <li><strong>Periode:</strong> ${fields.checkin} t/m ${fields.checkout}</li>
                   <li><strong>Gasten:</strong> ${fields.guests}</li>
               </ul>
               <p>We controleren de beschikbaarheid en nemen zo snel mogelijk contact met u op.</p>
               <p>Met vriendelijke groet,<br>Geert & Marianne</p>` : `<p>Beste ${fields.name},</p>
               <p>Bedankt voor uw bericht. We hebben het in goede orde ontvangen en komen er zo snel mogelijk op terug.</p>
               <p>Met vriendelijke groet,<br>Geert & Marianne</p>`;
    await transporter.sendMail({
      from: `"Zeeuwse Buurn" <${"info@zeeuwsebuurn.nl"}>`,
      to: fields.email,
      subject: userSubject,
      html: userHtml
    });
    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("SMTP Error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email", details: error.message || error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
