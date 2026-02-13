import { c as createComponent, f as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BRTF9q4a.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$Location = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Location;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-brand-light"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-4xl font-heading font-black text-brand-green mb-4">${data.title}</h2> <p class="text-lg text-brand-dark/70 max-w-2xl mx-auto">${data.subtitle}</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${data.items.map((item) => renderTemplate`<div class="group relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] cursor-pointer"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8"> <h3 class="text-2xl font-bold text-white mb-2 font-heading translate-y-4 group-hover:translate-y-0 transition-transform duration-300">${item.title}</h3> <p class="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">${item.desc}</p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/home/Location.astro", void 0);

export { $$Location as $ };
