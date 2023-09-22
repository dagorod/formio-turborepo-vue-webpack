import singleSpaVue from 'single-spa-vue';
import { createApp, h } from 'vue'
import App from './App.vue'


console.log('dago is hrter')
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },

});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
