import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BRTF9q4a.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../../chunks/Footer_BAvnkl2I.mjs';
import { MapPin, Ship, Waves, Umbrella, ExternalLink } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Links = createComponent(($$result, $$props, $$slots) => {
  const currentLang = "nl";
  const categories = [
    {
      title: "Informatie over de omgeving",
      icon: MapPin,
      color: "bg-blue-50 text-blue-600",
      links: [
        { name: "Renesse.com", url: "https://renesse.com/nl/" },
        { name: "Op Schouwen-Duiveland", url: "https://www.opschouwenduiveland.nl/" },
        { name: "Zierikzee Monumentenstad", url: "https://www.zeeland.com/nl-nl/visit/eilanden/schouwen-duiveland/zierikzee" },
        { name: "Deltapark Neeltje Jans", url: "https://www.neeltjejans.nl/" },
        { name: "Fietsroutes Renesse", url: "https://www.route.nl/routes?q=renesse" },
        { name: "Strandweer & Getijden", url: "https://renesse.com/nl/weer-getijden/" }
      ]
    },
    {
      title: "Rondvaarten & Safari's",
      icon: Ship,
      color: "bg-teal-50 text-teal-600",
      links: [
        { name: "Frisia Rondvaarten Zierikzee", url: "https://www.frisiarondvaarten.nl/" },
        { name: "Ms. Onrust (Natuur rondvaart)", url: "https://ms-onrust.nl/" },
        { name: "Rondvaart Neeltje Jans", url: "https://www.neeltjejans.nl/rondvaart/" }
      ]
    },
    {
      title: "Watersport",
      icon: Waves,
      color: "bg-cyan-50 text-cyan-600",
      links: [
        { name: "Brouwersdam Watersport", url: "https://www.brouwersdam.nl/" },
        { name: "Zeil & Surfcentrum", url: "https://www.brouwersdam.nl/nl/watersport" },
        { name: "Meezeilen vanuit Zierikzee", url: "https://www.meezeilenzeeland.nl/" },
        { name: "Duikcentrum De Witte Boulevard", url: "https://duikcentrumzeeland.nl/" }
      ]
    },
    {
      title: "Activiteiten bij regen",
      icon: Umbrella,
      color: "bg-indigo-50 text-indigo-600",
      description: "Het gebeurt niet vaak op Schouwen, maar voor het geval dat:",
      links: [
        { name: "Aqua Mundo Port Z\xE9lande", url: "https://www.centerparcs.nl/nl-nl/nederland/fp_PZ_vakantiepark-port-zelande/aqua-mundo" },
        { name: "Funtastic Casino", url: "https://www.funtasticcasino.nl/vestigingen/renesse/" },
        { name: "Iguana Reptielen Zoo", url: "https://iguana.nl/" },
        { name: "CineCity Vlissingen", url: "https://www.cinecity.nl/" },
        { name: "Museum De Burghse Schoole", url: "https://www.burghseschoole.nl/" },
        { name: "Sportcentrum Huis van Burgh", url: "https://huisvanburgh.nl/" }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Handige Links - Zeeuwse Buurn", "description": "Een overzicht van handige websites, activiteiten en bezienswaardigheden in de omgeving van Renesse.", "lang": currentLang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main class="pt-24 md:pt-36 bg-brand-light min-h-screen"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Header --> <div class="text-center max-w-3xl mx-auto mb-16 animate-slide-up"> <span class="font-['Caveat'] text-4xl text-brand-green block mb-4">Ontdek meer</span> <h1 class="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-6">Handige Links & Tips</h1> <p class="text-lg text-brand-dark/70 font-medium">
We hebben de leukste activiteiten, handige informatie en beste tips voor u verzameld om uw verblijf nog aangenamer te maken.
</p> </div> <!-- Links Grid --> <div class="grid md:grid-cols-2 gap-8 masonry-grid"> ${categories.map((category, index) => renderTemplate`<div${addAttribute(`bg-white rounded-3xl p-8 shadow-xl border border-brand-clay/10 hover:shadow-2xl transition-all duration-300 animate-slide-up h-full flex flex-col`, "class")}${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> <div class="flex items-center gap-4 mb-8"> <div${addAttribute(`w-14 h-14 rounded-2xl flex items-center justify-center ${category.color}`, "class")}> ${renderComponent($$result2, "category.icon", category.icon, { "size": 28 })} </div> <h2 class="text-2xl font-bold font-heading text-brand-dark">${category.title}</h2> </div> ${category.description && renderTemplate`<p class="text-brand-dark/60 mb-6 italic border-l-4 border-brand-green/20 pl-4"> ${category.description} </p>`} <div class="grid gap-3"> ${category.links.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-4 rounded-xl bg-brand-light/30 hover:bg-brand-green/5 border border-transparent hover:border-brand-green/20 transition-all group"> <span class="font-medium text-brand-dark group-hover:text-brand-green transition-colors">${link.name}</span> ${renderComponent($$result2, "ExternalLink", ExternalLink, { "size": 18, "class": "text-brand-dark/40 group-hover:text-brand-green transition-colors" })} </a>`)} </div> </div>`)} </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/links.astro", void 0);

const $$file = "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/links.astro";
const $$url = "/omgeving/links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Links,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
