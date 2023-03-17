import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

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
app.component('v-icon', OhVueIcon);
app.use(VueFullPage);
app.mount('#app');
