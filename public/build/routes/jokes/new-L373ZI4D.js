import {
  JokeDisplay
} from "/build/_shared/chunk-3CCAY37R.js";
import "/build/_shared/chunk-MGZ6IHO4.js";
import {
  require_session
} from "/build/_shared/chunk-JHG2B4Q5.js";
import {
  require_db
} from "/build/_shared/chunk-SMZ7NZN3.js";
import {
  Form,
  Link,
  useActionData,
  useCatch,
  useTransition
} from "/build/_shared/chunk-GHFPT2FE.js";
import "/build/_shared/chunk-6QH5KI2V.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:C:\Users\victo\Desktop\Hamal\remix\remix-jokes\app\routes\jokes\new.tsx?browser
init_react();

// app/routes/jokes/new.tsx
init_react();
var import_db = __toModule(require_db());
var import_session = __toModule(require_session());
function validateJokeContent(content) {
  if (content.length < 10) {
    return `That joke is too short`;
  }
}
function validateJokeName(name) {
  if (name.length < 2) {
    return `That joke's name is too short`;
  }
}
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  const transition = useTransition();
  if (transition.submission) {
    const name = transition.submission.formData.get("name");
    const content = transition.submission.formData.get("content");
    if (typeof name === "string" && typeof content === "string" && !validateJokeContent(content) && !validateJokeName(name)) {
      return /* @__PURE__ */ React.createElement(JokeDisplay, {
        joke: { name, content },
        isOwner: true,
        canDelete: false
      });
    }
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    name: "name",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
    "aria-describedby": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  })), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", " ", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    name: "content",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
    "aria-describedby": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  })), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}
function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 401) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, /* @__PURE__ */ React.createElement("p", null, "You must be logged in to create a joke."), /* @__PURE__ */ React.createElement(Link, {
      to: "/login"
    }, "Login"));
  }
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Something unexpected went wrong. Sorry about that.");
}
export {
  CatchBoundary,
  ErrorBoundary,
  NewJokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/new-L373ZI4D.js.map
