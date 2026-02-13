import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BRTF9q4a.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BBsQbn3c.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_BAvnkl2I.mjs';
import { $ as $$Hero, a as $$About } from '../chunks/About_D66bM5Lf.mjs';
import { $ as $$Features } from '../chunks/Features_D5EG8yzQ.mjs';
import { $ as $$Location } from '../chunks/Location_vT185fLF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pages = await getCollection("site");
  const page = pages.find((p) => p.slug === "nl/home");
  if (!page) {
    throw new Error("Default content (nl/home) not found");
  }
  const { data } = page;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.title, "description": data.description, "lang": "nl" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "data": data.hero })} ${renderComponent($$result2, "About", $$About, { "data": data.about })} ${renderComponent($$result2, "Features", $$Features, { "data": data.features })} ${renderComponent($$result2, "Location", $$Location, { "data": data.location })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/index.astro", void 0);

const $$file = "/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
