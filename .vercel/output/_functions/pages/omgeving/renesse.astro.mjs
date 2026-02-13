import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BRTF9q4a.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Footer_BAvnkl2I.mjs';
export { renderers } from '../../renderers.mjs';

const $$Renesse = createComponent(async ($$result, $$props, $$slots) => {
  const currentLang = "nl";
  const {
    Footprints,
    Car,
    ShoppingBasket,
    Bike,
    Zap,
    MapPin
  } = await import('lucide-react');
  const content = {
    title: "Het strand en Renesse",
    description: "Ontdek de prachtige omgeving van Renesse, van de uitgestrekte stranden tot het gezellige dorp.",
    map: {
      title: "Interactieve Omgevingskaart",
      description: "Bekijk de routes naar het strand, het dorp en belangrijke voorzieningen in \xE9\xE9n oogopslag.",
      image: "/images/renesse-map.jpg"
    },
    sections: [
      {
        title: "Strand & Bereikbaarheid",
        text: "De strandovergangen 'Het Watergat' en de 'Julianahoeve' zijn uitstekend bereikbaar te voet of met de fiets (zie de oranje lijn op de kaart). Houd er rekening mee dat er bij de strandovergangen aan de Hoogenboomlaan (bij 'Het Watergat' en camping Julianahoeve) geen parkeergelegenheid is voor auto's.",
        Icon: Footprints,
        color: "text-brand-accent"
      },
      {
        title: "Parkeren aan Zee",
        text: "Wilt u toch met de auto naar het strand? Dan kunt u gebruikmaken van de parkeerplaatsen bij de overgangen aan de Rampweg of op de Brouwersdam. Hier is voldoende ruimte om uw auto te parkeren en direct van het strand te genieten.",
        Icon: Car,
        color: "text-brand-green"
      },
      {
        title: "Voorzieningen in de Buurt",
        text: "Op slechts 5 minuten afstand, op park 'de Bongerd', bevindt zich een mini-supermarkt. Ideaal voor verse broodjes in de ochtend! Deze supermarkt is geopend van Pasen tot en met de herfstvakantie.",
        Icon: ShoppingBasket,
        color: "text-brand-accent"
      },
      {
        title: "Het Dorp Renesse",
        text: "Het centrum van Renesse ligt op circa 10 minuten fietsen. Gaat u liever met de auto? Dan zijn er diverse parkeermogelijkheden. Aan de rand van het dorp vindt u het grote Transferium, waar u gratis kunt parkeren.",
        Icon: Bike,
        color: "text-brand-green"
      },
      {
        title: "Elektrisch Opladen",
        text: "Voor elektrische auto's zijn er oplaadpunten beschikbaar op alle openbare parkeerplaatsen in de omgeving. Het is niet toegestaan om uw auto op te laden bij de recreatiewoning zelf.",
        Icon: Zap,
        color: "text-brand-accent"
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": content.title, "description": content.description, "lang": currentLang }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-24 md:pt-36 bg-brand-light min-h-screen"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Hero Section --> <div class="text-center max-w-4xl mx-auto mb-16"> <h1 class="text-4xl md:text-6xl font-heading font-black text-brand-green mb-6 leading-tight animate-slide-up"> <span class="font-['Caveat'] text-5xl md:text-6xl text-brand-green/70 block mb-4 -rotate-1">Ontdek</span> ${content.title} </h1> <p class="text-lg md:text-xl text-brand-dark/80 font-medium leading-relaxed animate-slide-up delay-100 max-w-2xl mx-auto"> ${content.description} </p> </div> <!-- Modern Map Section --> <div class="mb-36 animate-slide-up delay-200"> <div class="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-clay/10 group"> <div class="absolute top-0 left-0 w-full h-full bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> <div class="grid md:grid-cols-2 gap-0"> <div class="relative group min-h-[400px] md:min-h-full order-2 md:order-1"> <!-- Map Image - Clickable and Full View --> <a${addAttribute(content.map.image, "href")} target="_blank" rel="noopener noreferrer" class="block w-full h-full relative cursor-zoom-in"> <img${addAttribute(content.map.image, "src")}${addAttribute(content.map.title, "alt")} class="absolute inset-0 w-full h-full object-cover md:object-contain bg-brand-light/50"> <!-- Hover overlay hint --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 z-20"> <span class="bg-white/90 px-4 py-2 rounded-full text-sm font-bold text-brand-dark shadow-lg">
Klik om te vergroten
</span> </div> </a> </div> <div class="p-8 md:p-12 flex flex-col justify-center bg-white relative z-10 border-l border-brand-clay/10 order-1 md:order-2"> <span class="font-['Caveat'] text-3xl text-brand-green block mb-2">Navigeer slim</span> <h2 class="text-3xl font-heading font-bold text-brand-dark mb-6">${content.map.title}</h2> <p class="text-brand-dark/70 leading-relaxed mb-8"> ${content.map.description} </p> <!-- Legend keys matching the map colors --> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="w-8 h-1 bg-red-500 border-b-2 border-red-500 border-dashed"></div> <span class="text-sm font-bold text-brand-dark/80">Fiets- & Wandelpad</span> </div> <div class="flex items-center gap-3"> <div class="w-8 h-1 bg-orange-500 rounded-full"></div> <span class="text-sm font-bold text-brand-dark/80">Naar het strand</span> </div> <div class="flex items-center gap-3"> <div class="w-8 h-1 bg-green-500 rounded-full"></div> <span class="text-sm font-bold text-brand-dark/80">Naar het dorp</span> </div> </div> </div> </div> </div> </div> <!-- Content Grid --> <div class="grid md:grid-cols-2 gap-8 md:gap-12"> ${content.sections.map((section, index) => renderTemplate`<div${addAttribute(`bg-white rounded-3xl p-8 shadow-xl border border-brand-clay/10 group hover:shadow-2xl transition-all duration-300 animate-slide-up relative overflow-hidden`, "class")}${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> <!-- Decorative background icon --> <div${addAttribute(`absolute -right-6 -bottom-6 opacity-5 transform rotate-12 scale-150 transition-transform duration-700 group-hover:scale-175 ${section.color}`, "class")}> ${renderComponent($$result2, "section.Icon", section.Icon, { "size": 120 })} </div> <div class="flex items-start gap-6 relative z-10"> <div${addAttribute(`hidden md:flex w-20 h-20 flex-shrink-0 rounded-2xl items-center justify-center bg-brand-light shadow-md ${section.color}`, "class")}> ${renderComponent($$result2, "section.Icon", section.Icon, { "size": 40, "strokeWidth": 1.5 })} </div> <div> <h3 class="text-2xl font-bold font-heading text-brand-dark mb-4 flex items-center gap-3"> <span class="md:hidden text-brand-green"> ${renderComponent($$result2, "section.Icon", section.Icon, { "size": 24 })} </span> ${index + 1}. ${section.title} </h3> <p class="text-brand-dark/70 leading-relaxed"> ${section.text} </p> </div> </div> </div>`)} </div> <!-- Map Placeholder or Call to Action --> <div class="mt-16 bg-brand-green/10 rounded-3xl p-8 md:p-12 text-center animate-slide-up delay-500"> <h2 class="text-3xl font-heading font-bold text-brand-dark mb-4">Meer weten over de omgeving?</h2> <p class="text-brand-dark/70 mb-8 max-w-2xl mx-auto">Bekijk onze algemene omgevingspagina voor meer tips en bezienswaardigheden.</p> <a href="/nl/omgeving" class="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-full hover:bg-brand-dark hover:scale-105 transition-all shadow-lg hover:shadow-xl">
Terug naar Omgeving
</a> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/renesse.astro", void 0);

const $$file = "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/renesse.astro";
const $$url = "/omgeving/renesse";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Renesse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
