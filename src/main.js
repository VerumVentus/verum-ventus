import { createApp } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';

import VueClickAway from 'vue3-click-away';
import VueLazyload from 'vue-lazyload';
import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/dracula.css';

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as HiIcons from 'oh-vue-icons/icons/hi';
import * as BiIcons from 'oh-vue-icons/icons/bi';

const Hi = Object.values({ ...HiIcons });
addIcons(...Hi);
const Bi = Object.values({ ...BiIcons });
addIcons(...Bi);

const app = createApp(App);
app.use(router);
app.component('v-icon', OhVueIcon);
app.use(VueClickAway);
app.use(VueLazyload);
app.use(VueHighlightJS);
app.mount('#app');
