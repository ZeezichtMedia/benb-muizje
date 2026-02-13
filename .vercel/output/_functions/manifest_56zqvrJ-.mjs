import 'piccolore';
import { l as decodeKey } from './chunks/astro/server_BRTF9q4a.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_34Bd0GhO.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/","cacheDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/node_modules/.astro/","outDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/dist/","srcDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/src/","publicDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/public/","buildClientDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/dist/client/","buildServerDir":"file:///Users/Shared/coderen/benb-Zeeuwsebuurn/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"gallerij/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallerij","isIndex":false,"type":"page","pattern":"^\\/gallerij\\/?$","segments":[[{"content":"gallerij","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallerij.astro","pathname":"/gallerij","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"omgeving/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/omgeving","isIndex":false,"type":"page","pattern":"^\\/omgeving\\/?$","segments":[[{"content":"omgeving","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/omgeving.astro","pathname":"/omgeving","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodatie.6Kd9WpmI.css"}],"routeData":{"route":"/accommodatie","isIndex":false,"type":"page","pattern":"^\\/accommodatie\\/?$","segments":[[{"content":"accommodatie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/accommodatie.astro","pathname":"/accommodatie","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/calendar","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/calendar\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"calendar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/calendar.ts","pathname":"/api/calendar","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-mail","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-mail\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-mail","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-mail.ts","pathname":"/api/send-mail","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodatie.6Kd9WpmI.css"}],"routeData":{"route":"/boeken","isIndex":false,"type":"page","pattern":"^\\/boeken\\/?$","segments":[[{"content":"boeken","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boeken.astro","pathname":"/boeken","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodatie.6Kd9WpmI.css"}],"routeData":{"route":"/omgeving/links","isIndex":false,"type":"page","pattern":"^\\/omgeving\\/links\\/?$","segments":[[{"content":"omgeving","dynamic":false,"spread":false}],[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/omgeving/links.astro","pathname":"/omgeving/links","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodatie.6Kd9WpmI.css"}],"routeData":{"route":"/omgeving/renesse","isIndex":false,"type":"page","pattern":"^\\/omgeving\\/renesse\\/?$","segments":[[{"content":"omgeving","dynamic":false,"spread":false}],[{"content":"renesse","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/omgeving/renesse.astro","pathname":"/omgeving/renesse","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/accommodatie.6Kd9WpmI.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/accommodatie.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/accommodatie@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/gallerij.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/gallerij@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/omgeving.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/omgeving@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/accommodatie.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/accommodatie@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/gallerij.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/gallerij@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/omgeving@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/[lang]/boeken.astro",{"propagation":"none","containsHead":true}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/boeken.astro",{"propagation":"none","containsHead":true}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/links.astro",{"propagation":"none","containsHead":true}],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/omgeving/renesse.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/accommodatie@_@astro":"pages/accommodatie.astro.mjs","\u0000@astro-page:src/pages/api/calendar@_@ts":"pages/api/calendar.astro.mjs","\u0000@astro-page:src/pages/api/send-mail@_@ts":"pages/api/send-mail.astro.mjs","\u0000@astro-page:src/pages/boeken@_@astro":"pages/boeken.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/gallerij@_@astro":"pages/gallerij.astro.mjs","\u0000@astro-page:src/pages/omgeving/links@_@astro":"pages/omgeving/links.astro.mjs","\u0000@astro-page:src/pages/omgeving/renesse@_@astro":"pages/omgeving/renesse.astro.mjs","\u0000@astro-page:src/pages/omgeving@_@astro":"pages/omgeving.astro.mjs","\u0000@astro-page:src/pages/[lang]/accommodatie@_@astro":"pages/_lang_/accommodatie.astro.mjs","\u0000@astro-page:src/pages/[lang]/boeken@_@astro":"pages/_lang_/boeken.astro.mjs","\u0000@astro-page:src/pages/[lang]/contact@_@astro":"pages/_lang_/contact.astro.mjs","\u0000@astro-page:src/pages/[lang]/gallerij@_@astro":"pages/_lang_/gallerij.astro.mjs","\u0000@astro-page:src/pages/[lang]/omgeving@_@astro":"pages/_lang_/omgeving.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_56zqvrJ-.mjs","/Users/Shared/coderen/benb-Zeeuwsebuurn/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DoOMLgLi.mjs","/Users/Shared/coderen/benb-Zeeuwsebuurn/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/Shared/coderen/benb-Zeeuwsebuurn/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_He1oDs78.mjs","/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/booking/AvailabilityCalendar":"_astro/AvailabilityCalendar.Di4MJrl3.js","@astrojs/react/client.js":"_astro/client.9unXo8s5.js","/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.DilMYO77.js","/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.BEdoog8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"contact-form\"),t=document.getElementById(\"form-status\"),e=n?.querySelector('button[type=\"submit\"]');n&&n.addEventListener(\"submit\",async s=>{s.preventDefault();const a=new FormData(n),o=Object.fromEntries(a.entries());o.type=\"contact\",e&&(e.disabled=!0,e.textContent=\"Verzenden...\");try{if((await fetch(\"/api/send-mail\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(o)})).ok)t&&(t.textContent=\"Bedankt! Uw bericht is verzonden.\",t.className=\"text-center text-sm font-bold text-green-600 block mt-4\"),n.reset();else throw new Error(\"Verzenden mislukt\")}catch(r){console.error(r),t&&(t.textContent=\"Er ging iets mis. Probeer het later opnieuw of mail ons direct.\",t.className=\"text-center text-sm font-bold text-red-500 block mt-4\")}finally{e&&(e.disabled=!1,e.textContent=\"Verstuur Bericht\")}});"],["/Users/Shared/coderen/benb-Zeeuwsebuurn/src/components/common/Navbar.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"mobile-menu-btn\"),a=document.getElementById(\"mobile-menu\"),e=document.getElementById(\"navbar\"),t=document.getElementById(\"nav-container\");n&&a&&n.addEventListener(\"click\",()=>{a.classList.toggle(\"hidden\")});const c=()=>{const d=window.scrollY;if(e&&t){const s=e.dataset.forceOpaque===\"true\";d>20||s?(e.classList.remove(\"bg-transparent\",\"py-4\"),e.classList.add(\"bg-white/95\",\"backdrop-blur-md\",\"shadow-lg\",\"py-2\"),t.classList.remove(\"h-20\"),t.classList.add(\"h-16\")):s||(e.classList.add(\"bg-transparent\",\"py-4\"),e.classList.remove(\"bg-white/95\",\"backdrop-blur-md\",\"shadow-lg\",\"py-2\"),t.classList.add(\"h-20\"),t.classList.remove(\"h-16\"))}};window.addEventListener(\"scroll\",c);c();"]],"assets":["/_astro/accommodatie.6Kd9WpmI.css","/favicon.png","/favicon.svg","/_astro/AvailabilityCalendar.Di4MJrl3.js","/_astro/client.9unXo8s5.js","/_astro/index.WFquGv8Z.js","/images/beach.jpg","/images/bedroom-1.jpg","/images/brouwersdam.png","/images/centrum-renesse.jpg","/images/exterior-1.jpg","/images/garden.jpg","/images/hero.jpg","/images/home-hero.jpg","/images/kitchen.jpg","/images/logo.png","/images/natuur-renesse.jpg","/images/neeltje-jans.jpg","/images/renesse-map.jpg","/images/renesse_beach_parking.png","/images/renesse_dunes_path.png","/images/renesse_ev_charging.png","/images/renesse_mini_market.png","/images/renesse_village_terrace.png","/images/surroundings.jpg","/images/terrace.jpg","/contact/index.html","/gallerij/index.html","/omgeving/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["nl","en","de"],"defaultLocale":"nl","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"syUX1yFYuLHPYDnP0ySsEzI77fq5KfVTCuYZfHjWLhs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
