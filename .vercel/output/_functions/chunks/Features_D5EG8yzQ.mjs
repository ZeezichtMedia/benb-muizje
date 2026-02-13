import { c as createComponent, f as createAstro, m as maybeRenderHead, a as renderTemplate, b as addAttribute, r as renderComponent } from './astro/server_BRTF9q4a.mjs';
import 'piccolore';
import { Users, Umbrella, Dog, Car, TreePine, Wifi } from 'lucide-react';

const $$Astro = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features;
  const { data } = Astro2.props;
  const iconMap = {
    wifi: Wifi,
    garden: TreePine,
    parking: Car,
    dog: Dog,
    beach: Umbrella,
    family: Users
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-24 bg-gradient-to-b from-white to-brand-light relative overflow-hidden"> <!-- Decorative Background Elements --> <div class="absolute inset-0 pointer-events-none"> <div class="absolute top-20 right-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-3xl"></div> <div class="absolute bottom-20 left-10 w-96 h-96 bg-brand-clay/10 rounded-full blur-3xl"></div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center mb-16 animate-slide-up"> <h2 class="text-4xl md:text-5xl font-heading font-black text-brand-green mb-4 text-shadow">${data.title}</h2> <p class="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">${data.subtitle}</p> ${data.description && renderTemplate`<div class="mt-8 max-w-3xl mx-auto text-left space-y-4"> ${Array.isArray(data.description) ? data.description.map((desc) => renderTemplate`<p class="text-brand-dark/80 leading-relaxed font-medium">${desc}</p>`) : renderTemplate`<p class="text-brand-dark/80 leading-relaxed font-medium">${data.description}</p>`} </div>`} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${data.items.map((item, index) => {
    const IconComponent = iconMap[item.icon] || Wifi;
    return renderTemplate`<div class="card-gradient hover-lift animate-scale-in group relative overflow-hidden"${addAttribute(`animation-delay: ${index * 100}ms`, "style")}> <div class="w-16 h-16 bg-brand-green rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:bg-brand-dark"> ${renderComponent($$result, "IconComponent", IconComponent, { "className": "w-8 h-8" })} </div> <h3 class="text-xl font-bold text-brand-dark mb-3 font-heading group-hover:gradient-text transition-all">${item.title}</h3> <p class="text-brand-dark/70 leading-relaxed">${item.desc}</p> <!-- Decorative Corner Accent --> <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div>`;
  })} </div> </div> </section>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/home/Features.astro", void 0);

export { $$Features as $ };
