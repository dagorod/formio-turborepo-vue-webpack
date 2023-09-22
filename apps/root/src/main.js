import { registerApplication, start } from "single-spa";
console.log('test')
registerApplication({
  name: "web",
  app: () => import('http://localhost:3001/src/main.js'),
  activeWhen: ["/"],
});


start({
  urlRerouteOnly: true,
});
