import{a as k}from"/build/_shared/chunk-EYYFEV5H.js";import{a as p}from"/build/_shared/chunk-NZCB3PMS.js";import{b as o,f as n,g as a,k as d}from"/build/_shared/chunk-KB55DNS7.js";import"/build/_shared/chunk-JKO55VJE.js";import{b as r,e,f as t}from"/build/_shared/chunk-AKSB5QXU.js";t();t();var c=r(p()),h=r(k());var m="/build/_assets/jokes-OOKJEYAG.css";var f=()=>[{rel:"stylesheet",href:m}];function l(){let s=a();return e.createElement("div",{className:"jokes-layout"},e.createElement("header",{className:"jokes-header"},e.createElement("div",{className:"container"},e.createElement("h1",{className:"home-link"},e.createElement(o,{to:"/",title:"Remix Jokes","aria-label":"Remix Jokes",prefetch:"intent"},e.createElement("span",{className:"logo"},"\u{1F92A}"),e.createElement("span",{className:"logo-medium"},"J\u{1F92A}KES"))),s.user?e.createElement("div",{className:"user-info"},e.createElement("span",null,`Hi ${s.user.username}`),e.createElement(n,{action:"/logout",method:"post"},e.createElement("button",{type:"submit",className:"button"},"Logout"))):e.createElement(o,{prefetch:"intent",to:"/login"},"Login"))),e.createElement("main",{className:"jokes-main"},e.createElement("div",{className:"container"},e.createElement("div",{className:"jokes-list"},e.createElement(o,{to:".",prefetch:"intent"},"Get a random joke"),e.createElement("p",null,"Here are a few more jokes to check out:"),e.createElement("ul",null,s.jokeListItems.map(i=>e.createElement("li",{key:i.id},e.createElement(o,{prefetch:"intent",to:i.id},i.name)))),e.createElement(o,{prefetch:"intent",to:"new",className:"button"},"Add your own")),e.createElement("div",{className:"jokes-outlet"},e.createElement(d.Outlet,null)))))}export{l as default,f as links};
