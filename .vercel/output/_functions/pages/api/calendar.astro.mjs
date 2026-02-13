export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ request }) => {
  const ICS_URL = "https://www.dekalendervan.nl/export-8BF25526-18D2-18E2-6CF8-31D860C957B6.ics";
  try {
    const response = await fetch(ICS_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ZeeuwseBuurn/1.0; +https://zeeuwsebuurn.nl)"
      }
    });
    if (!response.ok) {
      console.error(`Failed to fetch ICS: ${response.status} ${response.statusText}`);
      return new Response(JSON.stringify({ error: "Failed to fetch ICS" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const text = await response.text();
    const blockedDates = [];
    const eventRegex = /BEGIN:VEVENT([\s\S]*?)END:VEVENT/g;
    let match;
    while ((match = eventRegex.exec(text)) !== null) {
      const eventBlock = match[1];
      const dtStartMatch = eventBlock.match(/DTSTART(?:;VALUE=DATE)?:(\d{8})/);
      const dtEndMatch = eventBlock.match(/DTEND(?:;VALUE=DATE)?:(\d{8})/);
      if (dtStartMatch && dtEndMatch) {
        const startStr = dtStartMatch[1];
        const endStr = dtEndMatch[1];
        const startDate = new Date(
          parseInt(startStr.substring(0, 4)),
          parseInt(startStr.substring(4, 6)) - 1,
          parseInt(startStr.substring(6, 8))
        );
        const endDate = new Date(
          parseInt(endStr.substring(0, 4)),
          parseInt(endStr.substring(4, 6)) - 1,
          parseInt(endStr.substring(6, 8))
        );
        let currentDate = new Date(startDate);
        while (currentDate < endDate) {
          blockedDates.push(currentDate.toISOString().split("T")[0]);
          currentDate.setDate(currentDate.getDate() + 1);
        }
      }
    }
    const uniqueBlockedDates = [...new Set(blockedDates)];
    return new Response(JSON.stringify(uniqueBlockedDates), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate"
        // Force fresh fetch
      }
    });
  } catch (error) {
    console.error("Error parsing ICS:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
