import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_9uhC5b-a.mjs';
import { manifest } from './manifest_56zqvrJ-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/accommodatie.astro.mjs');
const _page2 = () => import('./pages/api/calendar.astro.mjs');
const _page3 = () => import('./pages/api/send-mail.astro.mjs');
const _page4 = () => import('./pages/boeken.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/gallerij.astro.mjs');
const _page7 = () => import('./pages/omgeving/links.astro.mjs');
const _page8 = () => import('./pages/omgeving/renesse.astro.mjs');
const _page9 = () => import('./pages/omgeving.astro.mjs');
const _page10 = () => import('./pages/_lang_/accommodatie.astro.mjs');
const _page11 = () => import('./pages/_lang_/boeken.astro.mjs');
const _page12 = () => import('./pages/_lang_/contact.astro.mjs');
const _page13 = () => import('./pages/_lang_/gallerij.astro.mjs');
const _page14 = () => import('./pages/_lang_/omgeving.astro.mjs');
const _page15 = () => import('./pages/_lang_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/accommodatie.astro", _page1],
    ["src/pages/api/calendar.ts", _page2],
    ["src/pages/api/send-mail.ts", _page3],
    ["src/pages/boeken.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/gallerij.astro", _page6],
    ["src/pages/omgeving/links.astro", _page7],
    ["src/pages/omgeving/renesse.astro", _page8],
    ["src/pages/omgeving.astro", _page9],
    ["src/pages/[lang]/accommodatie.astro", _page10],
    ["src/pages/[lang]/boeken.astro", _page11],
    ["src/pages/[lang]/contact.astro", _page12],
    ["src/pages/[lang]/gallerij.astro", _page13],
    ["src/pages/[lang]/omgeving.astro", _page14],
    ["src/pages/[lang]/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6f9676f8-81f0-43b7-9ac6-cad213cd66e0",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
