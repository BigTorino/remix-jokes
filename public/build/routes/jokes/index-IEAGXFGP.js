import {
  require_db
} from "/build/_shared/chunk-HVBC3EYW.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z3OLGDNE.js";

// browser-route-module:C:\Users\victo\Desktop\Hamal\remix\remix-jokes\app\routes\jokes\index.tsx?browser
init_react();

// app/routes/jokes/index.tsx
init_react();
var import_db = __toModule(require_db());
function JokesIndexRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
export {
  JokesIndexRoute as default
};
//# sourceMappingURL=/build/routes/jokes/index-IEAGXFGP.js.map
