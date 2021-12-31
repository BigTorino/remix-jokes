import {
  JokeDisplay
} from "/build/_shared/chunk-F6QQWMQV.js";
import "/build/_shared/chunk-IPERP6AS.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  import_react_router_dom,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-PZO43O6Y.js";
import "/build/_shared/chunk-A7HUMUCP.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\victo\Desktop\Hamal\remix\remix-jokes\app\routes\jokes\$jokeId.tsx?browser
init_react();

// app/routes/jokes/$jokeId.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
var meta = ({
  data
}) => {
  if (!data) {
    return {
      title: "No joke",
      description: "No joke found"
    };
  }
  return {
    title: `"${data.joke.name}" joke`,
    description: `Enjoy the "${data.joke.name}" joke and much more`
  };
};
function JokeRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ React.createElement(JokeDisplay, {
    joke: data.joke,
    isOwner: data.isOwner
  });
}
function CatchBoundary() {
  const caught = useCatch();
  const params = (0, import_react_router_dom.useParams)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Huh? What the heck is ", params.jokeId, "?");
    }
    case 401: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Sorry, but ", params.jokeId, " is not your joke.");
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  const { jokeId } = (0, import_react_router_dom.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}
export {
  CatchBoundary,
  ErrorBoundary,
  JokeRoute as default,
  meta
};
//# sourceMappingURL=/build/routes/jokes/$jokeId-N6FD5JWV.js.map
