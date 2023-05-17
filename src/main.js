import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';

import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';
import VueClickAway from 'vue3-click-away';
import { createRouter, createWebHistory } from 'vue-router';
import VueLazyload from 'vue-lazyload';
import VueEmbedGist from 'vue-embed-gist';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import {
  OiAccessibility,
  OiSearch,
  OiSkip,
  OiStar,
  OiTerminal,
  OiTelescope,
} from 'oh-vue-icons/icons';

addIcons(OiAccessibility, OiSearch, OiSkip, OiStar, OiTerminal, OiTelescope);

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.component('v-embed-gist', VueEmbedGist);
app.use(VueFullPage);
app.use(VueClickAway);
app.use(VueLazyload);
app.mount('#app');
