import { c as createComponent, f as createAstro, b as addAttribute, j as renderHead, k as renderSlot, a as renderTemplate, m as maybeRenderHead, r as renderComponent, e as renderScript } from './astro/server_BRTF9q4a.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                */
import { t as toRoutingStrategy, g as getLocaleRelativeUrl } from './utils_BW7c_HHz.mjs';
import { Mail } from 'lucide-react';

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "nl", locales: ["nl", "en", "de"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, lang } = Astro2.props;
  const locales = ["nl", "en", "de"];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Caveat:wght@400..700&display=swap" rel="stylesheet">${locales.map((locale) => renderTemplate`<link rel="alternate"${addAttribute(locale, "hreflang")}${addAttribute(getRelativeLocaleUrl(locale, "/"), "href")}>`)}${renderHead()}</head> <body class="bg-sand text-slate font-sans"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant = "primary", class: className, target } = Astro2.props;
  const variants = {
    primary: "bg-brand-green text-white hover:bg-brand-dark",
    secondary: "bg-white text-brand-dark border-2 border-brand-green hover:bg-brand-green hover:text-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-dark"
  };
  const baseClass = "inline-flex items-center px-6 py-3 rounded-md font-bold transition-colors duration-300 font-heading";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([baseClass, variants[variant], className], "class:list")}${addAttribute(target, "target")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Button.astro", void 0);

const $$Astro$2 = createAstro();
const $$LanguagePicker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguagePicker;
  const { lang } = Astro2.params;
  const currentLang = lang || "nl";
  const languages = {
    nl: "NL",
    en: "EN",
    de: "DE"
  };
  return renderTemplate`${maybeRenderHead()}<div class="relative group ml-4 z-50"> <button class="flex items-center space-x-1 text-brand-green hover:text-brand-dark font-bold focus:outline-none bg-brand-light/50 px-3 py-2 rounded-full transition-colors"> <span>${languages[currentLang]}</span> <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div class="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-brand-clay/20"> <div class="py-1"> <div class="py-1"> ${Object.entries(languages).map(([code, label]) => {
    const pathname = Astro2.url.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const path = segments.length > 0 && ["nl", "en", "de"].includes(segments[0]) ? segments.slice(1).join("/") : segments.join("/");
    return renderTemplate`<a${addAttribute(getRelativeLocaleUrl(code, path), "href")}${addAttribute(`block px-4 py-2 text-sm hover:bg-brand-light hover:text-brand-green ${currentLang === code ? "font-bold text-brand-green" : "text-brand-dark"}`, "class")}> ${label} </a>`;
  })} </div> </div> </div> </div>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/LanguagePicker.astro", void 0);

const ui = {
  nl: {
    "nav.home": "Home",
    "nav.accommodation": "Accommodatie",
    "nav.surroundings": "Omgeving",
    "nav.gallery": "Gallerij",
    "nav.contact": "Contact",
    "nav.booking": "Reserveren",
    "btn.book": "Reserveren",
    "btn.readMore": "Lees Meer",
    "footer.rights": "Alle rechten voorbehouden.",
    "footer.by": "Website door",
    "footer.tagline": "Heerlijk ontspannen aan de Zeeuwse kust. Uw recreatiewoning in Renesse voor rust, ruimte en natuur.",
    "footer.nav": "Navigatie",
    "form.name": "Naam",
    "form.email": "E-mail",
    "form.message": "Bericht",
    "form.send": "Versturen",
    "form.checkin": "Datum van",
    "form.checkout": "Datum tot",
    "form.guests": "Aantal personen",
    "form.phone": "Telefoonnummer",
    "form.age_oldest": "Leeftijd oudste deelnemer",
    "form.pet": "Huisdier mee?",
    "form.yes": "Ja",
    "form.no": "Nee",
    "form.remarks": "Opmerkingen",
    "form.disclaimer": "De verhuurder neemt zo snel mogelijk contact met u op.",
    "hero.accommodation.subtitle": "Thuis komen...",
    "hero.surroundings.subtitle": "Ontdek Zeeland...",
    "hero.gallery.subtitle": "Een impressie...",
    "hero.contact.subtitle": "Vragen?...",
    "hero.home.aan_zee": "Welkom bij...",
    "hero.home.by": "bij"
  },
  en: {
    "nav.home": "Home",
    "nav.accommodation": "Accommodation",
    "nav.surroundings": "Surroundings",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.booking": "Booking",
    "btn.book": "Book Now",
    "btn.readMore": "Read More",
    "footer.rights": "All rights reserved.",
    "footer.by": "Website by",
    "footer.tagline": "Relax at the Zeeland coast. Your holiday home in Renesse for peace, space, and nature.",
    "footer.nav": "Navigation",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "form.checkin": "Date from",
    "form.checkout": "Date to",
    "form.guests": "Number of persons",
    "form.phone": "Phone number",
    "form.age_oldest": "Age of oldest guest",
    "form.pet": "Bringing a pet?",
    "form.yes": "Yes",
    "form.no": "No",
    "form.remarks": "Remarks",
    "form.disclaimer": "The landlord will contact you as soon as possible.",
    "hero.accommodation.subtitle": "Coming home...",
    "hero.surroundings.subtitle": "Discover Zeeland...",
    "hero.gallery.subtitle": "An impression...",
    "hero.contact.subtitle": "Questions?...",
    "hero.home.aan_zee": "Welcome to...",
    "hero.home.by": "at"
  },
  de: {
    "nav.home": "Home",
    "nav.accommodation": "Unterkunft",
    "nav.surroundings": "Umgebung",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt",
    "nav.booking": "Buchen",
    "btn.book": "Jetzt Buchen",
    "btn.readMore": "Mehr lesen",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.by": "Webseite von",
    "footer.tagline": "Entspannen Sie an der Küste Seelands. Ihr Ferienhaus in Renesse für Ruhe, Raum und Natur.",
    "footer.nav": "Navigation",
    "form.name": "Name",
    "form.email": "E-Mail",
    "form.message": "Nachricht",
    "form.send": "Senden",
    "form.checkin": "Anreise",
    "form.checkout": "Abreise",
    "form.guests": "Gäste",
    "form.phone": "Telefonnummer",
    "form.age_oldest": "Alter des ältesten Gastes",
    "form.pet": "Haustier mitbringen?",
    "form.yes": "Ja",
    "form.no": "Nein",
    "form.remarks": "Bemerkungen",
    "form.disclaimer": "Der Vermieter wird sich so schnell wie möglich bei Ihnen melden.",
    "hero.accommodation.subtitle": "Nach Hause kommen...",
    "hero.surroundings.subtitle": "Zeeland entdecken...",
    "hero.gallery.subtitle": "Ein Eindruck...",
    "hero.contact.subtitle": "Fragen?...",
    "hero.home.aan_zee": "Willkommen bei...",
    "hero.home.by": "bei"
  }
};
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui["nl"][key];
  };
}

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { lang } = Astro2.params;
  const currentLang = lang || "nl";
  const t = useTranslations(currentLang);
  const links = [
    { name: t("nav.home"), href: getRelativeLocaleUrl(currentLang, "/") },
    { name: t("nav.accommodation"), href: getRelativeLocaleUrl(currentLang, "accommodatie") },
    {
      name: t("nav.surroundings"),
      href: getRelativeLocaleUrl(currentLang, "omgeving"),
      children: [
        { name: "Renesse", href: getRelativeLocaleUrl(currentLang, "omgeving/renesse") },
        { name: "Handige links", href: getRelativeLocaleUrl(currentLang, "omgeving/links") }
      ]
    },
    { name: t("nav.gallery"), href: getRelativeLocaleUrl(currentLang, "gallerij") },
    { name: t("nav.contact"), href: getRelativeLocaleUrl(currentLang, "contact") }
  ];
  const { forceOpaque = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`fixed top-0 w-full z-50 transition-all duration-300 ${forceOpaque ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"}`, "class")} id="navbar"${addAttribute(forceOpaque ? "true" : "false", "data-force-opaque")}> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-20 transition-all duration-300" id="nav-container"> <!-- Logo --> <div class="flex-shrink-0 flex items-center"> <a${addAttribute(getRelativeLocaleUrl(currentLang, "/"), "href")} class="block hover:scale-105 transition-transform duration-300"> <img src="/images/logo.png" alt="Zeeuwse Buurn Logo" class="h-16 w-auto"> </a> </div> <!-- Desktop Menu --> <div class="hidden md:flex items-center space-x-8"> ${links.map((link) => renderTemplate`<div class="relative group"> <a${addAttribute(link.href, "href")} class="relative text-brand-dark font-medium hover:text-brand-green transition-colors font-heading text-lg group flex items-center gap-1"> ${link.name} ${link.children && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg>`} <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green group-hover:w-full transition-all duration-300"></span> </a> ${link.children && renderTemplate`<div class="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-brand-clay/10"> ${link.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="block px-4 py-2 text-brand-dark hover:text-brand-green hover:bg-brand-light/50 transition-colors font-medium"> ${child.name} </a>`)} </div>`} </div>`)} ${renderComponent($$result, "Button", $$Button, { "href": getRelativeLocaleUrl(currentLang, "boeken"), "variant": "primary", "class": "bg-brand-green hover:bg-brand-dark hover:shadow-xl hover-glow !text-white !font-bold !rounded-full !px-8 !py-3 transform hover:scale-105 transition-all" }, { "default": ($$result2) => renderTemplate`${t("btn.book")}` })} ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})} </div> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center gap-4"> ${renderComponent($$result, "LanguagePicker", $$LanguagePicker, {})} <button id="mobile-menu-btn" class="text-brand-dark hover:text-brand-green focus:outline-none transition-colors p-2 rounded-lg hover:bg-brand-light/50"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu with Slide Animation --> <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-brand-clay/20 shadow-xl"> <div class="px-4 pt-4 pb-6 space-y-2"> ${links.map((link, index) => renderTemplate`<div> <a${addAttribute(link.href, "href")} class="block px-4 py-3 text-base font-medium text-brand-dark hover:text-brand-green hover:bg-brand-light/50 rounded-xl transition-all animate-slide-up bg-opacity-20 flex justify-between items-center"${addAttribute(`animation-delay: ${index * 50}ms`, "style")}> ${link.name} </a> ${link.children && renderTemplate`<div class="pl-4 space-y-1 mt-1 border-l-2 border-brand-green/20 ml-4"> ${link.children.map((child, childIndex) => renderTemplate`<a${addAttribute(child.href, "href")} class="block px-4 py-2 text-sm font-medium text-brand-dark/80 hover:text-brand-green rounded-lg transition-all animate-slide-up"${addAttribute(`animation-delay: ${index * 50 + (childIndex + 1) * 30}ms`, "style")}> ${child.name} </a>`)} </div>`} </div>`)} <div class="pt-2 animate-slide-up delay-300"> ${renderComponent($$result, "Button", $$Button, { "href": getRelativeLocaleUrl(currentLang, "boeken"), "variant": "primary", "class": "w-full justify-center bg-brand-green hover:bg-brand-dark !text-white !rounded-full !py-3 shadow-lg" }, { "default": ($$result2) => renderTemplate`${t("btn.book")}` })} </div> </div> </div> </nav> ${renderScript($$result, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.params;
  const currentLang = lang || "nl";
  const t = useTranslations(currentLang);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const links = [
    { name: t("nav.home"), href: getRelativeLocaleUrl(currentLang, "/") },
    { name: t("nav.accommodation"), href: getRelativeLocaleUrl(currentLang, "accommodatie") },
    { name: t("nav.surroundings"), href: getRelativeLocaleUrl(currentLang, "omgeving") },
    { name: t("nav.contact"), href: getRelativeLocaleUrl(currentLang, "contact") }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-brand-green text-white py-16 mt-auto overflow-hidden"> <!-- Decorative Wave at Top --> <div class="absolute top-0 left-0 right-0 pointer-events-none transform -translate-y-full"> <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto"> <path d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="url(#footerGradient)"></path> <defs> <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%"> <stop offset="0%" style="stop-color:#2C5530;stop-opacity:1"></stop> <stop offset="50%" style="stop-color:#14B8A6;stop-opacity:0.8"></stop> <stop offset="100%" style="stop-color:#10B981;stop-opacity:1"></stop> </linearGradient> </defs> </svg> </div> <!-- Floating Background Elements --> <div class="absolute inset-0 pointer-events-none opacity-10"> <div class="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div> <div class="absolute bottom-10 left-20 w-80 h-80 bg-brand-accent rounded-full blur-3xl animate-float delay-400"></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12"> <!-- Brand --> <div class="col-span-1 md:col-span-2"> <a${addAttribute(getRelativeLocaleUrl(currentLang, "/"), "href")} class="block hover:scale-105 transition-transform inline-block mb-4"> <img src="/images/logo.png" alt="Zeeuwse Buurn Logo" class="h-16 w-auto brightness-0 invert"> </a> <p class="text-white/80 max-w-sm leading-relaxed mb-6"> ${t("footer.tagline")} </p> </div> <!-- Links --> <div> <h3 class="font-bold text-white mb-4 font-heading text-lg">${t("footer.nav")}</h3> <ul class="space-y-3"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-white/70 hover:text-white transition-all hover:translate-x-1 inline-block">
→ ${link.name} </a> </li>`)} </ul> </div> <!-- Contact --> <div> <h3 class="font-bold text-white mb-4 font-heading text-lg">${t("nav.contact")}</h3> <address class="not-italic text-white/70 space-y-2 leading-relaxed"> <p>Park 'De Horizon' 69</p> <p>4325 HZ Renesse</p> <p>Zeeland, Nederland</p> <p class="pt-3"> <a href="mailto:info@zeeuwsebuurn.nl" class="text-white font-bold hover:text-brand-clay transition-colors inline-flex items-center gap-2 group"> ${renderComponent($$result, "Mail", Mail, { "className": "w-5 h-5 group-hover:scale-110 transition-transform" })}
info@zeeuwsebuurn.nl
</a> </p> </address> </div> </div> <!-- Bottom Bar --> <div class="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60"> <p class="mb-4 md:mb-0">&copy; ${currentYear} Zeeuwse Buurn. ${t("footer.rights")}</p> <div class="flex items-center gap-2"> <span>${t("footer.by")}</span> <a href="https://zee-zicht.nl" target="_blank" rel="noopener noreferrer" class="font-bold text-white hover:text-brand-clay transition-all hover:scale-105 inline-block">
Zee-Zicht
</a> </div> </div> </div> </footer>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Footer.astro", void 0);

export { $$Layout as $, $$Navbar as a, $$Footer as b, $$Button as c, getRelativeLocaleUrl as g, useTranslations as u };
