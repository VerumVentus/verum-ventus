import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';

import VueClickAway from 'vue3-click-away';
import VueLazyload from 'vue-lazyload';
import VueHighlightJS from 'vue3-highlightjs';
import { VuePlotly } from 'vue3-plotly';
import './dracula.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as HiIcons from 'oh-vue-icons/icons/hi';
import * as BiIcons from 'oh-vue-icons/icons/bi';
import * as LaIcons from 'oh-vue-icons/icons/la';

const La = Object.values({ ...LaIcons });
addIcons(...La);
const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);
const Bi = Object.values({ ...BiIcons });
addIcons(...Bi);

const app = createApp(App);
app.use(router);
app.component('v-plotly', VuePlotly);
app.component('v-icon', OhVueIcon);
app.use(VueClickAway);
app.use(VueLazyload);
app.use(VueHighlightJS);
app.mount('#app');
