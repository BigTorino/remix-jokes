import {
  Links,
  LiveReload,
  React,
  import_react_router_dom,
  init_react
} from "/build/_shared/chunk-Z3OLGDNE.js";

// browser-route-module:C:\Users\victo\Desktop\Hamal\remix\remix-jokes\app\root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/styles/global.css
var global_default = "/build/_assets/global-4YCZRRFN.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-JH6X4EEH.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-ILZ6ME73.css";

// app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("title", null, "Remix: So great, it's funny!"), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), true ? /* @__PURE__ */ React.createElement(LiveReload, null) : null));
}
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-V4BHPJH6.js.map
