import { registerApplication, start } from "single-spa";
registerApplication({
  name: "formiovite",
  app: () => import('http://localhost:3001/src/main.js'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
