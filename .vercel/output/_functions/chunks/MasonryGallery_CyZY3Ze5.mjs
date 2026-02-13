import { c as createComponent, f as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BRTF9q4a.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro();
const $$MasonryGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MasonryGallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> ${images.map((image) => renderTemplate`<div class="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-brand-clay/20 aspect-[4/3]"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"> ${image.caption && renderTemplate`<p class="text-white font-heading text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"> ${image.caption} </p>`} </div> </div>`)} </div>`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/MasonryGallery.astro", void 0);

export { $$MasonryGallery as $ };
